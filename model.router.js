require('dotenv').config();
const md5 = require('md5');
const cloudUpload = require('../../cloudinary.config');

const createUserDataModel = ( name, lastname, email, password, userType, callback) =>{
    const sql = `INSERT INTO users (name, lastname, email, password, userType ) VALUES ('${name}', 
    '${lastname}','${email}','${md5(password)}','${userType}')`;
    DBConnection.query(sql ,(error ,rows) =>{
      if(error){
          Error(error);
          callback(false, 'system error')
      }else{
          callback(rows ,false)
      }
  });
}

const createBlogModel = ( name ,lastname,filename, company,gender ,contactNo,callback) =>{
const addEventsql = `INSERT INTO blog( name, lastname,image,company,gender,contactNo) VALUES ('${name}', '${lastname}'
,'${filename}','${company}','${gender}','${contactNo}')`;
DBConnection.query(addEventsql, (err) => {
  if (err) {
    Error(err);
    callback(false, 'SYSTEM_ERROR');
  } else {
    callback(true);
  }
});
}

const profileUpdateModel = ( name ,lastname, company,gender ,contactNo,callback) =>{
  const sql = `UPDATE blog SET  name = '${name}',lastname = '${lastname}',
   company = '${company}', gender = '${gender}' , contactNo = ${contactNo} )`;
  DBConnection.query(sql ,(error ,rows) =>{
      if(error){
        console.log(error);
          Error(error);
          callback(false, 'system error')
      }else{
          callback(rows ,false)
      }
  })
}

const getBlogModel = (callback) => {
    const sql = `SELECT name, lastname, image, company,gender, contactNo FROM blog ORDER BY id  DESC LIMIT 0,10 `;
  
    DBConnection.query(sql, (err, rows) => {
      if (err) {
        Error(err);
        callback(false, translations['SYSTEM_ERROR']);
      } else {
        callback(rows, false);
      }
    });
  }

const deleteBlogMode = (id, callback) => {

    const deleteuser = `DELETE FROM blog WHERE id = ${id}`;
    DBConnection.query(deleteuser, (err) => {
      if (err) {
        Error(err);
        callback(false, translations['SYSTEM_ERROR']);
      } else {
        callback(true);
      }
    })
  };

module.exports = {createUserDataModel ,createBlogModel,profileUpdateModel ,deleteBlogMode,getBlogModel}