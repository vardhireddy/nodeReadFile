var fs = require('fs');
var parse = require('csv-parse');
 
var inputFile='input.tbd';
 
var parser = parse({delimiter: '|'}, function (err, data) {
    data.forEach(function(line) {

      var payment = { "checkNumber" : line[1].trim()
                    , "paymentID" : line[2].trim()
                    , "checkDate" : line[3].trim()
                    , "amount" : line[4].trim()
                    , "activity" : line[5].trim()
					, "activityAction" : line[6].trim()
					, "activityDate" : line[7].trim()
                    , "stopReason" : line[8].trim()
                    , "operationID" : line[9].trim()
                    , "policyNumber" : line[10].trim()
					, "checkName" : line[11].trim()
                    };
     console.log(JSON.stringify(payment));
    });    
});
 
// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser);