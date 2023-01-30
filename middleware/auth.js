const jwt = require("jsonwebtoken");
const config = require("config");
const userService = require("../services/usersService");
const commonService = require("../services/commonService");

module.exports = async (req, res, next) => {
    const token = req.header("authorization");
    let ipAddress = req.header('x-forwarded-for') || req.connection.remoteAddress;
    var excludedArray = [];//public routes
    var addLogs = true;
    if (excludedArray.indexOf(req.originalUrl) > -1) {
        addLogs = false;
    }
    if (!token)
        return res.status(401).send("Access denied. No token provided.");
    try {
        const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
        req.userInfo = await userService.getUserByEmail(decoded.user.email, 'user_id');
        decoded.user.userName = decoded.user.first_name + ' ' + decoded.user.last_name;
        req.decoded = decoded;
        if (addLogs) {
            var logArr = {
                user_id: decoded.user.identifier,
                log_action_id: 0,
                message: '',
                ip_address: ipAddress,
                request_uri: req.originalUrl,
                sessionId: req.header("authorization"),
            };
            //console.log(logArr);
            req.logData = await commonService.userLog("", "", logArr);
        }
        return next();
    } catch (ex) {
        res.status(401).send("Invalid token.");
    }
};