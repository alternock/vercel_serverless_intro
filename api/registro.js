//libs
let {
    StatusCodes: SC
} = require("http-status-codes");
let joi = require("joi");
//files
//let Sentry = require("@logs/sentry");


module.exports = async function handler(req, res) {

    const schema = joi.object({
        email: joi.string().email().required(),
        alias: joi.string().required()
    });

    try {
        let validate = await schema.validate(req.query);

        if(!validate.hasOwnProperty('error')){
            res.json({
                data: validate
            })
        }else{
            res.json({
                data: validate.error
            })
        }
    } catch (err) {
        res.json({
            data: err
        })
    }
}