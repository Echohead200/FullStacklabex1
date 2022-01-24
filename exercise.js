const fs = require('fs')
const csv = require('csv-parser');

const results = [];
var writeStream = fs.createWriteStream('Canada.txt');
writeStream.write("country, year, population \n ")

var writeStream2 = fs.createWriteStream('USA.txt');
writeStream2.write("country, year, population \n ")

fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (data) => {results.push(data)})
  .on('end', () => {
    //console.log(results);
    //console.log(results[300].country)

    for(var i =0; i < results.length; i++){
        if(results[i].country == "Canada"){
            //console.log("worked " + i )
            //console.log(results[i])
            var input = `${results[i].country} ${results[i].year} ${results[i].population}`
            writeStream.write(input + "\n ")

        }
        if(results[i].country == "United States"){
            //console.log(results[i])
            var input = `${results[i].country} ${results[i].year} ${results[i].population}`
            writeStream2.write(input+ "\n" )
        }
    }
  });




