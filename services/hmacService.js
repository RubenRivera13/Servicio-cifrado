const crypto = require('crypto');

const secret = process.env.HMAC_SECRET_KEY;

function sign(message) {
    return crypto
     .createHmac('sha256', secret)
     .update(message)
     .digest('hex');
}

function verify(message, receivedHmac) {

    const generatedHmac = sign(message);

    const receivedBuffer = Buffer.from(receivedHmac, 'hex');
    const generatedBuffer = Buffer.from(generatedHmac, 'hex');

    if(receivedBuffer.length !== generatedBuffer.length) {
        return false;
    }

    return crypto.timingSafeEqual(receivedBuffer, generatedBuffer);
}

module.exports = {
    sign,
    verify
};