const hmacService = require('../../services/hmacService');

function sign(req, res){

    const { message } = req.body;

    if(!message){
        return res.status(400).json({
            error: 'message is required'
        });
    }

    const hmac = hmacService.sign(message);

    return res.status(200).json({ hmac });

}

function verify(req, res){

    const { message, hmac } = req.body;

    if(!message || !hmac){
        return res.status(400).json({
            error: 'message and hmac are required'
        });
    }

    const valid = hmacService.verify(message, hmac);

    return res.status(200).json({ valid });

}

module.exports = {
    sign,
    verify
};