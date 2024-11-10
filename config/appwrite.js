import { Client, Databases, Account, Storage } from 'node-appwrite';

// Admin Client
const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66d1fb98002780ced7f2')
    .setKey('nope');

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
  };
};

const createSessionClient = async (session) => {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66d1fb98002780ced7f2');

  if (session) {
    client.setSession(session);
  }

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};

export { createAdminClient, createSessionClient };
