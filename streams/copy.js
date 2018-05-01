let fs = require('fs')
let file = 'demo.mp4'

fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0

    let read = fs.createReadStream(file)
    let write = fs.createWriteStream('copy.mp4')

    read.on('data', (chunk) => {
        progress += chunk.length
        console.log("J'ai lu " + Math.round(( progress / total ) * 100 )+ "% du fichier")
    })

    read.pipe(write)

    write.on('finish', _ => {
        console.log("le fichier a bien été copié")
    })

})

