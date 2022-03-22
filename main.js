let regUsersDb = [];

function registration() {
    let email = document.getElementById("email").value;
    let psw = document.getElementById("psw").value;
    let pswRepeat = document.getElementById("psw-repeat").value;

    if (psw !== pswRepeat){
        alert("Nem egyeznek a jelszavak!");

    } else {
        regUsersDb.push({ email: email, password: psw });
        console.log("Sikeres regisztráció!");
        showLogin();
    }

    document.getElementById("email").value = "";
    document.getElementById("psw").value = "";
    document.getElementById("psw-repeat").value = "";
}

function login() {
    let logEmail = document.getElementById("logEmail").value;
    let logPsw = document.getElementById("logPsw").value;
    let counter = 0;
    for (let i = 0; i < regUsersDb.length; i++) {
        if (regUsersDb[i].email === logEmail && regUsersDb[i].password === logPsw) {
            counter++;
        }
    }
    if (counter === 0) {
        alert("Hibás felhasználónév vagy jelszó!");
    } else {
        alert("Sikeres bejelentkezés!");
    }
}

function showLogin(){
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function showRegister(){
    document.getElementById("registrationForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}