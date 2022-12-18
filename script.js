// const { data } = require("jquery");

const myForm = document.getElementById("myForm")
const mySearch = document.querySelector("#cata")
const cardContainer = document.querySelector('.cardContainer')
const fnameInput = document.querySelector('#fname')
const seleCted = document.querySelector('#selecting').value;
const slideshowImages = document.querySelectorAll('.slideshow-image')
const nextImageDelay = 3000;
let currentImageCounter = 0;
slideshowImages[currentImageCounter].style.opacity = 0.6;
setInterval(nextImage, nextImageDelay);
var ftName = '';
var ltName = '';
function nextImage() {
    slideshowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = 0.6;
}

const details = document.getElementsByClassName("details")[0]
let currentId = -1;


let sampleData = [
    {
        "address": {
            "geolocation": {
                "lat": "-37.3159",
                "long": "81.1496"
            },
            "city": "kilcoole",
            "street": "new road",
            "number": 7682,
            "zipcode": "12926-3874"
        },
        "id": 1,
        "image": "/images/Bulbasaur.jpg",
        "email": "john@gmail.com",
        "username": "johnd",
        "password": "m38rmF$",
        "name": {
            "firstname": "Bulbasaur",
            "lastname": "Leaf pokemon"
        },
        "phone": "1-570-236-7033",
        "__v": 0
    },

    // ---------------------------
    {
        "address": {
            "geolocation": {
                "lat": "-37.3159",
                "long": "81.1496"
            },
            "city": "kilcoole",
            "street": "Lovers Ln",
            "number": 7267,
            "zipcode": "12926-3874"
        },
        "id": 2,
        "image": "/images/Squirtel.jpg",
        "email": "morrison@gmail.com",
        "username": "mor_2314",
        "password": "83r5^_",
        "name": {
            "firstname": "Squirtel",
            "lastname": "Water pokemon"
        },
        "phone": "1-570-236-7033",
        "__v": 0
    },
    // ---------------------------
    {
        "address": {
            "geolocation": {
                "lat": "40.3467",
                "long": "-30.1310"
            },
            "city": "Cullman",
            "street": "Frances Ct",
            "number": 86,
            "zipcode": "29567-1452"
        },
        "id": 3,
        "image": "/images/Charmander.jpg",
        "email": "kevin@gmail.com",
        "username": "kevinryan",
        "password": "kev02937@",
        "name": {
            "firstname": "Charmander",
            "lastname": "Fire pokemon"
        },
        "phone": "1-567-094-1345",
        "__v": 0
    },
    // ---------------------------
    {
        "address": {
            "geolocation": {
                "lat": "50.3467",
                "long": "-20.1310"
            },
            "city": "San Antonio",
            "street": "Hunters Creek Dr",
            "number": 6454,
            "zipcode": "98234-1734"
        },
        "id": 4,
        "image": "/images/pikachu.jpg",
        "email": "don@gmail.com",
        "username": "donero",
        "password": "ewedon",
        "name": {
            "firstname": "Pikachu",
            "lastname": "Electric pokemon"
        },
        "phone": "1-765-789-6734",
        "__v": 0
    },
    // ---------------------------

]


const main = document.getElementById('addUser');
const addressBtn = document.getElementById('showAddress');
const CredBtn = document.getElementById('showCreds');
const changePassBtn = document.getElementById('changePass');
const remBtn = document.getElementById('removeUser');



function openSearch() {
    mySearch.classList.remove('hide');
}

// Close the full screen search box
function closeSearch() {
    mySearch.classList.add('hide');
}








function sample() {
    console.log("sample called");

    var x = document.getElementById("ident").value;
    document.getElementsByClassName("cardContainer")[0].innerHTML = "You selected: " + x;
    sampleData.forEach((val) => {
        const card = document.createElement('div')

        card.classList.add('infoCard')

        const img = document.createElement('img')
        img.src = val.image;

        const h4 = document.createElement('h4')
        h4.innerHTML = val.name.firstname + " " + val.name.lastname;

        const para = document.createElement('p')
        para.innerHTML = val.address.geolocation.lat + " , " + val.address.geolocation.long;
        para.innerHTML = val.address.city + ", " + val.address.street + " ," + val.address.number + " ," + val.address.zipcode;

        card.appendChild(img)
        card.appendChild(h4)
        card.appendChild(para)
        cardContainer.appendChild(card)


    })
}





