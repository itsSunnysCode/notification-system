const mockSuccessAPI =() => {
  return new Promise((resolve, reject)=>{
      setTimeout(() => {
      resolve({isSuccess:true});
      }, 2000);
    });
}

const mockFailedAPI = () => {
  return new Promise((resolve, reject)=>{
      setTimeout(() => {
      reject({
        isSuccess:false,
        message:"this is a custom error message"
      });
    }, 2000);
    });
}

export {mockSuccessAPI, mockFailedAPI};