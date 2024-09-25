import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config()

export const mailtrapClient = new MailtrapClient({
    endPoint: process.env.MAILTRAP_ENDPOINT,
    token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
    email: "hello@demomailtrap.com",
    name: "Irumi",
};