function getIDS() {

    var val = document.getElementById('ident').value;

    if (val > -1 && val != "") {
        alert('Exist');
        const data = sampleData[val];
        console.log("this is getIDS");

        const card = document.createElement('div')
        card.id = val;
        card.classList.add('infoCard')

        const img = document.createElement('img')
        img.src = data.image;

        const h4 = document.createElement('h4')
        h4.innerHTML = data.name.firstname + " " + data.name.lastname;

        const para = document.createElement('p')
        para.innerHTML = data.address.geolocation.lat + " , " + data.address.geolocation.long;
        para.innerHTML = data.address.city + ", " + data.address.street + " ," + data.address.number + " ," + data.address.zipcode;

        if (currentId != -1) { cardContainer.removeChild(document.getElementById(currentId)); }

        card.appendChild(img)
        card.appendChild(h4)
        card.appendChild(para)
        cardContainer.appendChild(card)
        currentId = val;
    }
    else {
        alert('Not found');
    }

}



function openForm() {
    myForm.classList.remove('hide')
}

function closeForm() {
    myForm.classList.add('hide')
}

// ------------------------------form submission
let formObject = {
    address: {
        geolocation: {
            lat: "",
            long: ""
        },
        city: "",
        street: "",
        number: null,
        zipcode: ""
    },
    id: null,
    image: "",
    email: "",
    username: "",
    password: "",
    name: {
        firstname: "",
        lastname: ""
    },
    phone: "",

}


function onSubmit() {
    const imaG = document.getElementById('images').value
    const iD = document.getElementById('ids').value
    const fNames = document.getElementById('fname').value
    const lNames = document.getElementById('lname').value
    const eMail = document.getElementById('emails').value
    const psWord = document.getElementById('passwords').value
    const laTid = document.getElementById('lats').value
    const lonGit = document.getElementById('longs').value
    const ciT = document.getElementById('citys').value
    const streetvalue = document.getElementById('streets').value
    const streetNumber = document.getElementById('street-numbers').value
    const zipCode = document.getElementById('zipcodes').value
    const phNo = document.getElementById('phones').value


    formObject = {
        address: {
            geolocation: {
                lat: laTid,
                long: lonGit,
            },
            city: ciT,
            street: streetvalue,
            number: streetNumber,
            zipcode: zipCode,
        },
        id: iD,
        image: imaG,
        email: eMail,
        password: psWord,
        name: {
            firstname: fNames,
            lastname: lNames,
        },
        phone: phNo,
    }
    sampleData.push(formObject);
    console.log(sampleData);
    document.getElementById('images').value = ""
    document.getElementById('ids').value = ""
    document.getElementById('fname').value = ""
    document.getElementById('lname').value = ""
    document.getElementById('emails').value = ""
    document.getElementById('passwords').value = ""
    document.getElementById('lats').value = ""
    document.getElementById('longs').value = ""
    document.getElementById('citys').value = ""
    document.getElementById('streets').value = ""
    document.getElementById('street-numbers').value = ""
    document.getElementById('zipcodes').value = ""
    document.getElementById('phones').value = ""
}





// function createCard() {
//     const card = document.createElement('div')
//     card.classList.add('card')
//     const heading = document.createElement('h1')



//     if (ftName && ltName != '') {

//         card.innerHTML = `New Pokemon :- ${ftName}`;
//     } else {
//         alert("please enter task name")
//         return;
//     }

//     const para = document.createElement('p')
//     para.innerHTML = `Type :- ${ltName}`;

//     card.appendChild(heading)
//     card.appendChild(para)
//     cardContainer.appendChild(card)

//     fnameInput.value = ''
//     ftName = ''
// }

function removeCard() {
    // console.log(cardContainer)
    const child = cardContainer.firstChild
    cardContainer.removeChild(child)
    var val = document.getElementById('ident').value;
    sampleData.pop(val);
    // console.log(sampleData)
}
// ---------------------------------------gaming tab---------------
class Pokemon {
    constructor(name, sprite, hp, moves) {
        this.name = name;
        this.sprite = sprite;
        this.hp = hp;
        this.fullhp = hp;
        this.moves = moves;
    }
}

