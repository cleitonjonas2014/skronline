const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Backend da SKRONLINE rodando!');
});

app.listen(PORT, () => {
  console.log(`Servidor backend ouvindo na porta ${PORT}`);
});
