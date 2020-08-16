export const api_1= (param = "success") => {
  debugger
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if (param === "success") return resolve("success api 1");
            else return reject("error api 1");
        }, 1000)
    })
}