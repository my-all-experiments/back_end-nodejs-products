module.exports=(app)=>{
    const account=require("../controller/account_controller.js")
  
    // Create a new user
   app.post('/account/signup', account.signup);
    
    // User Login
    app.post('/account/login', account.login);

}