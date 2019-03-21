let niveau = document.getElementById("niveaux");
let choix = 9;
let bomb = 10;
let plateau = [];




let essai = niveau.addEventListener("load", function (event) {
    var temp = event.target.value.split(",");
   choix =  Number(temp[0]);
   bomb = Number(temp[1]);
});

//***********Création plateau jeu *******************************

document.getElementById("start").addEventListener("click", function () {

   map = [];
   plateau = [];
   start();

   init_bomb(choix, bomb);

    document.getElementById("start").innerText="Reset";

   document.getElementById("plateau").innerHTML="";

   let tableElt = document.createElement("table");
   tableElt.id="table";

   for (let i=0; i<parseInt(choix); i++){
       let trElt = document.createElement("tr");
       plateau[i]=[];
       for (let j=0; j<parseInt(choix); j++){
           let tdElt = document.createElement("td");
           var temp = [i, j].join(",");

           var image = document.createElement("img");

           image.setAttribute("src", "../img/images/normal.png");

           image.addEventListener("mouseup" , function (e) {
               mouse_listener(e);
           });


           tdElt.appendChild(image);

           tdElt.dataset.row=""+i;

           tdElt.dataset.collumn=""+j;
           trElt.appendChild(tdElt);
           plateau[i][j]=tdElt;
       }
       tableElt.appendChild(trElt);
   }
   document.getElementById("plateau").appendChild(tableElt);
});

//*****************************

document.getElementById("plateau").addEventListener('contextmenu', function(evt) {
    evt.preventDefault();
}, false);


document.getElementById("plateau").addEventListener("mouseup" , function (e) {
        mouse_listener(e);
    });

function mouse_listener(e){
    var y = Number(e.target.dataset.row);
    var x = Number(e.target.dataset.collumn);

    if (e.button === 0){
        if (map[y][x] === "B"){
            var string = return_format(current_timer);
            reset();
            alert("You lost in " + string);
            reset();
            plateau[y][x].innerHTML='<img src="../img/images/bomb.png">';
            return;
        }
        discover_surrond(map, y, x);
        //plateau[y][x].innerHTML='<img src="../img/images/empty.png">';
        updateDisplay();
        if (is_win()){
            alert("You win in " + return_format(current_timer));
            reset();

        }
    }
    else if (e.button === 2){
        plateau[y][x].innerHTML='<img src="../img/images/flag.png">';
    }
}
