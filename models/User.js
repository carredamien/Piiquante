const mongoose = require('mongoose'); //permet de simplifier la création de la bdd a l'aide de schéma
const uniqueValidator = require('mongoose-unique-validator'); //permet de vérifier que l'email est unique
const sanitizer = require('mongoose-sanitizer-plugin'); //filtre les données pour les désinfecter avant l'enregistrement en bdd

const userSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});
userSchema.plugin(uniqueValidator);

userSchema.plugin(sanitizer);

module.exports = mongoose.model('User',userSchema);