function renderMenu(res) {
    const menu = JSON.parse(res).menu;
    const elUl = document.querySelector(".render");
    const render = menu.map(item => {
        let listItem = renderItems(item);
        elUl.appendChild(listItem);
    });
}

function renderItems(item) {
    const elLi = document.createElement('li');
    const elA = document.createElement('a');
        elA.setAttribute('href', item.path);
        elA.innerHTML = item.name;
        elA.classList.add("nav-link");
        elLi.classList.add("nav-item");
        elLi.appendChild(elA);
    return elLi;
}