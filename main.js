//Task 6 (Odabrao sam dva razlicita niza, iako je 
    //mogao da bude i isti za obe)

    var lowestNumber = function (arrFirst){
        var lowest = 0;
        for (var i = 0; i<arrFirst.length; i++){
               if (arrFirst[i]<lowest){
                   lowest = arrFirst[i];
               }
            }
           return lowest;
       } 
       
      var highestNumber = function (arrSecond){
        var highest = 0;
        for (var i = 0; i<arrSecond.length; i++){
               if (arrSecond[i]>highest){
                   highest = arrSecond[i];
               }
            }
           return highest;
       } 
  
        var multyple = function (first, second ) {
           var a = lowestNumber(first);
           var b = highestNumber(second);
           var result = a*b;
          
           console.log(result);
        }

        multyple([-2,-19,-20,5,-21,99,33,778,23,78,29], [-23,-18,-22,5,-21,96,32,123,77,24,76,20]);


        //Task 7
         
           /* Petlju za pretragu jedinstvenih brojeva prvo sam uradio ovako,
            videvsi kako se radi na netu, dakle nije moja originalna ideja. 
            Kako to nije davalo zeljeni rezultat (izbacivao je samo duplikate a ostavljao originale), 
            presao sam na drugu petlju koja sledi dole. Ovo sam ostavio jer je korisno, i mozda mi zatreba nekad kasnije.

            var unique = [];
            var b = false; 
            
            for (var i=0; i<=arr.length; i++){
                for (var j=0; j<=arr.length; j++){
                    if (arr[i]==unique[j]){
                        b=true;
                    }
                }
               if (b==false) {
                    unique[i]=arr[i];
            }
                b=false;
        }
         console.log(unique);
       }

       */

    //    Dalje sledi kompletan zadatak
    // Nisam siguran da li je trebalo ovako
    // Prilicno sumnjam da je ovo trazeno u zadatku  
    // Dugo sam razmisljao i na kraju ga ovako uradio...

    var findUnqiue = function (arr){
     
    var order = [];
    var unique = [];
    
    var position = 0;
    var max = arr[0];
    var min = arr[0];
    var a = false;

    for (var e = 0; e<arr.length; e++){
        if(max<arr[e]){
            max=arr[e];
        }
    }

    for (var i=0; i<arr.length; i++){
        for (var j=0; j<arr.length; j++){
            if(arr[j]!=false){
                if(min>arr[j]){
                    min=arr[j];
                    position=j;
                }
            }
        }
        order[i] = min; 
        arr[position]=false;
        min=max;
    }
       //Petlja za izbacivanje i originala i duplikata
    for (var i=0; i<order.length; i++){
        if (order[i]!=order[i-1] && order[i]!=order[i+1]){
            unique[i]=order[i];
        }
    }

  console.log(unique);
  return unique;
}
//Vec sam prethodno poredjao niz od najmanjeg ka najvecem
// pa mi je sad znatno lakse da izbacim najveci
    
    function deleteBiggest (arr) {

        var newArr = [];

        for(var i=0; i<arr.length; i++){
            newArr[i]=arr[i-1];
        }
        return newArr;
    }
    
    function finalProduct (arr, deleteBiggest){

        var a = findUnqiue(arr);
        var b = deleteBiggest(a);
        console.log(b);
    }

    finalProduct([15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64], deleteBiggest);
