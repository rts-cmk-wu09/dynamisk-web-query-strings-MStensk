const content = document.querySelector("main");
const docFrag = document.createDocumentFragment();
const heading = document.createElement("h1");
const body = document.querySelector("body");
const container = document.createElement("div");
container.setAttribute("class", "container")
content.append(heading);
content.append(container);

fetch('./data/destinations.json')
.then ((res) =>{
 return res.json();
}).then(data => {



    data.destinations.forEach( ele => {
        let card = document.createElement("article");
        card.setAttribute("class", "destinations");
        let div = document.createElement("div");
        div.setAttribute("class", "dest__box")
        let text = document.createElement("div");
        text.setAttribute("class", "box__more")
        let like = document.createElement("span");
        let picture = document.createElement("img");
        let title = document.createElement("h2");
        

        heading.innerHTML = "Apartments for rent"
        picture.src = "img/" + ele.image;
        title.textContent = ele.title;
        text.innerHTML = `<a href ="/destination.html?=id${ele.id}">More</a>`
        like.innerHTML = `<i class="fa-regular fa-heart"></i>`
        div.append(text);
        div.append(like);
        card.append(picture);
        card.append(div);
        container.append(card);

    });
});
    