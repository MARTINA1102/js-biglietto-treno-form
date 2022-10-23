const chilometri = document.querySelector('[name=chilometri]').value;
const eta = document.querySelector('[name=età]').value;
const centesimiPerKm = 0.21;
const prezzoBigliettoPerKm = chilometri * centesimiPerKm ;
const elebutton= document.querySelector ('.btn');
const bigliettoFinale= document.querySelector ('.demo');
let nomePasseggero= document.querySelector ('nome_pass');
let numeroCasuale1=document.querySelector ('.numero-casuale-1');
let numeroCasuale2=document.querySelector ('.numero-casuale-2');


    

elebutton.addEventListener('click',function(){
    bigliettoFinale.classList.toggle('show');
    const chilometri = document.querySelector('[name=chilometri]').value;
    const eta = document.querySelector('[name=età]').value;
    const centesimiPerKm = 0.21;
    const prezzoBigliettoPerKm = chilometri * centesimiPerKm ;
    let prezzoFinaleTot=document.querySelector ('.prezzo-finale-biglietto');


    

    if (eta=== 'min'){
        let sconto=0.20;
        let costoBiglietto=prezzoBigliettoPerKm - prezzoBigliettoPerKm * sconto / 100;
        let prezzo= parseFloat(costoBiglietto.toFixed(2));
        console.log(prezzo);
        numeroCasuale1.innerHTML=Math.floor(Math.random() * 11);
        numeroCasuale2.innerHTML=Math.floor(Math.random() * 100001);
        nomePasseggero= document.getElementById(nome);
        console.log(nomePasseggero);
        prezzoFinaleTot=(`${prezzo}`);
    

    
       
    }else if (eta === 'over'){
        let sconto=0.40;
        let costoBiglietto=prezzoBigliettoPerKm - prezzoBigliettoPerKm * sconto / 100;
        let prezzo= parseFloat(costoBiglietto.toFixed(2));
        console.log(prezzo);
        numeroCasuale1.innerHTML=Math.floor(Math.random() * 11);
        numeroCasuale2.innerHTML=Math.floor(Math.random() * 100001);
        nomePasseggero= document.getElementById(nome);
        console.log(nomePasseggero);
        prezzoFinaleTot=(`${prezzo}`);
    

    
    
    }else{
        let sconto=0;
        let costoBiglietto=prezzoBigliettoPerKm - prezzoBigliettoPerKm * sconto / 100;
        let prezzo= parseFloat(costoBiglietto.toFixed(2));
        console.log(prezzo);
        numeroCasuale1.innerHTML=Math.floor(Math.random() * 11);
        numeroCasuale2.innerHTML=Math.floor(Math.random() * 100001);
        nomePasseggero= document.getElementById(nome);
        console.log(nomePasseggero);
        prezzoFinaleTot=(`${prezzo}`);
    



    }
    

    
})



