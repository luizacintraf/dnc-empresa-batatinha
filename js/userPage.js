import changeMode from './darkMode.js'

window.addEventListener('load',()=>{
    var elipses = document.getElementById("elipses");
    elipses.addEventListener('click', ()=>{changeMode()});

    var user = document.getElementById('user')
    user.onclick = ()=> {logout()} ;
});

if (sessionStorage.getItem("user") || localStorage.getItem("user")) {
    var user = sessionStorage.getItem("user")
        ? sessionStorage.getItem("user")
        : localStorage.getItem("user");
    user = JSON.parse(user);
    document.getElementById("personName").innerHTML =
        user.name + " " + user.surname;
} else {
    location.href = "login.html";
}
var events;
fetch("http://127.0.0.1:3000/getEvents")
    .then((res) => res.json())
    .then((res) => {
        events = res;

        events = events.sort(function (a, b) {
            return new Date(b.data) - new Date(a.data);
        });
        document.getElementById("city").innerHTML = events[0].local;
        document.getElementById("data").innerHTML = events[0].data;

        filterQuery();
    });

const filterQuery = () => {
    let params = new URLSearchParams(location.search);
    let search = params.get("search");
    let selected = events.filter(
        (el) =>
            el.local.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
            el.data.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
    selected = selected.map((el) => el.data + " - " + el.local);
    let text = selected.join("\n");
    if (search) {
        alert(text);
    }
};

const logout = () => {
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");

    location.href = "/login.html";
};