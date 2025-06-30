let count = 0;


document.getElementById("Add").onclick = function(){

    count++;
    document.getElementById("Number").textContent = count;
}

document.getElementById("0").onclick = function(){

    count = 0;
    document.getElementById("Number").textContent = "0";
}

document.getElementById("Minus").onclick = function(){

    count--;
    document.getElementById("Number").textContent = count;
}