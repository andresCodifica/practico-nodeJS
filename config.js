module.exports = {
    api: {
        port: process.env.API_POST || 3000
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',//3306
        user: process.env.MYSQL_USER || '1uVP1L2AWO',
        password: process.env.MYSQL_PASS|| 'VtOXP2MbbS',
        database: process.env.MYSQL_DB || '1uVP1L2AWO',
    },
    
}