let pkmList = [
    ['Charizard', 'Charizard.png', 390, [
        ['Flamethrower', 'fire', 95, 0.95],
        ['Dragon Claw', 'dragon', 100, 0.95],
        ['Air slash', 'fly', 75, 0.85],
        ['Slash', 'normal', 70,]
    ]],
    ['Blastoise', 'Blastoise.png', 382, [
        ['Surf', 'water', 90, 0.95],
        ['Crunch', 'normal', 80, 0.95],
        ['Ice punch', 'ice', 75, 0.95],
        ['Flash cannon', 'steel', 80, 0.95]
    ]],
    ['Venusaur', 'Venusaur.png', 370, [
        ['Petal Blizzard', 'grass', 90, 0.95],
        ['Sludge bomb', 'poison', 90, 0.95],
        ['Earthquake', 'ground', 100, 0.95],
        ['Body Slam', 'normal', 75, 0.95]
    ]],
    ['Raichu', 'Raichu.png', 378, [
        ['Circle Circuit', 'Thunderbolt', 90, 0.95],
        ['Spark BallGX', 'Psychic', 90, 0.95],
        ['Painfull-Punch', 'Mach Bolt', 85, 0.95],
        ['Mega Thunderbolt', 'normal', 100, 0.95]
    ]]
];

// pokemons at game
let typeMatch = {
    'Charizard': [['ground'], ['water', 'rock', 'Mega Thunderbolt', 'grass'], ['fire', 'poison', 'steel', 'Psychic']],
    'Blastoise': [[''], ['grass', 'Mega Thunderbolt'], ['fire', 'water', 'Psychic']],
    'Venusaur': [['poison'], ['fire', 'fly', 'ice', 'steel', 'Mega Thunderbolt'], ['grass', 'water', 'Psychic']],
    'Raichu': [['Dragon Claw'], ['fire', 'ice', 'steel', 'poison'], ['steel', 'grass']],
}
function spawn(bool) {
    let p = pkmList[Math.floor(Math.random() * pkmList.length)];
    let pkm = new Pokemon(p[0], p[1], p[2], p[3]);

    if (bool) {
        for (i = 0; i < 4; i++) {
            document.getElementById('m' + i).value = pkm.moves[i][0];
        }
    }
    return pkm;
}




let pk1 = spawn(true);
let s1 = document.createElement('img');
s1.src = pk1.sprite;
document.getElementById('pk1').appendChild(s1);
document.getElementById('hp1').innerHTML = '<p> HP: ' + pk1.hp + '/' + pk1.fullhp + '</p>';

let pk2 = spawn(true);
let s2 = document.createElement('img');
s2.src = pk2.sprite;
document.getElementById('pk2').appendChild(s2);
document.getElementById('hp2').innerHTML = '<p>HP: ' + pk2.hp + '/' + pk2.fullhp + '</p>';


for (i = 0; i < 4; i++) {
    let btn = document.getElementById('m' + i);
    let move = pk1.moves[i];
    function addHandler(btn, move, pk1, pk2) {
        btn.addEventListener('click', function (e) {
            attack(move, pk1, pk2, 'hp2', '');
            setTimeout(attack, 2000, pk2.moves[Math.floor(Math.random() * 3)], pk2, pk1, 'hp1', 'YOUR ');

        });
    }
    addHandler(btn, move, pk1, pk2);
}

