


document.querySelector('button').addEventListener("click" ,()=>{
    const place  = document.getElementById("location").value;
     function updatetemp(data){
        const element = document.getElementById("weatherInfo");
        element.innerHTML = `today temperature : ${data.current.temp_c}     wind_kph${data.current.wind_kph}`;
        //   element.innerHTML = `today temperature : ${data.current.wind_kph}`;
     }

    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=f3fa1f57a52f47f6bc9180143252103&q=${place}&aqi=no`);

    //    promise
    //    .then((response)=>{
    //      return response.json();
    //               })
    //      .then((data)=>{
    //           updatetime(data);
    //       })

          prom
          .then(response=>response.json())
          .then(data=> updatetemp(data))

});