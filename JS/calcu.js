function solution() {
    p = document.getElementById('ans');
    s = eval(p.value);
    pa = document.getElementById("para");
    k = document.createElement('p');
    k.append(p.value + '=');
    p.value = s;
    k.append(s + "");
    pa.appendChild(k);
}

function clearr() {
    k = document.getElementById("para");
    while (k.firstChild) {
        k.removeChild(k.firstChild);
        console.log(k);
    }
}