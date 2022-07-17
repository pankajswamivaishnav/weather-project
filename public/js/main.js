const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');

const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');

const dataHide = document.querySelector('.middle_layer');


const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText=`Please Write The Name Before Search`;
        dataHide.classList.add('data_hide');
    }
    else{
      try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=bf18d032067751f71fdc62906471c96e`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`
        temp_real_val.innerText = arrData[0].main.temp;
        // temp_status.innerText = arrData[0].weather[0].main;
          const tempMood =  arrData[0].weather[0].main;

        //condition to check sunny or cloudy
        if(tempMood==="Clouds"){
           temp_status.innerHTML =
           "<i class= 'fas fa-cloud' style='color:#f1f2f6;'></i>"
        }
        else if(tempMood==="Rain"){
            temp_status.innerHTML =
            "<i class= 'fas fa-cloud-rain' style='color:#a4b0be;'></i>"
        }
        
        else if(tempMood==="Clear"){
            temp_status.innerHTML =
            "<i class= 'fas fa-sun' style='color:#eccc68;'></i>"
        }

        else{
            temp_status.innerHTML =
            "<i class= 'fas fa-cloud' style='color:#f1f2f6;'></i>"
        }
        
        dataHide.classList.remove('data_hide');

      }
      catch{
        city_name.innerText=`Please Enter Name Properly`;
        dataHide.classList.add('data_hide');
      }
    }
   
}

submitBtn.addEventListener('click', getInfo);