require("dotenv").config();

const config= {
    port: process.env.PORT,
    jwtSecret : process.env.JWT_SECRET,
    DBUsername: process.env.DB_USERNAME,
    DBPassword: process.env.DB_PASSWORD,
    DBHost: process.env.DB_HOST,
    DBName: process.env.DB_NAME,
}

module.exports = config;