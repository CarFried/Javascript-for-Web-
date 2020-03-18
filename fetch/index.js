const content = document.getElementById("test")

const reload = () => { 
fetch("https://catfact.ninja/fact")
.then(res => res.json())
.then(json => {
    console.log(json.fact);
    content.innerHTML = json.fact;
})
.catch(error => {
    console.error(error);
})
}

reload ();


// //DOM IM JSON was ausgeben lassen String in von ein Fact in ein DIV zu schreieb, auf der Website ist der Fact zu lesen

// //create element 

// let newDiv = document.createElement("div");
// newDiv.innerHTML= json.fact;
// console.log(newDiv)
// document.body.append(newDiv);

// //Button in html, immer wenn button geklickt wird das fetch neu ausgeführt und das cat fakt aktualisiert sich

// Gib random beer in der Console aus 
//in html -> Überschrift zu dem Namen zu dem beer, p paragraph mit Tagline zu dem beer/button/der es ausgibt
//änlich wie microblog eine karte zu erstellen/bier enthalten namen taline und description

