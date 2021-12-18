
const jwt = require('jsonwebtoken');

module.exports = AuthenticatorSession = (req,res,next) =>{
 const bearerHeader = req.headers['authorization'];
 if(typeof bearerHeader !== 'undefined'){
     const bearer = bearerHeader.split(' ');
     const bearerToken = bearer[1];
     req.token = bearerToken;
     jwt.verify(bearerToken ,process.env.TOKEN_SECRET_KEY ,(error ,data) =>{
      if(error){
        req.sendStatus(403);
        return;
      }else if(req.baseUrl.split('/')[1] === data.user.userType.toLowerCase()){
          if(req.method === 'GET')
            req.query.user_id = data.user.id
          else if(req.method === 'POST')
              req.body.user_id = data.user.id;
              next();
      }else{
        res.sendStatus(403);
        }
     });  
     
    }else{
        res.sendStatus(403);
    }
 }


