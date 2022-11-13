

function value() {
  var money = document.getElementById("amount");  
  var at = document.getElementById("amount").value.indexOF("$");
  var ok = 0;
  if(money.startsWith(1)==1){
        ok = 1;
        
  }
  if(money.startsWith(2)==1){
        ok=1;
   }
   if(money.startsWith(3)==1){
        ok=1;
  }  
  if(money.startsWith(4)==1){
        ok=1;
  }
  if(money.startsWith(5)==1){
        ok=1;
  }
  if(money.startsWith(6)==1){
        ok=1;
  }
  if(money.startsWith(7)==1){
        ok=1;
  }
  if(money.startsWith(8)==1){
        ok=1;
  }
  if(money.startsWith(9)==1){
        ok=1;
  }  

  
  if((ok==0) || (at==-1)){
      alert("Invalid input");
   
  }
  else{
      Swall.alert('Good job')
  }

}
