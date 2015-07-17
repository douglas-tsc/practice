var adminModel = require('../models/admin');

exports.postDecision = function (req,res){
  res.send({message:"Decision Posted"});
};

exports.postEvent = function(req,res){
  res.send({message:"Event added"});
};

exports.getEvent = function(req,res){
  res.send({message:"got Event details"});
};

exports.getConnections = function(req,res){
  res.send({message:"got all connections"});
};
