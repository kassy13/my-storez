import { Client, Account } from "appwrite";

export const client = new Client();
export const account = new Account(client);

client.setProject("67bda0b3003afba8dde2");
