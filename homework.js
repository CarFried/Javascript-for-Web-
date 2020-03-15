const helmut = [
    {name: "helmut", 
     age: "65", 

    },
    {name: "helmut", 
        age: "65", 
   
       },
    {name: "helmut", 
        age: "65", 
   
       },
    {name: "helmut", 
        age: "59", 
   
       },
    {name: "helmut", 
        age: "65", 
   
       },
    {name: "heinrich", 
        age: "65",
       }

]
//function die durch das Array iteriert mit name als inhalt





for (i=0;i<=helmut.length;i++){
    let Ausgabe = document.createElement("div");
    Ausgabe.innerHTML = helmut[i].name;
    firstDiv.append(Ausgabe);
    if(helmut[i].age<60){
        Ausgabe.classList.add("style1");
    }
    else{
        Ausgabe.classList.add("style2");
    }
}





