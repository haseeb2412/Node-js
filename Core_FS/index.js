const fs = require("fs");

// node js includes a additional data type call buffer 
// it is used to store binary data
// while reading from a file or receive packets over the networks


//  create a file and if i change the sentence it will overwite the file '----------------

    // fs.writeFileSync("practice.txt","My name is muhammad phir se haseb");
    // console.log("Data Received");


    //   appende data   without overwrite the previous one --------------

    // fs.appendFileSync("practice.txt","\nim fine what about you");
    // console.log("Data Received");

//     const buf_data = fs.readFileSync("practice.txt");
//     const org_data = buf_data.toString();

//     console.log("Data Received");
// console.log(org_data);    
    

// rename the file --------------------------

// fs.renameSync("new_practice.txt","practice.txt");
// console.log("Method Run successfully");


// check the fille if exist -----------------------------

// const filePath ='new.txt'

// if(fs.existsSync(filePath)){
//     console.log('we got the file');
// }else{
//     console.log('there is no file');
// }

// fs.writeFileSync("new.txt","mn bs jldi se delete hone wali hoo");
// console.log("new file created");

    
// delete the existing file -----------------------------

// fs.unlinkSync("new.txt");
// console.log("file removed");