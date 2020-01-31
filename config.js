module.exports = {
    api: {
        port: process.env.API_POST || 3000
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    }

}