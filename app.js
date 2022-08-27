//express addition
import express from 'express';
import ejs from 'ejs';

//initialize express
const app = express();
//view engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('public'));


//port 
const PORT = process.env.PORT || 3000;



//routes
app.get('/', function(req, res){
    res.render('index');
})



app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});