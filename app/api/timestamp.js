var moment = require('moment');

module.exports = function (app){
    app.get('/:query', function(req, res){
        var date = req.params.query;
        var unix = null;
        var nat = null;
        
        //check for unixtime format 
        if (+date >= 0) {
            unix = +date;
            nat = unixToNat(unix);
        } 
        
        // Check for natural format
        if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
            unix = +natToUnix(date);
            nat = unixToNat(unix);
        }
        
        var retObj = {"unixtime" : unix, "natural time" : nat}; 
        res.send(retObj);
        
    });
    
    
    function unixToNat(unix){
        return moment.unix(unix).format("MMMM D, YYYY");
    }
    
    function natToUnix(nat){
        return moment(nat, "MMMM D, YYYY").format("X");
    }
}