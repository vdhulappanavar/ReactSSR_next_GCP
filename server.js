require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
const csp = require('helmet-csp')
/*
app.use(csp({
    directives: {
    defaultSrc: ["'self'", 'data:font'],
    fontSrc: ["'self'", 'data:font']
    }
}))
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/mockCheck', (req, res) => {
    res.send({msg: 'hello'})
})

app.post('/mockCheckPost', function (req, res) {
    console.log(req.body)
    res.send({"checkmsg": "checkMsg"})

  })
// global error handler

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});