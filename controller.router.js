 
 const {createUserDataModel,profileUpdateModel,createBlogModel ,deleteBlogMode,getBlogModel} = require('./model.router');

 class outerController{
    signigOuterData(req ,res){
        const {name, lastname, email, password, userType} = req.body;
        createUserDataModel(name, lastname, email, password, userType ,(data,error) =>{
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

    createBlog(req ,res){
     const {name ,lastname,image, company,gender ,contactNo} = req.body;
     var filename = ''
    if (req.file) {
      filename = req.file.filename
    }
        createBlogModel( name ,lastname,filename, company,gender ,contactNo,(data,error) =>{
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

    profileUpdate(req ,res){
        const { name ,lastname, company,gender ,contactNo} = req.body;
    
        profileUpdateModel(  name ,lastname,company,gender ,contactNo,(data,error) =>{
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

    getBlog(req ,res){
        const {} = req.body;
        getBlogModel( (data,error) =>{
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

    deleteBlog(req ,res){
        const {id} = req.body;
        deleteBlogMode( id,(data,error) =>{
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