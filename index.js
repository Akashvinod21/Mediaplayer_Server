//1) import json-server using require
const jsonServer=require('json-server')

//2) create json server using create method
const mediaPlayerServer= jsonServer.create()

//3) create path for json file(data file) - using router()
const router=jsonServer.router("db.json")

//4) create middleware to parse JSON
const middleware=jsonServer.defaults()

//5) allow server to use router and middleware - using use()
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//6) set up port for the server to run
PORT = 3000 || process.env.PORT

//7) listen to the request
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server is running successfully at port no:${PORT}`);
})