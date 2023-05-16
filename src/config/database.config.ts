export default () => ({
    username: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    type: process.env.DB_TYPE,
    password: process.env.DB_PASSWORD,
    synchronize: true, //we can set in env might have string
    database: process.env.DB_NAME,
});
