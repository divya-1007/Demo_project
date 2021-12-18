const {signigOuterDataModel} = require('./model.router');

 class outerController{
    signigOuterData(req ,res){
        const {email, password} = req.body;
        signigOuterDataModel( email ,password,(data,error) =>{
        let response = {status:0 , data:null ,error:null};
        if(data === false){
            response.status = 0;
            response.error = error;
        }else{
            response.status = 1;
            response.data = data;
        } 
        res.send(response);
        })
    }
 }
 module.exports = outerController;