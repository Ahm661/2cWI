printMonth(31);printMonth(28);printMonth(31);printMonth(30);printMonth(31);printMonth(30);printMonth(31);printMonth(31);printMonth(30);printMonth(31);printMonth(30);printMonth(31);

function printMonth(amountOFdays){
    days = "";
    for (let index = 1; index <= amountOFdays; index++) {
        if (index<10) {
            days = days + "0" + index + " | "
        }
        else{
            days = days + index + " | "
        }
      
        
        if (index%7==0){
            console.log(days);
            days="";
        }
        
    }
     console.log(days);
}


