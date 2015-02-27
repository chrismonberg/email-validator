var streamCSV = require("node-stream-csv");
var verifier = require('email-verify');

streamCSV("MOCK_DATA.csv", function(user) {
    //console.log(user.email);
	// var list = user.email.length;
	// console.log (list);
	verifier.verify( user.email, function( info, err ){
  		if( err ) console.log(err);
  		else{
    		console.log( info.success + " - " + user.id + " Info: " + info.info );
 		}
	});
});
