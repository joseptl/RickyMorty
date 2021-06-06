const url = "https://rickandmortyapi.com/api/character";

export async function getCharactersByName (filtro){
    const data = await fetch(`${url}/${filtro}`)
    const lista = await data.json()
    return lista.results
    
    
}

export async function printCharacter(filtro){

    const listaPersonajes = document.querySelector(".characterList")
    const $fragmento = document.createDocumentFragment();
    try{
        const personajes = getCharactersByName(filtro)
        const lista = await personajes
        lista.forEach(element => {
        const $contenedor=document.createElement("div");
        $contenedor.classList.add("container-character");
        const $contenedorData=document.createElement("div");
        $contenedorData.classList.add("container-character-data");
        const $data=document.createElement("div");
        const $contenedorImagen=document.createElement("div");
        $contenedorImagen.classList.add("container-character_Containerimage")
        const $imagen=document.createElement("img");
        $imagen.src=`${element.image}`;
        $imagen.alt=`Foto de Perfil de ${element.name}`
        $data.classList.add("container-character_info");
        $data.innerHTML=
        `
        <ul class="dataList">
            <li class="dataListItem">Name: ${element.name}</li>
            <li class="dataListItem">Status: ${element.status}</li>
            <li class="dataListItem">Gender: ${element.gender}</li>
            <li class="dataListItem">Species: ${element.species}</li>
        </ul>`
        $contenedorImagen.appendChild($imagen);
        $contenedorData.appendChild($data);
        $contenedorData.appendChild($contenedorImagen);
        $contenedor.appendChild($contenedorData)
        $fragmento.appendChild($contenedor);
    });
    
    }
    catch(err){
        const $containerError = document.createElement("div");
        $containerError.classList.add("containerError");
        const $error = document.createElement("p");
        $error.classList.add("error")
        $error.append("No se han encontrado resultados")
        $containerError.appendChild($error)
        $fragmento.appendChild($containerError)
    }
    listaPersonajes.innerHTML="";
    listaPersonajes.appendChild($fragmento);
}

export default printCharacter;