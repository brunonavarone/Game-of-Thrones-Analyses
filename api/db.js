import mysql from 'mssql';

export const db = await mysql.connect({
  server: "mysqlservergot.database.windows.net",
  user: "azureuser",
  password: "1229918991Diego*",
  database: "mySampleDatabase",
  options:{
    encrypt: true,
  },
  port: 1433
})