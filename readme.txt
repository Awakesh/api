#to inislize sequelize ORM in our project
npx sequelize-cli init

#to create migration 
npx sequelize-cli model:generate --name Users --attributes userName:string,email:string,password:string,language:string

#to run migrations
npx sequelize-cli db:migrate