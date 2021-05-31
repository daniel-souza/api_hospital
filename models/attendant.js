//const mongoose = require('mongoose');
import mongoose from 'mongoose';
//const mongoosePaginate = require('mongoose-paginate-v2')
import mongoosePaginate from 'mongoose-paginate-v2';

const Attendant = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },  
  endereço: {
    type: Object,
    reguired: true
  },
  telefone: {
    type: Number,
    required: true
  },
  email:{
    type: String
  },
  registro: {
    type: Number,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

Attendant.plugin(mongoosePaginate);

//module.exports = mongoose.model('modelo', Modelo);
export default mongoose.model('attendant', Attendant);