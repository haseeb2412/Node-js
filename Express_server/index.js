const express = require("express");


//  ----------------------- METHOD 01 - (Express Server )--------------------------------------- 

// const PORT = 5000;

// const app = express();

// app.get("/",(req,res)=>{
//     // res.json({msg:"every thing was perfectly fine"})
//     res.send("hello world 01");
//     console.log("hello world");
// })

// app.listen(PORT,()=>{
//     console.log(`server running on port ${PORT}`);
// });

// ---------------- METHOD 02 ( Express Server) --------------------------

// const  PORT = 5000;
// const app = express();

// app.get("/",(req,res)=>{
//     res.send("hi there im express server");
//     console.log("hello server");
// })

// const start = async()=>{
//     try {
//         app.listen(PORT,()=>{
//             console.log(`Server connected to the port ${PORT}`);
//         })
//     } catch (error) {
//         console.log("erro during server");
//     }
// }
// start();


// ------------------------- Handling Router In Node js (Expressjs )-----------------------------------


const routes=require('./routed');

const  PORT = 5000;
const app = express();

app.use("/",routes)
const start = async()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`Server connected to the port ${PORT}`);
        })
    } catch (error) {
        console.log("erro during server");
    }
}
start();