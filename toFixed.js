//test file


let x = 5.2;


function toFixed(num) {

   let x= Math.round((num + Number.EPSILON) * 100) / 100;

   if(num % 1 == 0){
       console.log("thsi");
       console.log(x+".00");
       return;
   }
   if((num*10)% 1 == 0){
       console.log("thsi");
       console.log(x+"0");
       return;

   }

       console.log("old");
       console.log(x);


}

toFixed(x)