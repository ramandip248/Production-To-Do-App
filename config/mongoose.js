
  const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rdipsingh05:QMcryMF14eNNTpGZ@website.bmgcmwx.mongodb.net/todo-list");
  
  const db = mongoose.connection;
  
  db.on('error',console.error.bind(console,'error connecting to mongodb'));
  
  db.once('open',function(){
      console.log("connected to mongodb")
  })
  
  module.exports = db;
