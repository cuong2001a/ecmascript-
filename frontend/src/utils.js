export const parseRequestUrl = () => {
    const reslut = window.location.hash.toLowerCase();
    const request = reslut.split('/');
    return {
        resource: request[1],
        id: request[2],
        // action : request[3]
    }
}
export const $ = selector => {
    let elments = document.querySelectorAll(selector);
    return elments.length == 1 ? elments[0] : [...elments]
}
export const reRender = async (component, position = '') => {
    if (position) {
        $(position).innerHTML = await component.render();

    } else {
        $("#main-content").innerHTML = await component.render();
    }
    await component.afterRender();
    await component.ListProduct();
    await component.searchProduct();
}

export const isAuthenticated = () => {
    if (localStorage.getItem('token')) {
        return JSON.parse(localStorage.getItem('token'))
    } else {
        return false
    }
}