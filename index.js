const userRouter = require('./UserRouter');
 const outerRouter = require('./OuterRouter');

class CustomeRouter{
    constructor(app){
   app.use('/user' , userRouter);
    app.use('/' ,outerRouter);
    }
}
module.exports = CustomeRouter;