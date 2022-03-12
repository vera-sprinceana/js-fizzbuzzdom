//Scrivi un programma che stampi in console i numeri da 1 a 100.
//MILESTONE 1
//Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
for( i=1; i<=100; i++){
    console.log (i);
   
}
for(i=1; i<=100; i++){
    if((i%3==0) && (i%5==0)){
        console.log ("FizzBuzz")
        document.getElementById("containerNumeri").innerHTML +=`<div class="numeri FizzBuzz"> FizzBuzz </div>`;    
    }
    else if(i%3==0){
        console.log("Fizz")
        document.getElementById("containerNumeri").innerHTML +=`<div class="numeri Fizz"> Fizz </div>`;    
    }else if(i%5==0){
        console.log("Buzz")
        document.getElementById("containerNumeri").innerHTML +=`<div class="numeri Buzz"> Buzz </div>`;    
    }else{
       console.log(i) 
       document.getElementById("containerNumeri").innerHTML +=`<div class="numeri"> ${i} </div>`;    
    }
    
}

    
   

//MILESTONE 2 (Bonus)
//Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

//MILESTONE 3 ( superbonus )
//Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.