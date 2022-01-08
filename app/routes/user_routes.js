module.exports = (app) => {
    const users = require('../controller/user_controller.js');

    // Retrieve all users
    app.get('/users', users.findAll);

    // Retrieve a single user with userId
    app.get('/users/:userId', users.findOne);

    // Update a user with userId
    app.put('/users/:userId', users.update);

    // Delete a user with userId
    app.delete('/users/:userId', users.delete);
    
}