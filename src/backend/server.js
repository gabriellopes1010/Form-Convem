const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors')


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json())

app.post('/check',(req, res) => {
  const responseUser = req.body.response.toLowerCase();
  if(responseUser === 'sim'){
    res.json({ result: 'sucess' })
  } else {
    res.json({ result: 'error' })
  }
})

app.listen(port, () => {
  console.log(`Servidor está rodando na porta  🔥🔥🔥http://localhost:${port}`)
})
