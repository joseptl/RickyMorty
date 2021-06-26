import printCharacter from "./fetch.js";
const $formButtom=document.querySelector(".formButton");
const filtro=()=>{
    console.log("prueba")
    let busqueda=`?`
    let cont=0
    const lista = [...document.querySelectorAll(".formInput")]
    lista.forEach(element => {
        if(!element.value==""&&cont===0){
            busqueda=`${busqueda}${element.name}=${element.value.toLowerCase()}`
            cont++
        }
        else if(!element.value==""){
            busqueda=`${busqueda}&${element.name}=${element.value}`
        }
    });
    return busqueda
}
$formButtom.addEventListener("click",function(){
    const $container=document.querySelector(".characterList")
    $container.innerHTML=`<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
    printCharacter(filtro())
})
