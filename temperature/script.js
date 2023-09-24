const calculateTemp= () => {

    const numberTemp = document.getElementById('temp').value;
    
    const tempselected = document.getElementById('temp_diff');
   const valuetemp = temp_diff.options[tempselected.selectedIndex].value;
    const celToFah=(cel)=>{
       let fahrenheit = Math.round((cel *9/5) +32);
       return fahrenheit;
    };
    const FahTocel=(fah)=>{
        let celsius = Math.round((fah-32)* 5/9);
        return celsius;
     };
  // let result ;
   if(valuetemp =='cel'){
   let result = celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML = `${result}celsius`;
   }else{
   let result = FahTocel(numberTemp);
    document.getElementById('resultContainer').innerHTML = `${result}celsius`;
   }

}
