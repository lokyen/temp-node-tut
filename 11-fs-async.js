const { readFile, writeFile } = require('fs');
console.log('start');
//async way
//run callback when we're done
//callback runs when we click a button for example
//functionality complete we run callback
//event and listener

//err, result is callback
readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', 
        `Here is the result ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        }); 
    })
})
console.log('starting the next task');

//able to keep serving other users
//start a task and offload and start another task right away 
//eventually the task will finish
