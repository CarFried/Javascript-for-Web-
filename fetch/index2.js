
    //gib random bier in der console aus 
    
    const content = document.getElementById("content")
    

    const reload = () => {
    console.log("hello")
    fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(json => {
        const beer = json[0];
        const html= newBlogPost(beer)
        content.innerHTML = html
  
    })
    .catch(error => {
        console.error(error);
    })
  }

  reload ();

const newBlogPost = beer =>
    `<div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg justify-center bg-white m-6">
<img class="w-full" src=${beer.image_url}>
<div class="px-6 py-4">
<h1 id ="name" class="font-bold text-xl mb-2"> ${beer.name}</h1>
<p id="tagline" class="text-gray-700 text-base">
${beer.tagline}
</div>
</div>`

// const createHtmlElement = htmlString => {

//   const div = document.createElement("div");
//   div.innerHTML = htmlString; 
//   return div.firstChild(Child);
// }

  // const randomBeer()
//     const newBeer = randomBeer();

//     const createPostHtml = beer => {
//       // const card = document.createElement("div");
//       // card.innerHTML =
//   `  <div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg justify-center bg-white m-6">
//   <img class="w-full" src=${json[0].image_url}>
//   <div class="px-6 py-4">
//     <h1 id ="name" class="font-bold text-xl mb-2"> ${beer.name}</h1>
//     <h1 id ="name" class="font-bold text-xl mb-2"> ${beer.name}</h1>
//     <p id="tagline" class="text-gray-700 text-base">
//     ${beer.tagline}
//   </div>
// </div>`}

// createPostHtml ();

  

    

//     //in html -> Überschrift zu dem Namen zu dem beer, p paragraph mit Tagline zu dem beer/button/der es ausgibt


//     let randomBeer = document.createElement("div")
//     // randomBeer.innerHTML="<p>hello</p>"
//     randomBeer.innerHTML = `<div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg justify-center bg-white m-6">
//     <img class="w-full" src="${beer.image_url}">
//     <div class="px-6 py-4">
//       <div class="font-bold text-xl mb-2">${beer.name}</div>
//       <p class="text-gray-700 text-base">${beer.tagline}</p>
//     </div>
//    </div>`;

//  test.append(randomBeer);

//  //die funtion ansprechen ?


//microblog = in jedem Blog eine Extra Zeile für die Location des Micro blogs angezigt werden