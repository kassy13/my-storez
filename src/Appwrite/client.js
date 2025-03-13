import { Client, Account, Databases } from "appwrite";

export const client = new Client();
export const account = new Account(client);
export const databases = new Databases(client);

client.setProject("67bda0b3003afba8dde2");
