const express = require('express')
const bodyParser = require('body-parser')
const port = 8080

const app = express()

const org_id = 'swl'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.get(`/${org_id}/assessment_request`, (req, res) => {
    res.send('User ID: 102109843521');
    console.log('GET')
});

app.post(`/${org_id}/assessment_report`, (req, res) => {
    let data = req.body;
    res.send('Data Recieved: ' + JSON.stringify(data));
    console.log('POST');
});

app.post(`/${org_id}/escalation_report`, (req, res) => {
    let data = req.body;
    res.send('Data Recieved: ' + JSON.stringify(data));
    console.log('POST: ' + JSON.stringify(data));
});

app.listen(port, () => {
    console.log(`Listerning on http://localhost:${port}`)
})