const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

mongoose
  .set('strictQuery', false)
  .connect(process.env.DATABASE)
  .then(() => console.log(`ðð¼DB connection successful!`));

app.listen(4000, () => {
  console.log('Live on port 4000');
});
