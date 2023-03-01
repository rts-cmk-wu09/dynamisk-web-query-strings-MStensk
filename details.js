const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('./data/destinations.json')
.then ((res) =>{
 return res.json();
}).then(data => {

    
});