// callbackhell

// async task
// weather

// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=f3fa1f57a52f47f6bc9180143252103&q=London&aqi=no`)
// console.log(obj);    // ye async task time lega suddendly print nhi karana h async ko



// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=f3fa1f57a52f47f6bc9180143252103&q=London&aqi=no`)
// setTimeout(()=>{
//     console.log(obj);
// },2000)        // ye bhi use nhi krenge time ke wajah se kitna time data aayega  kitna time dena  h confuse h 



// const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=f3fa1f57a52f47f6bc9180143252103&q=London&aqi=no`)
// promises.then((response)=>{       // ye tabhi chalega jb fetch ho ke data  already  a chuki hogi 
//     console.log(response);     // resolve wala chalega 
// }).catch((error)=>{
//   console.log(error);  // reject wale chalega  mtlb handle kr rha  dono answer de rha hai 
// })


// pending   resolve  reject   promises ke 3 state h 

const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=f3fa1f57a52f47f6bc9180143252103&q=London&aqi=no`)
promises.then((response)=>{  
    console.log(response.json())     
//   const promises2 = (response.json());     // ye resonse kiye h jo data  uska h body part lake de dega sirf       ye bhi async task h time lega print ke liye 
//    promises2.then((data)=>{
//    console.log(data);
//    })
})



// const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=f3fa1f57a52f47f6bc9180143252103&q=London&aqi=no`)
// promises.then((response)=>{       
//   const promises2 = (response.json());     // ye resonse kiye h jo data  uska h body part lake de dega sirf       ye bhi async task h time lega print ke liye 
//    promises2.then((data)=>{
//    console.log(data);
//    })
// })



const promi = fetch(`http://api.weatherapi.com/v1/current.json?key=f3fa1f57a52f47f6bc9180143252103&q=London&aqi=no`)
 const pro2 = promi.then((response)=>{       
//   const promises2 = (response.json());     // ye resonse kiye h jo data  uska h body part lake de dega sirf       ye bhi async task h time lega print ke liye 
//    promises2.then((data)=>{
//    console.log(data);
//    })
   return response.json();
})
   pro2.then((data)=>{
//    console.log(data.current. temp_f);  // data fetch krke to a gya tha ab mujhe print karana hai jo bhi aise kra skte h
   console.log(data);
})

   