function attack(move, attacker, reciever, hp, owner) {
    document.querySelector('#comment').innerHTML = '<p>' + owner + attacker.name + " " + 'used' + " " + move[0] + '!</p>';
    if (Math.random() < move[3]) {
        let power = move[2] += Math.floor(Math.random() * 10);
        let rtype = typeMatch[reciever.name];
        let mtype = move[1];
        let scale = 1;
        for (i = 0; i < rtype.length; i++) {
            if (rtype[i].includes(mtype)) {
                switch (i) {
                    case 0: scale = 0;
                        setTimeout(function () {
                            document.querySelector('#comment').innerHTML = '<p>It had no effect!</p>';
                        }, 1000);
                        break;
                    case 1:
                        scale = 2;
                        setTimeout(function () {
                            document.querySelector('#comment').innerHTML = '<p>It was super effective!</p>';
                        }, 1000);
                        break;
                    case 2:
                        scale = 0.5;
                        setTimeout(function () {
                            document.querySelector('#comment').innerHTML = '<p>it was not very effective!</p>';
                        }, 1000);
                        break;
                }
                break;
            }

        }
        power *= scale;
        reciever.hp -= Math.floor(power);
        document.querySelector(hp).innerHTML = '<p>HP: ' + reciever.fullhp + '</p>';
    } else {
        setTimeout(function () {
            document.querySelector(hp).innerHTML = '<p>Attack missed!</p>';
        })
    }
    checkWinner(hp);
}


function checkWinner(hp) {
    let f = (pk1.hp <= 0) ? pk1 : (pk2.hp <= 0) ? pk2 : false;
    if (f != false) {
        alert('GAME OVER:' + f.name + 'fainted!');
        document.querySelector(hp).innerHTML = '<p>HP:0/' + f.fullhp + '</p>';
        setTimeout(function () {
            location.reload();
        }, 1500)
    }
}

// -----------------API for testing  --------------------------------


const shpContainer = document.querySelector('.filter-container');
const bottomContainer = document.querySelector('.bottom');
const filteredContainer = document.querySelector('.filtered-shop-container')
let pokemonList;

function getApiData(id) {
    fetch(`https://fakestoreapi.com/products`)
        .then(response => {
            return response.json();
        }).then(data => {
            // console.log(data);
            createCard(data, shpContainer)
            idDropDown(data)
        })

}

// getApiData()
// this creates card for shopping
// function createCard(apiData, location) {

//     apiData.forEach((product) => {
//         const card = document.createElement('div')
//         card.classList.add('pokemon')


//         const image = document.createElement('img')
//         image.src = product.image

//         const heading3 = document.createElement('h3')
//         heading3.innerHTML = product.title

//         const para = document.createElement('p')
//         para.innerHTML = product.category

//         card.appendChild(image)
//         card.appendChild(heading3)
//         card.appendChild(para)

//         location.appendChild(card)
//     })
// }

// function unqueValue(arr) {
//     var res = [];
//     for (var i = 0; i < arr.length; ++i) {
//         if (res.indexOf(arr[i]) < 0) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }

// function idDropDown(data) {
//     const selectTags = document.createElement('select')
//     let filterOption = '';

//     selectTags.addEventListener('change', (e) => {
//         console.log(e.target.value)
//         filterOption = e.target.value

//         let filteredData = data.filter((val) => {
//             return val.category == filterOption
//         })

//         cardContainer.classList.add('hide')
//         defaultOptionTag.disabled = true
//         defaultOptionTag.hidden = true

//     })



//     let categoryValues = data.map((val) => {
//         return val.category
//     })

//     let uniqueCategories = unqueValue(categoryValues)

//     const defaultOptionTag = document.createElement('option')
//     defaultOptionTag.innerHTML = 'Choose category'
//     selectTags.appendChild(defaultOptionTag)

//     uniqueCategories.forEach((val) => {
//         const optionTag = document.createElement('option')
//         optionTag.innerHTML = val

//         selectTags.appendChild(optionTag)
//     })

//     filterContainer.appendChild(selectTags)

// }

// idDropDown()

const pkmResult = [];
const pkmArray = [];
function getPokemonData(id) {

    var userInput = document.querySelector("#search-item").value;
    let api = "https://pokeapi.co/api/v2/pokemon/" + userInput;
    console.log(api);
    fetch(api)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);

            pkmResult.push(data.results);

            console.log('pkmResult', pkmResult);
            pokemonList = data.results;
            createPkmCard(data.results, shpContainer);
        })
}




// function getSearch() {
//     var userInput = document.querySelector("#search-item").value;
//     let pAPI = pkmResult.url + userInput;
//     fetch(pAPI)
//         .then(response => {
//             return response.json();
//         }).then(result => {
//             console.log(result);

//             pkmArray.push(result);

//             console.log('pkmArray', pkmArray);

