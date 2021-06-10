const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.text());
const {answers} = require('./answers.js');




app.delete('/api/deleteAnswer', (req, res) =>{
    const index = answers.findIndex( atbilde => atbilde === req.body);

    if(index >= 0){
        answers.splice(index,1);
        res.sendStatus(200);
    }
    else{                                            
        res.sendStatus(400);
    }
    
})

app.post('/api/answer', (req, res) => {

    const found = answers.find(element => element === req.body);
    console.log(found);

    if(found == req.body){
        res.sendStatus(400);

    }
    else{
        answers.push(req.body);
        res.sendStatus(200);
        console.log(answers)
    }

});

app.get('/api/getAnswer', (req,res) =>{
    const randomAnswer =  answers[Math.floor(Math.random() * answers.length)];
    res.send(randomAnswer)
});


const port = 8080;
app.listen(port, () => console.log(`Server started on ${port}`));