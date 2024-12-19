H    = document.getElementById('Height');
W    = document.getElementById('Weight');
T = document.getElementById('meuInput');
btd  = document.getElementById('btd');

btd.addEventListener('click', go);

function go()
{
   const height = Number(H.value);
   const weight = Number(W.value);
   const Meters = height/ 100; 
   let cont =weight / (Meters*Meters);
   T.value = cont.toFixed(1);
}



