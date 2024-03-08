
import app from    './app.js';


const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
})