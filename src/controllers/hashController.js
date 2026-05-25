const hashService = require('../../services/hashService');

function sha256(req, res){
    
    const { text } = req.body;

    if(!text){
        return res.status(400).json({
            error: 'tetx is required'
        });
    }

    const hash = hashService.sha256(text);

    return res.status(200).json({ has });

}

function verify(req, res){
    
    const { text, hash } = req.body;

    if(!text || !hash) {
        return res.status(400).json({
            error: 'text and hash are required'
        });
    }

    const valid = hashService.verify(text, hash);

    return res.status(200).json({ valid });

}

module.exports = {
    sha256,
    verify
};