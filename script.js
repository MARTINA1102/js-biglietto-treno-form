const chilometri = document.querySelector('[name=chilometri]').value;
const eta = document.querySelector('[name=età]').value;
const centesimiPerKm = 0.21;
const prezzoBigliettoPerKm = chilometri * centesimiPerKm ;
const elebutton= document.querySelector ('.btn');
const bigliettoFinale= document.querySelector ('.demo');
let nomePasseggero= document.querySelector ('nome_pass');
let numeroCasuale1=document.querySelector ('.numero-casuale-1');
let numeroCasuale2=document.querySelector ('.numero-casuale-2');
let prezzoFinaleTot=document.querySelector ('prezzo-finale-biglietto');


    

elebutton.addEventListener('click',function(){
    bigliettoFinale.classList.toggle('show');
    const chilometri = document.querySelector('[name=chilometri]').value;
    const eta = document.querySelector('[name=età]').value;
    const centesimiPerKm = 0.21;
    const prezzoBigliettoPerKm = chilometri * centesimiPerKm ;

    if (eta=== 'min'){
        let sconto=0.20;
        let prezzoFinale=prezzoBigliettoPerKm - prezzoBigliettoPerKm * sconto / 100;
        prezzoFinale= parseFloat(prezzoFinale.toFixed(2));
        console.log(prezzoFinale);
        prezzoFinaleTot=prezzoFinale
    
       
    }else if (eta === 'over'){
        let sconto=0.40;
        let prezzoFinale=prezzoBigliettoPerKm - prezzoBigliettoPerKm * sconto / 100;
        prezzoFinale= parseFloat(prezzoFinale.toFixed(2));
        console.log(prezzoFinale);
    
    
    }else{
        let sconto=0;
        let prezzoFinale=prezzoBigliettoPerKm - prezzoBigliettoPerKm * sconto / 100;
        prezzoFinale= parseFloat(prezzoFinale.toFixed(2));
        console.log(prezzoFinale);
    
    }

    numeroCasuale1.innerHTML=Math.floor(Math.random() * 11);
    numeroCasuale2.innerHTML=Math.floor(Math.random() * 100001);
    nomePasseggero= document.querySelector('[name=nomecogn]');
    
})



