function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
   
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("AsynchronousOperation successful!");
        } else {
          reject(new Error(" AsynchronousOperation failed!"));
         
        }
      }, 5000); 
    });
  }
  
   
  simulateAsyncOperation(true)
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  
  simulateAsyncOperation(false)
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });



 
 


    
      
  