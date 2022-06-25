import changeMode from './darkMode.js'

window.addEventListener("load", () => {

    var elipses = document.getElementById("elipses")
    elipses.addEventListener('click', ()=>{changeMode()});

    document.getElementById("registerClient").addEventListener("click", async (e) => {

        e.preventDefault();

        const valEmail = document.querySelector("input[name='email']").value;
        const valTel = document.querySelector("input[name='tel']").value;

        var isValid = true

        if (valEmail.indexOf("@gmail.com") == -1 && valEmail.indexOf("@outlook.com") == -1) {
            alert("Email não é válido!!")
            isValid = false
        }
        if (valTel.length != 11) {
            alert("Telefone não válido!!")
            isValid = false
        }

        if (isValid) {


            let body = { email: valEmail, tel: valTel }

            console.log(body)

            fetch("http://localhost:3000/clients/registerEmail",
                {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: { "Content-Type": "application/json" }
                })
                .then(() => {
                    location.href = "/downloadEbook.html"
                })
                .catch((e) => {
                    console.log(e)
                })


        }

    })


})