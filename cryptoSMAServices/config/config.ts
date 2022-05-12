const dotenv = require('dotenv');
dotenv.config();

export default {
    API_KEY: process.env.API_KEY ?? '',
    API_BASE: process.env.API_BASE ?? ''
}