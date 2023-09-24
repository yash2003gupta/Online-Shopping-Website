

const counters = document.querySelectorAll('.counter'); 
counters.forEach((counter)=>{

    counters.innerHTML =0;
  const updateCounter = () =>{
    const targetCount = counter.getAttribute('data-target');// for converting string into number we add + in front
   
    const startingCount = +Number(counter.innerHTML);
      
    const incr = targetCount/100;
    if(startingCount<targetCount){
        counter.innerHTML =`${  Math.round(startingCount +incr)}`;
        setTimeout(updateCounter ,10);
    }
     else{
        counter.innerHTML = targetCount;
    }
  }
    updateCounter();
})