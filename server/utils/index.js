const utils = module.exports;
const { log, warn, error, success } = require("./logger");
const {
  generateToken,
  generateResetToken,
  sendResetEmail,
  validateResetToken,
} = require("./auth");

utils.log = log;
utils.success = success;
utils.warn = warn;
utils.error = error;
utils.env = require("./env");
utils.db = require("./db");
utils.generateToken = generateToken;
utils.generateResetToken = generateResetToken;
utils.sendResetEmail = sendResetEmail;
utils.validateResetToken = validateResetToken;
