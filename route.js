const apiRoute = require('express').Router();
const userRoute = require('./routes/user.js');
const rolesRoute = require("./routes/roles")

apiRoute.use(userRoute)
apiRoute.use(rolesRoute)

module.exports = apiRoute;