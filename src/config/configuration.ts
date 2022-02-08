export default () => ({
  port: parseInt(process.env.PORT, 10) || 8000,
  db_url: process.env.DB_URL || 'mongodb://localhost/todo',
});
