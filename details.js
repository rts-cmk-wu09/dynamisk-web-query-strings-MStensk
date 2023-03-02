const params = new URLSearchParams(document.location.search);
const id = params.get("id");
console.log(id)
fetch(`./data/${id}.json`)
.then ((res) =>{
 return res.json();
}).then(data => {
    console.log(data)


    document.querySelector("body").innerHTML += `
        <section>
            <figure>
            <img src="img/${data.image}" alt="image">
            <span><i class="fa-regular fa-heart"></i><p>FAVORIT</p></span>
            </figure>
            <div>
            <h2 class="dest">${data.destination}</h2>
            <h1 class="title">${data.title}</h1>
            <p class="subtitle">${data.subtitle}</p>
            <p class="text">${data.text}</p>
            <ul class="facilities">
                <p>Facilities</p>
                <li>${data.facilities[0]}</li>
                <li>${data.facilities[1]}</li>
                <li>${data.facilities[2]}</li>
                <li>${data.facilities[3]}</li>
            </ul>
            <div>
        </section>



`;
});