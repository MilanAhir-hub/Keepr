"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.pool = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const poolConfig = process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    }
    : {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5432,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: {
            rejectUnauthorized: false,
        },
    };
exports.pool = new pg_1.Pool(poolConfig);
const connectDB = async () => {
    try {
        const client = await exports.pool.connect();
        const result = await client.query("SELECT NOW()");
        console.log("PostgreSQL connected successfully at:", result.rows[0].now);
        client.release();
    }
    catch (error) {
        console.error("Failed to connect to PostgreSQL:", error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
exports.default = exports.pool;
//# sourceMappingURL=db.js.map