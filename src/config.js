import "dotenv/config";
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/ejercicio3_db";
console.log(MONGODB_URI);
