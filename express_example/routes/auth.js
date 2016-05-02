/**
 * Created by cai on 2016/5/2.
 */
var auth = function (req, res, next) {
    if(req.query.token == '1'){
        return next();
    }else{
        res.send(401)
    }
}
module.exports = auth;