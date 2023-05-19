class ToDo{
    title:string;
    isComplete:boolean;
}

window.onload = function(){
    let readCookie = document.getElementById("read-cookie");
    let deleteCookie = document.getElementById("delete-cookie");
    let createCookie = document.getElementById("create-cookie");


    readCookie.onclick = readCookieData;
    deleteCookie.onclick = deleteCookieData;
    createCookie.onclick = createCookieData;

    
}

function readCookieData(){
    let data:ToDo = JSON.parse(Cookies.get(myCookie));
    console.log(data);
    
    if(data != undefined){
         alert(data);
    }
    else{
        alert("No cookie was found");
    }
}

const myCookie = "TestCookie";

function deleteCookieData(){
    Cookies.remove(myCookie);
    alert("Cookie was removed");
}

function createCookieData(){
    const TwoWeeksAsDays = 14;
    let item = new ToDo();
    item.title = "this is a todo item";
    item.isComplete = false;

    Cookies.set(myCookie, JSON.stringify(item), {expires: TwoWeeksAsDays});
    alert("Cookie was created");
}