import cron from "node-cron";
import https from "https";
import dotenv from "dotenv";
dotenv.config();

const host = process.env.HOSTNAME || "http://localhost:8080";

const keepServerAlive = () => {
  cron.schedule("*/14 * * * *", () => {
    https
      .get(`${host}`, (res) => {
        console.log(`Server is alive. Status code: ${res.statusCode}`);
      })
      .on("error", (err) => {
        console.error("Error keeping server alive:", err.message);
      });
  });
  console.log("Cron job scheduled to run every 14 minute.");
};

export default keepServerAlive;
