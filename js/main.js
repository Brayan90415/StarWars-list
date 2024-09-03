const page = 1;
const limit = 10;

const url =  `https://starwars-databank-server.vercel.app/api/v1/characters?page=${page}&limit=${limit}`;
const listaordenada = document.getElementById("lista");

function convertPersonagemToLi(personagem){ 
    return`
            <li class="personagem">
                <span class="name">${personagem.name}</span>
                <div class="detail">
                    <span class="description">${personagem.description}.</span>
                    <img src="${personagem.image}" alt="${personagem.name}">
                </div>
            </li>
        `
}

fetch(url)
    .then((response) => response.json())
    .then((json) => json.data)
    .then((starList) => listaordenada.innerHTML += starList.map(convertPersonagemToLi))
    .catch((error)=> console.log("O erro é " + error));