var numero1=Math.floor(Math.random()*6)+1;
var numero2=Math.floor(Math.random()*6)+1;
alert(numero1);
alert(numero2);

var fuente1="imagenes/lado"+numero1+".jpg";
var fuente2="imagenes/lado"+numero2+".jpg";

document.querySelector('.img1').setAttribute('src', fuente1);
document.querySelector('.img2').setAttribute('src', fuente2);

if(numero1>numero2){
    document.querySelector('h1').textContent="gana 1";
}
else if(numero2>numero1){
    document.querySelector('h1').textContent="gana 2";
}
else if(numero2=numero1){
    document.querySelector('h1').textContent="empate";
}