const passwordService = require('../../services/passwordService');

async function hash(req, res) {
    try {
        
        const { password } = req.body;

        if(!password){
            return res.status(400).json({
                error: 'password is required'
            });
        }

        const hash = await passwordService.hashPassword(password);

        return res.status(200).json({ hash });

    } catch (error) {
        
        return res.status(500).json({
            error: 'Password hashing failed'
        });

    }
}

async function verify(req, res) {
    try {
        
        const { password, hash } = req.body;

        if(!password || !hash){
            return res.status(400).json({
                error: 'password and hash are required'
            });
        }

        const valid = await passwordService.verifyPassword(password, hash);

        return res.status(200).json({ valid });

    } catch (error) {
        return res.status(500).json({
            error: 'Password verification failed'
        });
    }
}

module.exports = {
    hash,
    verify
};