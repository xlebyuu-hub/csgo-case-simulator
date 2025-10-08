const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Статические файлы
app.use(express.static('public'));
app.use(express.json());

// API маршруты
app.get('/api/profile', (req, res) => {
  res.json({ user: 'Player', balance: 1000 });
});

// Все остальные запросы на фронтенд
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ CS:GO Simulator запущен на порту ${PORT}`);
});
