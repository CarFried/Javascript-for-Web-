//fetch Joke API &&Reload Funktion


const content = document.getElementById("content")

const reload = () => { 
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(json => {
      console.log("reload")
        const joke = json;
        const html= newBlogPost(joke)
        console.log(html)
        content.innerHTML= html;
        

        // const punchline = document.createElement("div"); 
        // punchline.innerHTML = json.punchline
        // content.append(punchline)
        
    
    })
    .catch(error => {
        console.error(error);
    })
    }
    
    reload ();


    

    const newBlogPost = joke =>`<div id ="content" class="max-w-sm w-full lg:max-w-full lg:flex">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('belinda-fewings-iz2rJYY2pjE-unsplash.jpg')" title="Woman holding a mug">
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">${joke.setup}</div>
        <p class="text-gray-700 text-base">${joke.punchline}</p>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">Durchhalten! Homeoffice ist toll</p>
        </div>
      </div>
      <div class ="text-right">
        <button onclick="reload()" class="bg-blue-900 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full">
            Reload
          </button>
      </div>
    </div>
    </div>`




