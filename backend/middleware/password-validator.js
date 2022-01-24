const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {

    if (!passwordSchema.validate(req.body.password)) {//If the password is not valid according to our model.
        return res.status(400).json({
            message: 'Password required: 8 characters minimum. At least 1 uppercase, 1 lowercase. Without spaces'
        });
    } else {
        next();
    }

}