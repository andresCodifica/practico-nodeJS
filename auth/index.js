const jwt = require('jsonwebtoken')
const config = require('../config')
const error = require('../utils/error')
const secret = config.jwt.secret;

function sign(data){
  return  jwt.sign(data, secret)
}
function verify(token){
  console.log(token)
  console.log(secret)
  return jwt.verify(token, secret)
}
const check = {
  own: function(req, owner){
    const decoded = decodeHeader(req)
    console.log(decoded)
    console.log(owner)
    //comprobar si es o no propio
    if(decoded.id !== owner){
      throw error('no puedes hacer esto', 401)
    }
  }
}
function getToken(auth){
  if(!auth){
    throw new Error('No viene token')
  }
  if (auth.indexOf('Bearer ') == -1){
    throw new Error('Formato invalido')
  }
  let token = auth.replace('Bearer ','')

  return token
}
function decodeHeader(req){
  const authorization = req.headers.authorization || '';
  
  const token = getToken(authorization)
  const decoded = verify(token)
  req.user = decoded
  return decoded
}
module.exports = {
    sign,
    check
}