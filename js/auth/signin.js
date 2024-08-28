const mailInput=  document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    // Ici, il faudras appeler l'api pour verifier les credential en BDD

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        alert("Vous êtes connecté");

        //Il faudras récupérer le vrais token
        const token = "jcbzfnzsnqfdjdtyhdbgvskdjbunbnjfy";
        setToken(token);
        //placer ce token en cookie

        setCookie(RoleCookieName, "client", 7);

        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}