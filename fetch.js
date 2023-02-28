const content = document.querySelector("main");
const docFrag = document.createDocumentFragment();
/*
fetch('./data/destinations.json')
.then (res => res.json())
.then(data => {

     let array = Object.values(data);
     let dests = array;
     array.map(function(destinations) {
        let li = document.createElement('div');
        let name = document.createElement('h2');
        let email = document.createElement('span');
        email.innerHTML = `${destinations[0].title}`;
        name.innerHTML = `${destinations[0].destination}`
        li.appendChild(name);
        li.appendChild(email);
        docFrag.appendChild(li);
        console.log(destinations);
     });
    
     content.appendChild(docFrag);
});*/

fetch('./data/destinations.json')
.then ((res) =>{
 return res.json();
}).then(data => {



    data.destinations.forEach( ele => {
        let card = document.createElement("article");
        card.setAttribute("class", "destinations");
        let div = document.createElement("div");
        div.setAttribute("class", "dest__box")

        let picture = document.createElement("img");
        let title = document.createElement("h2");
        
        picture.src = "img/" + ele.image;
        title.textContent = ele.title;
        
        card.append(picture);
        div.append(title);
        card.append(div);
        content.append(card);


    });
});
    