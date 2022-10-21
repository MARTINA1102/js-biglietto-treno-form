const chilometri = document.querySelector('[name=chilometri]').value;
const nomeCognome=document.querySelector('[name=nomecogn]');
const eta = document.querySelector('[name=età]').value;
const centesimiPerKm = 0.21;
const prezzoBigliettoPerKm = chilometri * centesimiPerKm ;
let sconto= 0;
const elebutton= document.querySelector ('.btn');
const bigliettoFinale= document.querySelector ('.demo');
let prezzoFinale=Math.round((prezzoBigliettoPerKm - (prezzoBigliettoPerKm * sconto)) * 100) / 100;
    console.log(prezzoFinale);
let nomePasseggero= document.querySelector ('nome_pass');
let numeroCasuale1=document.querySelector ('.numero-casuale-1');
let numeroCasuale2=document.querySelector ('.numero-casuale-2');
let prezzoFinaleTot=document.querySelector ('prezzo-finale-biglietto');

if (eta < 18){
    let sconto=0.20;
   
}else if (eta > 65){
    let sconto=0.40;

}
    

elebutton.addEventListener('click',function(){
    bigliettoFinale.classList.toggle('show'); 
});

numeroCasuale1.innerHTML=Math.floor(Math.random() * 11);
numeroCasuale2.innerHTML=Math.floor(Math.random() * 100001);
prezzoFinaleTot.innerHTML=prezzoFinale;


