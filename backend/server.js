const express = require('express')
const port = 3000
const app = express()


app.listen(port, (er) => {
    if(!er){
        console.log('running' + port)
    }else{
        console.log('err' + er)
    }
})