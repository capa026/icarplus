const PORT = process.env.PORT ?? 8000;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from nodejssss');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
