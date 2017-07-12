const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Token = new Schema({
  access_token: String,
  scope: String,
  user_id: String,
  team_name: String,
  team_id: String,
  bot: Object,
});

module.exports = mongoose.model('Token', Token);
