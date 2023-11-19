const express = require('express');
const app = express();
const port = 3000;

// Lista de funcionários em fila de espera e fila de liberação
const waitQueue = [];
const releaseQueue = [];
let isTimeAvailable = true;

app.use(express.json());
app.use(express.static('public'));

// Endpoint para receber solicitações de funcionários
app.post('/request-time', (req, res) => {
  if (isTimeAvailable) {
    // Concede tempo ao funcionário imediatamente
    const employee = req.body.employee;
    releaseQueue.push(employee);
    isTimeAvailable = false;
    res.status(200).json({ message: 'Tempo concedido com sucesso.' });
  } else {
    // Adiciona funcionário à fila de espera
    waitQueue.push(req.body.employee);
    res.status(200).json({ message: 'Você está na fila de espera.' });
  }
});

// Endpoint para liberar funcionários da fila de liberação após um período
app.post('/release-time', (req, res) => {
  if (releaseQueue.length > 0) {
    const employee = releaseQueue.shift();
    isTimeAvailable = true;
    // Notifique o funcionário ou use uma API de notificação aqui
    res.status(200).json({ message: 'Tempo liberado com sucesso.' });
  } else {
    res.status(200).json({ message: 'Nenhum funcionário para liberar no momento.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});