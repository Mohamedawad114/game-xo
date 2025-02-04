let title=document.getElementById('title');
let turn='x';
let items=[];


function winner(n1, n2, n3) {
    title.innerHTML = `${items[n1]} Winner`;
    document.getElementById('item' + n1).style.backgroundColor = " rgb(224, 228, 96)";
    document.getElementById('item' + n2).style.backgroundColor = " rgb(224, 228, 96)";
    document.getElementById('item' + n3).style.backgroundColor = " rgb(224, 228, 96)";
    setInterval(function () { title.innerHTML += '.'; }, 1000);
    setTimeout(function () { location.reload() }, 4000);
}

function playgame(id){
    let item=document.getElementById(id);
    if(turn ==='x' && item.innerHTML==''){
        item.innerHTML='x';
        turn='o';
        title.innerHTML='O';
    }
    else if(turn ==='o' && item.innerHTML==''){
        item.innerHTML='o';
        turn='x';
        title.innerHTML='x';
}
getwiner();}

function getwiner() {
    for (let i = 1; i < 10; i++) {
        items[i] = document.getElementById('item' + i).innerHTML;
    }

    if (items[1] === items[2] && items[1] === items[3] && items[1] !== "") {
        winner(1, 2, 3);
    } else if (items[4] === items[5] && items[4] === items[6] && items[4] !== "") {
        winner(4, 5, 6);
    } else if (items[7] === items[8] && items[7] === items[9] && items[7] !== "") {
        winner(7, 8, 9);
    } else if (items[1] === items[4] && items[1] === items[7] && items[1] !== "") {
        winner(1, 4, 7);
    } else if (items[2] === items[5] && items[2] === items[8] && items[2] !== "") {
        winner(2, 5, 8);
    } else if (items[3] === items[6] && items[3] === items[9] && items[3] !== "") {
        winner(3, 6, 9);
    } else if (items[1] === items[5] && items[1] === items[9] && items[1] !== "") {
        winner(1, 5, 9);
    } else if (items[3] === items[5] && items[3] === items[7] && items[3] !== "") {
        winner(3, 5, 7);
    }

    // التحقق من التعادل
    if (!items.includes("")) {
        title.innerHTML = "Draw!";
        setTimeout(() => location.reload(), 4000);
    }
}