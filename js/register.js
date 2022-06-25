window.addEventListener('load',()=>{

    document.getElementById('register').addEventListener('submit',()=>{
        event.preventDefault();

        const name = document.getElementById('nome').value
        const surname = document.getElementById('sobrenome').value
        const email = document.getElementById('mail').value
        const tel = document.getElementById('tel').value
        const address = document.getElementById('address').value
        const cep = document.getElementById('cep').value
        const password = document.getElementById('senha').value
        const passwordConfirm = document.getElementById('confirmar_senha').value

        let valid = validateFields(name,surname,email,tel,address,cep,password,passwordConfirm)


        var body = {
            name:name,
            surname: surname,
            email:email,
            tel:tel,
            address:address,
            cep:cep,
            password: password
        }

        if(valid){

            fetch('http://127.0.0.1:3000/clients/register',
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: {"Content-Type": "application/json"}
            })
            .then((res)=>{
                if(res.status ==200){
                    alert("Usuário criado com sucesso!");
                    location.href = "/login.html"
                }else{
                    alert("Usuário já cadastrado! Favor fazer login!")
                }

                return false

            })
            .catch((err)=>{
                alert(err);
                return false
            })

            
        }else{
            return false
        }

    })


    function validateFields(name,surname,email,tel,address,cep,password,passwordConfirm){
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;

        if(name.lenght < 0 ){
            alert("O nome é obrigatório")
            return false
        }else if(surname.lenght < 0){
            alert("O sobrenome é obrigatório")
            return false
        }else if(email.lenght<0 || email.indexOf('@')== -1 ){
            alert( "O email é obrigatório")
            return false
        }else if(tel.lenght < 10 || tel.lenght < 11){
            alert("O telefone é obrigatório e deve ter no minimo 10 digitos")
            return false
        }else if(password !== passwordConfirm ){
            alert("As senhas estão diferentes!!")
        }else if(!password.match(lowerCaseLetters) || !password.match(upperCaseLetters) || !password.match(numbers)){
            alert("A senha deve ter letras maiusculas, minuscula e numeros")
            return false
        }else if(password.lenght<8){
            alert("A senha deve ter no minimo 8 elementos")
            return false
            
        }else{
            return true
        }

        


    }


})
