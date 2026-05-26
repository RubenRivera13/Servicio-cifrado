const aesService = require('./../../services/aesService');

function encrypt(req, res){
    try {
        
        const {text} = req.body;

        if(!text){
            return res.status(400).json({
                error: 'text is required'
            });
        }

        const result = aesService.encrypt(text);

        return res.status(200).json(result);

    } catch (error) {
        
        return res.status(500).json({
            error: 'Encryption failed'
        });

    }
}

function decrypt(req, res){
    try {
        
        const { encrypted, iv, authTag } = req.body;

        if(!encrypted || !iv || !authTag) {
            return res.status(400).json({
                error: 'encrypted, iv and authTag are required'
            });
        }

        const decrypted = aesService.decrypt(encrypted, iv, authTag);

        return res.status(200).json({
            decrypted
        });

    } catch (error) {
        
        return res.status(422).json({
            error: 'Invalid authentication tag or manipulated data'
        });

    }
}

module.exports = {
    encrypt,
    decrypt
};