const fs = require('fs')
const csv = require('csv-parser')
//const results = [];

fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);

    for(let i=0; i< results.length; i++){
        if(results[i] == "Canada"){
            console.log("this worked!?");
        }
    }
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });

