//require('module-alias/register');
//libs
let {
    StatusCodes: SC
} = require("http-status-codes");
//files
//let mock = require("@mock/alias");
//let Sentry = require("@logs/sentry");
let axiosPlaceholder = require("../mock/remote/axios_placeholder")
let Sentry = require("../logs/sentry");


module.exports = async function handler(req, res) {
    if (req.method === "GET") {
        try{
            let url = "/posts";
            let {data} = await axiosPlaceholder(url);
            
            Sentry.captureMessage("msg mensaje serverless OK");
            res.status(SC.OK).json({data});
        }catch(err){
            Sentry.captureException(err);
            res.status(SC.NOT_FOUND).json({data:SC.NOT_FOUND});
        }
    } else {
        Sentry.captureMessage(SC.METHOD_NOT_ALLOWED);
        res.status(SC.METHOD_NOT_ALLOWED).json({
            data: req.method
        });
    }

}