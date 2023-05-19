var ToDo = (function () {
    function ToDo() {
    }
    return ToDo;
}());
window.onload = function () {
    var readCookie = document.getElementById("read-cookie");
    var deleteCookie = document.getElementById("delete-cookie");
    var createCookie = document.getElementById("create-cookie");
    readCookie.onclick = readCookieData;
    deleteCookie.onclick = deleteCookieData;
    createCookie.onclick = createCookieData;
};
function readCookieData() {
    var data = JSON.parse(Cookies.get(myCookie));
    console.log(data);
    if (data != undefined) {
        alert(data);
    }
    else {
        alert("No cookie was found");
    }
}
var myCookie = "TestCookie";
function deleteCookieData() {
    Cookies.remove(myCookie);
    alert("Cookie was removed");
}
function createCookieData() {
    var TwoWeeksAsDays = 14;
    var item = new ToDo();
    item.title = "this is a todo item";
    item.isComplete = false;
    Cookies.set(myCookie, JSON.stringify(item), { expires: TwoWeeksAsDays });
    alert("Cookie was created");
}
