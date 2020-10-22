"use strict"

const sleep = seconds =>
    new Promise((resolve, reject)=>
        setTimeout(resolve, seconds*1000)
    )

sleep(2)
    .then(() => console.log("Data recieved"))
    .then(() => console.log("Data checked"))
    .catch(() => console.error("Data not correct"))
    .finally(() => console.log("Request finish"))

