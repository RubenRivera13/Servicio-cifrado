const crypto = require('crypto');

function sha256(text){
    return crypto
     .createHash('sha256')
     .update(text)
     .digest('hex');
}

function verify(text, hash){

    const calculatedHash = sha256(text);

    return calculatedHash === hash;

}

module.exports = {
    sha256,
    verify
};