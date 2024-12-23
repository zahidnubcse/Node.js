//built in module

// whiteFile -> for create a file
// appendFile -> for update a file
// readFile -> for read a file
// rename -> for rename a dile
// unlink -> for delete a file
// Exists -> for check that the file exist?


//async method
//Create a file
const fs = require ('fs'); // fs is declear for all 

fs.writeFile ('demo1.txt','HI Im Zahid Hasan and Im Learning Node.js',(err)=>{
     if (err) {
      console.log(err);
      
     }
     else{
      console.log('Successfully Created file');
     }
});


//for adding and update file

fs.appendFile ('demo1.txt','Im learning node from tomorrow',(error)=>{
  if (error) {
    console.log(error);
    
  }
  else{
    console.log('Update Successfully');
  }
});


//reading file

fs.readFile('demo1.txt','utf-8',(err, data)=>{
   if (err) {
    console.log(err);
    
   }
   else{
    console.log("Data read successfully \n",data);
   }


});


//rename file

fs.rename('demo1.txt','demo2.txt',(err)=>{
  if (err) {
    console.log(err);
  }
  else{
    console.log('\nRename Succcessfully')
  }
});

//delete file

fs.unlink ('demo2.txt',(err)=>{
  if (err) {
    console.log(err);
  }
  else{
    console.log('Deleted Successfully');
  }
});

//for check file existing

fs.exists('demo5.txt',(result)=>{
   if(result){
    console.log('Exist File');
   }
   else{
    console.log('Not exist File');
   }
});


//sync method
// callback function have no work here

const fs = require('fs');

if (fs.existsSync('demo5.txt')) {
  console.log('Exist File');
} else {
  console.log('Not Exist File');
}