function fetchData() {
    return new Promise((resolve) => {
 
      setTimeout(() => {
        const data = "Fetched data";
        resolve(data);
      }, 2000);  
    });
  }
  
  function processData(data) {
    return new Promise((resolve) => {
     
      setTimeout(() => {
        const processedData = data.toUpperCase(); 
        resolve(processedData);
      }, 2000);  
    });
  }
   
  fetchData()
    .then((data) => {
      console.log("Data fetched:", data);
      return processData(data);
    })
    .then((processedData) => {
      console.log("Processed:", processedData);
    })
    .catch((error) => {
      console.error("Error", error);
    });


 



     