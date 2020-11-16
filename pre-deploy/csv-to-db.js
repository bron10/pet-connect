const { Pool, Client } = require("pg");
const csv = require('csvtojson');
const path = require("path");
const format = require('pg-format');
require('dotenv').config();
const {DB_USER, DB_HOST, DB_PORT, DB_PASS, DB_NAME_DEVELOPMENT, DB_NAME_PRODUCTION} = process.env;
const database  = DB_NAME_DEVELOPMENT;
const client = new Client({
  user: DB_USER,
  host: DB_HOST,
  database,
  password: DB_PASS,
  port: DB_PORT
})

console.log("database", database);
// const pool = new Pool();
client.connect()

csv().fromFile(path.join(__dirname, 'data.csv'))
.then(function(dataList){
  const flattenData = dataList.map((item) => {
    const dd = new Date().toISOString();
    return [item['ID'], item['First Name'], item['Last Name'], item['Email'], item['State'], item['Pet Experience'], dd, dd];
  })

  console.log("flattenData", flattenData);
  client.query(format('INSERT INTO "Customers"("ID", "firstName", "lastName", "email", "state", "petExperience", "createdAt", "updatedAt") VALUES %L', flattenData),[], (err, result)=>{
    console.log(err);
    console.log(result);
});
})