import 'dotenv/config';

export default {
  schema: './src/models/*.js',
  out:'./drzzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};