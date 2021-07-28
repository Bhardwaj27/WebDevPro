var singleMenucategories = document.getElementsByClassName("categoryType");
for (let i = 0; i < singleMenucategories.length; i++) {
    singleMenucategories[i].style.display = "none";
}


function display(type) {
    if (type == south) {
        var singleMenucategories = document.getElementsByClassName("categories");
        for (let i = 0; i < singleMenucategories.length; i++) {
            singleMenucategories[i].style.display = "none";
        }
        document.getElementById('south').style.display="grid";
    }
    if (type == north) {
        var singleMenucategories = document.getElementsByClassName("categories");
        for (let i = 0; i < singleMenucategories.length; i++) {
            singleMenucategories[i].style.display = "none";
        }
        document.getElementById('north').style.display="grid";
    }
    if (type == continental) {
        var singleMenucategories = document.getElementsByClassName("categories");
        for (let i = 0; i < singleMenucategories.length; i++) {
            singleMenucategories[i].style.display = "none";
        }
        document.getElementById('continental').style.display="grid";
    }
    if (type == italian) {
        var singleMenucategories = document.getElementsByClassName("categories");
        for (let i = 0; i < singleMenucategories.length; i++) {
            singleMenucategories[i].style.display = "none";
        }
        document.getElementById('italian').style.display="grid";
    }
    if (type == chinese) {
        var singleMenucategories = document.getElementsByClassName("categories");
        for (let i = 0; i < singleMenucategories.length; i++) {
            singleMenucategories[i].style.display = "none";
        }
        document.getElementById('chinese').style.display="grid";
    }
    if (type == dessert) {
        var singleMenucategories = document.getElementsByClassName("categories");
        for (let i = 0; i < singleMenucategories.length; i++) {
            singleMenucategories[i].style.display = "none";
        }
        document.getElementById('dessert').style.display="grid";
    }
    if (type == beverage) {
        var singleMenucategories = document.getElementsByClassName("categories");
        for (let i = 0; i < singleMenucategories.length; i++) {
            singleMenucategories[i].style.display = "none";
        }
        document.getElementById('beverage').style.display="grid";
    }
}
















var color = true;
function discountcolor() {
    if (color) {
        document.getElementById(`discount`).style.color = `red`;
    }
    else
        document.getElementById(`discount`).style.color = `yellow`;
    color = !color;
}
setInterval(() => {
    discountcolor();
}, 1000);






























