const express= require('express');
const path=require('path');
const port= 5000;

const db= require('./config/mongoose');
const Todo = require('./models/todoList');

const app= express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));


app.get('/',function(req,res)
{
    Todo.find({}, function(err,lists){
        if(err)
        {
            console.log("error in fetching");
            return;
        }
        return res.render('home',{
            list:lists
        })
    })
});

// CREATING TODO-LIST IN THE DATABASE
app.post('/create-list', function(req,res){
    // console.log("body",req.body)
    Todo.create({
        desc: req.body.desc,
        category: req.body.category,
        date: req.body.date
    }, function(err, newList)
    {
        if(err)
        {
            console.log('error in creating list',err);
            return;
        }
        console.log('***',newList);
        return res.redirect('back');
    })
    
})

// DELETING TODO-LIST FROM THE DATABASE
app.get('/delete-contact', function(req,res){
    if(req.xhr)
    {
        let id= req.query.id;
        Todo.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                console.log("error in deleting",err);
                return;
            }
            return res.redirect('back');
        })
    }
})
app.listen(port, function(err){
    if(err)
    {
        console.log("error in listening");
        return;
    }
    console.log("Server is running");
})

