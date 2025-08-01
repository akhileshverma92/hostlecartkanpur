import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your Appwrite Endpoint
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your Project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export { client };