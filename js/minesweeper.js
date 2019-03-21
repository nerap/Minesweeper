var map = [];


function init_map(size){
    for (var y = 0; y < size; y++){
        temp = [];
        for (var x = 0; x < size; x++){
            temp.push("?");
        }
        map.push(temp);
    }
}



function init_bomb(size, bombs){
    init_map(size);
    for (var i = 0; i < bombs; i++){
        var x = Math.floor(Math.random() * size);
        var y = Math.floor(Math.random() * size);
        map[y][x] = "B";
    }
}