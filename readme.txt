#to inislize sequelize ORM in our project
npx sequelize-cli init

#to create migration 
npx sequelize-cli model:generate --name Users --attributes userName:string,email:string,password:string,language:string,profile_picture:string,role_id:bigint,org_ids:bigint,permission_id:bigint,is_admin:BOOLEAN,is_active:BOOLEAN

npx sequelize-cli model:generate --name Access --attributes name:string,view:bigint,create:BOOLEAN,edit:BOOLEAN,delete:BOOLEAN

npx sequelize-cli model:generate --name Role --attributes name:string,description:string

npx sequelize-cli model:generate --name Organisation --attributes name:string,logo:string,industry:string,country_id:string,state_teritory:string,address_1:string,address_2:string,city:string,postal_code:bigint,iec:bigint,org_currency:bigint,inventory_start_date:date,fiscal_year:bigint,contact_no:bigint,email:string,default_org_flag:BOOLEAN

npx sequelize migration:generate --name add-associations

npx sequelize-cli db:migrate