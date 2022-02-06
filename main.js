window.onload = function() {
    
    let salise = 00;
    let saniye = 00;
    let appendSalise =
    document.getElementById("salise")
    let appendSaniye =
    document.getElementById("saniye")
    let bStart = 
    document.getElementById("b-start")
    let bStop = 
    document.getElementById("b-stop")
    let bReset = 
    document.getElementById("b-reset")
    
    let interval ;

    bStart.onclick = function() {
      
      clearInterval(interval);
       interval = setInterval(startTimer, 10);
    }
    
      bStop.onclick = function() {
         clearInterval(interval);
    }
    
  
    bReset.onclick = function() {
       clearInterval(interval);
      saniye = "00";
        salise = "00";
      appendSalise.innerHTML = saniye;
        appendSaniye.innerHTML = salise;
    }
    
     
    
    function startTimer () {
      saniye++; 
      
      if(saniye <= 9){
        appendSalise.innerHTML = "0" + saniye;
      }
      
      if (saniye > 9){
        appendSalise.innerHTML = saniye;
        
      } 
      
      if (saniye > 99) {
        console.log("salise");
        salise++;
        appendSaniye.innerHTML = "0" + salise;
        saniye = 0;
        appendSalise.innerHTML = "0" + 0;
      }
      
      if (salise > 9){
        appendSaniye.innerHTML = salise;
      }
    
    }
    
  
  }

