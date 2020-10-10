var urlMenu = 'assets/data/menu.json';
var xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlMenu, true);
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var res = xhttp.responseText;
            renderMenu(res);
        }
    }
    xhttp.send();