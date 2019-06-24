const express = require('express')
const app = express()
const port = 3001
const msgCtrl = require('./server/controllers/msgCtrl')

app.use(express.json());

app.listen(port, () => {
    console.log(`server port ${port} is running`)
});

app.delete('/api/messages', msgCtrl.delete);

app.post('/api/messages', msgCtrl.create);

app.get('/api/messages', msgCtrl.read);

app.put('/api/messages', msgCtrl.update);


