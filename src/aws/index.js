const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8011;

app.get('/', (req, res) => {
  res.status(200).json('home page');
});

app.listen(PORT, () => {
  try {
    console.log(`Server up on PORT ${PORT}`);
  } catch (e) {
    console.error(' --Server failed to load --', e);
  }
});
