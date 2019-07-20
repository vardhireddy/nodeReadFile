var fs = require('fs');
var parse = require('csv-parse');
 
var inputFile='input.tbd';
console.log("Processing Countries file");
 
var parser = parse({delimiter: '|'}, function (err, data) {
    // when all countries are available,then process them
    // note: array element at index 0 contains the row of headers that we should skip
    data.forEach(function(line) {
      // create country object out of parsed fields
      var country = { "name" : line[0]
                    , "code" : line[1]
                    , "continent" : line[2]
                    , "population" : line[3]
                    , "size" : line[4]
                    };
     console.log(JSON.stringify(country));
    });    
});
 
// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser);