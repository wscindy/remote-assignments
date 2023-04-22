const express = require('express')
const app = express()

// Serving static files in Express. The folder's name is 'public.'
app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
    console.log('On port 3000')
})



app.get('/', (req, res) => {
    res.send('Hello, My Server!')
})


app.get('/getData', (req, res) => {
    let result;
    let num = req.query.number
    let numCheck = Boolean(req.query.number)

    if (num === undefined) {
        result = 'Lack of Parameter'

    } else if (numCheck === false) {
        result = "You didn't give me any number."
    }
    else if (isNaN(num)) {

        result = 'Wrong Parameter'
        console.log(typeof (req))

    }
    else {
        var i = num;
        var arr = [];
        while (i > 0) {
            arr.push(i);
            i--;
        }
        var sum = arr.reduce((acc, val) => Number(acc) + Number(val), 0);
        result = sum;
    }
    res.send(`${result}`)
    console.log(JSON.stringify(result))
})