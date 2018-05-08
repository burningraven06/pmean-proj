var dbConnStr = `postgres://${process.env.PG_DBUSERNAME}:${process.env.PG_DBPASSWORD}@localhost:5432/ng5db`;
module.exports = dbConnStr;