function requireFields(fields){
    return (req, res, next) => {
        const missingFileds = fields.filter(field =>{
            return (
                req.body[field] === undefined ||
                req.body[field] === null ||
                req.body[field] === ''
            );
        });

        if(missingFileds.length > 0){
            return res.status(400).json({
                error: `Missing required fields: ${missingFileds.json(', ')}`
            });
        }

        next();
    };
}

module.exports = {
    requireFields
};