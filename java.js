function color(){
    document.getElementById('input').style.backgroundColor = 'yellow';
}
function color2(){
    var string = document.getElementById('input').value;
    if (string.length < 3) {
        document.getElementById('input').style.backgroundColor = 'red';
} else if (string.length >= 3) {
    document.getElementById('input').style.backgroundColor = 'green';
}
}