const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-db');

const db = mongoose.connection;
db.on('error',console.error.bind(console,'error while running db'));
db.once('open',function(){
    console.log("database is running");
})