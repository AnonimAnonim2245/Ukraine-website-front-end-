var sentence;
function value(money) {
  
    
  
  var at = money.indexOF("$")
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
      sentence = "Invalid Output";
      
   
  }
  else{
      sentence = money.textContent;
  }

}
var money = document.getElementById("amount"); 
value(money);
document.write('<h3>' + sentence + '</h3>');
