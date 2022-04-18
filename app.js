const client = require("./connection");
const express = require('express');

const app = express();

// // Middlewares
// app.use('/login', () => {
//     // console.log('this is middleware');
// });




// starting to listen to the server.
app.listen(3000, ()=> {
    console.log("server is listening at port 3000");
}); 


// Routes
app.get('/',(req, res) => {
    res.send('login page');
});

app.get('/users',(req, res) => {
    client.query(`select * from users`, (err,result) => {
        if(!err){
            res.send(result.rows);
        }
        else{
            res.sendStatus(500);
        }
    });
    client.end;
});

app.get('/users/:id',(req, res) => {
    client.query(`select * from users where id = ${req.params.id}`,(err, result) =>{
        if(err){
            res.sendStatus(500);
        }
        else if(result.rowCount === 0){
            res.sendStatus(404)
        }
        else {
            res.send(result.rows);
        }
    });
    client.end;
})


client.connect(); 