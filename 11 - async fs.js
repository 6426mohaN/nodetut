const { readFile, writeFile} = require('fs')
console.log("start")

readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return 
    }
    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return;
        }
        const second = result
    
    // writeFile('./content/result-sync.txt', `Heres result for the first ${first} and the second ${huletegna}`, (err, result) => {
    //     if(err){
    //         console.log(err)
    //         return;

    //     }
    //     console.log(result) 
    // })
writeFile('./content/result-async.txt', 
    `Heres result for the first ${first}, and the second ${second}`,
     (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        //console.log(result) 
        console.log("successfully wrote file")
    
    })
    })
})