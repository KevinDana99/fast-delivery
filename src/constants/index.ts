const SERVER_PORT = 4000;
const SERVER_PROD_URI = "https://vercel-server-fast.vercel.app";
const SERVER_DEV_URI = `localhost:${SERVER_PORT}`;
const SERVER_WS_URI_DEV = `ws://localhost:${SERVER_PORT}`;
const SERVER_WS_URI_PROD = `wss://vercel-server-fast.vercel.app`;

const DEV_ENVIRONMENT = process.env.NODE_ENV === "development";

export const SERVER_URI = DEV_ENVIRONMENT ? SERVER_DEV_URI : SERVER_PROD_URI;
export const SERVER_WS_URI = DEV_ENVIRONMENT
  ? SERVER_WS_URI_DEV
  : SERVER_WS_URI_PROD;
