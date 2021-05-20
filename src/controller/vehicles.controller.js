const config = require("../../config.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const vehicles = db.vehicles;
const translate = require('translate-api');
 
const Op = db.Op;


const fetch = require("isomorphic-fetch");

const starWarsVehicles =  (id) => {

    return  fetch(config.url(id), {
        method: "get"
    })
    .then(response => response.json())
    .then(item => {
        translate.getText(item,{to: 'es-ES'}).then(function(text){
      
            return text;
        });
        
    })
  
}

 

exports.agregar = (req, res) => {
 
    const { id } = req.params
   
    const item = starWarsVehicles(id)
    
    vehicles.create({
      detalle:  item
    }).then(vehicle => {
        res.status(200).json(vehicle);
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });

  };



  
exports.listar = (req, res) => {
 
    vehicles
    .findAll()
    .then(vehicle => {
        res.status(200).json(vehicle);
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
  };
  
  