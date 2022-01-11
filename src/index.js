module.exports = 
function toReadable (number) {
  
    const num = [
       { digit: 0 , human_read: "zero"}, 
       { digit: 1 , human_read: "one" }, 
       { digit: 2 , human_read: "two" ,   human_read_dec: "twenty" }, 
       { digit: 3 , human_read: "three" , human_read_dec: "thirty" },  
       { digit: 4 , human_read: "four" ,  human_read_dec: "forty" }, 
       { digit: 5 , human_read: "five" ,  human_read_dec: "fifty" }, 
       { digit: 6 , human_read: "six" ,   human_read_dec: "sixty" }, 
       { digit: 7 , human_read: "seven" , human_read_dec: "seventy" }, 
       { digit: 8 , human_read: "eight" , human_read_dec: "eighty"}, 
       { digit: 9 , human_read: "nine" ,  human_read_dec: "ninety"},  
       { digit: 10 , human_read: "ten"},  
       { digit: 11 , human_read: "eleven"},  
       { digit: 12 , human_read: "twelve"},  
       { digit: 13 , human_read: "thirteen"},  
       { digit: 14 , human_read: "fourteen"},  
       { digit: 15 , human_read: "fifteen"},  
       { digit: 16 , human_read: "sixteen"},  
       { digit: 17 , human_read: "seventeen"},  
       { digit: 18 , human_read: "eighteen"},  
       { digit: 19 , human_read: "nineteen"}, 
      ];
      
      human_read_hund="hundred";
      
    if ( number.toString().length == '1' || number <= 19 ) {
       
      
      return num.filter(el => el.digit === number)[0].human_read;
      
      } if ( number.toString().length == '2' ) {
           
          if ( Math.floor(number%10) == 0 && number > 19 ) {  
             
            return num.filter(el => el.digit === (number/10))[0].human_read_dec; 
            
          }  else {
               decimal = num.filter(el => el.digit === Math.floor(number/10))[0].human_read_dec; 
               unit = num.filter(el => el.digit === (number%10))[0].human_read; 
              return decimal +' '+ unit;
             }
    } if ( number.toString().length == '3' ) {
         
        if ( Math.floor(number%100) == 0 ) {
            
            hund =num.filter(el => el.digit === Math.floor(number/100))[0].human_read;  
            return hund+ ' ' + human_read_hund;

         } if ( Math.floor((number/10)%10) == 0 ) {
            
              hund =num.filter(el => el.digit === Math.floor(number/100))[0].human_read;
              
              unit_hund = num.filter(el => el.digit === number%100 )[0].human_read; 

              return hund +' '+ human_read_hund+' '+unit_hund;

          
         } if ( ( Math.floor(number%100) > 9) && ( Math.floor(number%100) < 20 ) ) {
            
            hund =num.filter(el => el.digit === Math.floor(number/100))[0].human_read;
            
            dec_hund = num.filter( el => el.digit === Math.floor(number%100) )[0].human_read; 

            return hund +' '+ human_read_hund+' '+dec_hund;
         
            } if (  (Math.floor(number%100))%10 == 0 ) {
                
                hund =num.filter(el => el.digit === Math.floor(number/100))[0].human_read;
                
                dec_hund = num.filter(el => el.digit === Math.floor(number%100)/10)[0].human_read_dec;

                return hund +' '+ human_read_hund+' '+dec_hund;
            } 
            else {
                hund =num.filter(el => el.digit === Math.floor(number/100))[0].human_read;  

                dec_hund = num.filter(el => el.digit === Math.floor((number%100)/10))[0].human_read_dec; 
            
            unit_hund = num.filter(el => el.digit === (number%100)%10)[0].human_read; 
            
            return hund +' '+ human_read_hund +' '+ dec_hund +' '+ unit_hund;
         }
    }
  }
  
  /* от 101 до 109  == 0*/ 
 // console.log(  Math.floor(890%100) );
  
  /* от 110 до 119  == 0*/ 
  //console.log(Math.floor(119%100));
  //console.log( (956%100)%10 );
  
  //console.log(toReadable(120));