//             // console.log('pkmResult', pkmResult);
//             // pokemonList = data.results;
//             createPkmCard(pkmArray, shpContainer);
//         })
// }



// **************************************************************************************************************************
// for pokemon cards

// POKEAPI


function createPkmCard(apiData, location) {

    apiData.forEach((product, index) => {
        // var name = product.forms[0].name,
        //     pokeImgFront = product.sprites.front_default,
        //     pokeImgBack = product.sprites.back_default,
        //     pokeImgShinyFront = product.sprites.front_shiny,
        //     pokeImgShinyBack = product.sprites.back_shiny,
        //     shiny = false,
        //     frontImg = true,
        //     speed = product.stats[0].base_stat,
        //     spDef = product.stats[1].base_stat,
        //     spAtk = product.stats[2].base_stat,
        //     def = product.stats[3].base_stat,
        //     atk = product.stats[4].base_stat,
        //     hp = product.stats[5].base_stat,
        //     // id = "#" + data.id,
        //     weight = "<span class='stat'>Weight: </span>" + product.weight,
        //     height = "<span class='stat'>Height: </span>" + product.height,
        //     types = [];
        // for (var i = 0; i < product.types.length; i++) {
        //     var type = product.types[i].type.name;
        //     types.push(type);
        // }

        // function pokemonType(types) {
        //     $("#types").html("");
        //     for (var i = 0; i < types.length; i++) {
        //         $("#types").append(
        //             "<div class='pokeType poke-info " +
        //             types[i] +
        //             "'>" +
        //             types[i] +
        //             " </div>"
        //         );
        //     }
        // }

        const card = document.createElement('div')
        card.classList.add('pokemon')
        // let splitArr = product.url.split("/");
        // const imgNo = splitArr[splitArr.length - 2];
        const aTag = document.createElement('a')
        const id = index + 1;
        const image = document.createElement('img')
        // image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(imgNo, ".png");
        // image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + imgNo + ".png";
        image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        const heading3 = document.createElement('h3')
        heading3.innerHTML = product.name;

        const para = document.createElement('p')
        para.innerHTML = index + 1;


        const btn = document.createElement('button')
        btn.innerHTML = "Tap to view";

        card.appendChild(image);
        card.appendChild(aTag)
        card.appendChild(heading3)
        card.appendChild(para)
        card.appendChild(btn)

        location.appendChild(card)


        fetch(product.url)
            .then(response => {
                return response.json();
            }).then(data => {
                console.log("this is product.url", data);

            })
    })
}



// --------this is searchbox in filter container----
// const searcher = (val) => {
//     // console.log(val)
//     const searchValue = document.getElementById("search-item").value.toUpperCase();
//     for (var i = 0; i < product.url.length; i++) {
//         let match = product[i].getElementByTagName('h3')[0];
//         if (match) {
//             let textvalue = match.textContent || match.innerHTML
//             if (textvalue.toUpperCase().index(searchbox) > -1) {
//                 product[i].style.display = "";

//             } else {
//                 product[i].style.display = "none";
//             }
//         }
//     }

//     let POkemonDtls
// }





// -------pokemon PAGE-1--------

const pkmType = ["None", "All", "normal", "fire", "water", "grass", "electric", "psychic", "flying", "poison", "dark", "ghost", "fairy", "bug", "ground", "rock", "steel"];
let select = document.querySelector('select')
pkmType.forEach((val) => { //using for each method to call the data and display type of pokemon
    var opttag = document.createElement("option")
    // console.log(opttag)
    opttag.innerHTML = val
    select.appendChild(opttag)


})


//here we are access the select tag for html
let uniquePokemon = pkmType.map((val) => { //here we are storing all the pokemon type values in uniquepokemon
    return val

})
console.log("this is ununique pokemons ", uniquePokemon)//here console or checking the all values of pokemon type are proper
unique_values = Array.from(new Set(uniquePokemon))


function selectTag(type) {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            createPkmCard(data.results.url.type, shpContainer)
        })
    const pkmArr = data.url;
    const getObject = (type, pkmArr) => product.url.find(val => val.type == type)
    product.forEach((c, index) => {
        if (Object.values(c).some(Array.isArray)) console.log(index);
    });
    let results = getObject(type, pkmArr)
}

