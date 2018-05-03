let express = require('express')
let app = require('express')()

app.get('/', (request, response) => {
    response.send("toto")
})

app.listen(8080)