const fs = require('fs')
const csv = require('csv-parser')
const readline = require('readline')
console.log("hello!")

console.log("begining read atempt!")
// fs.readFile('input_countries.csv', (err,data) =>{
//     if(err){
//         console.log("ERROR BELOW")
//         console.log(err)
//         return
//     }
//     var WriteStream = fs.createWriteStream("stream_test.txt")

//     WriteStream.write(data)
//     writeStream.on('finish', () => {
//         console.log('Data write completed')
//     })
//     console.log(data.toString())
// })

async function processLineByLine() {
    const fileStream = fs.createReadStream('output_test.txt');
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
  
    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      
      if(line.includes('Canada')){
         // console.log(`Line from file: ${line}`);
         var input2 = `${line} \n` 
          fs.appendFile("Canada.txt", input2,(err)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(`line written: ${line}`)
          })
      }
    }
  }
  processLineByLine();

//   function writing(input){
//     fs.writeFile("Canada.txt", line,(err)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         console.log(`line written: ${line}`)
//       })

//   }



