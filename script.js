var form =document.getElementById('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    var username=document.getElementById('username').value ;
    var email=document.getElementById('email').value;
    var usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;

    if (!usernameRegex.test(username)) {
        eroare.textContent = 'Introdu un nume de utilizator valid.';
        return;
    }

    if (!emailRegex.test(email)) {
        eroare.textContent = 'Introdu un email valid.';
     return;
    }
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    ascundeCasutele();
})
function ascundeCasutele() {
    document.getElementById('username').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('submitButton').style.display = 'none';
}
function procent(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function culoareRandom() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeButtonStyle(button, percentage) {
    button.innerText = `Sanse: ${percentage}%`;
    button.style.backgroundColor = culoareRandom();
    button.style.color = 'white';
    button.style.fontSize = '18px';
    button.style.border = '5px solid darkred';
}

let ok = 1;
    document.getElementById('randomButton').addEventListener("click",()=>{
        if(!ok)return;
        const procentajRandom = procent(5, 100);
        changeButtonStyle(document.getElementById('randomButton'), procentajRandom);
        ok = 0;
        setTimeout(()=>{ok=1;},2500);
    })

