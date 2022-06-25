import changeMode from './darkMode.js'

window.addEventListener('load',()=>{

    var elipses = document.getElementById("elipses")
    elipses.addEventListener('click', ()=>{changeMode()});

    document.getElementById("loginForms").addEventListener('submit', ()=>{
        event.preventDefault();
        const body = {
            email: document.getElementById('email').value,
            password:document.getElementById('password').value
        };
        fetch("http://localhost:3000/clients/login",
        {
            method:"POST",
            body:JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        })
        .then(res=>{
            if(res.status == 200){
                alert("Login com sucesso!!");
                res.json().then(res=>{
                    if(document.getElementById('check').checked){
                        localStorage.setItem('user',JSON.stringify(res))
                    }else{
                        sessionStorage.setItem('user',JSON.stringify(res))
                    }
                    location.href="/userPage.html"; 
                    return false
                        
                })

            }else if(res.status == 400){
                alert("Usuário/senha incorretos");
                return false
            }
        })
        .catch(err=>{
            alert(err)
        })
        
        
    })
})