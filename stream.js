var streamCSV = require("node-stream-csv");
var verifier = require('email-verify');

//should update to work with boombot and accept a stream or email address

streamCSV("MOCK_DATA.csv", function(user) {
    //console.log(user.email);
	verifier.verify( user.email, function( info, err ){
  		if( err ) console.log(err);
  		else{
    		console.log( info.success + " - " + user.id + " Info: " + info.info );
 		}
	});
});
