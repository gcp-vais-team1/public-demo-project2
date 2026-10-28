// Synthetic fixture: intentionally unsafe so code scanning reports a finding.
const express = require('express');
const { exec } = require('child_process');

const app = express();

app.get('/run', (req, res) => {
  exec(req.query.cmd, (err, stdout) => {
    res.send(err ? 'failed' : stdout);
  });
});

app.listen(3000);
