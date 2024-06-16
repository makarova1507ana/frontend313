let url = "https://jsonplaceholder.typicode.com/";
let photos = document.querySelector('.photos');
let btn = document.querySelector('.btn');


async function get_photo(id = '') {
    let response = await fetch(`${url}photos/${id}`);
    let data = await response.json();
    return data;
}

async function get_title_album(id = '') {
    let response = await fetch(`${url}albums/${id}`);
    let data = await response.json();
    return data;
}

function display_photos(data) {

    for (let key in data) {
        let photo = data[key];
        let id = photo['id'];
        console.log(id);
        photos.innerHTML += `
    <div class="image" id="image${id}">
       <div class="title"></div>
        <img class="photo" src="${photo['url']}">
        <button class="btn" id=albumId-${photo['albumId']} data-albumid="${photo['albumId']}" data-imageid="${id}">Получить заголовок альбома</button>
    </div>
    `;
    }

}

document.addEventListener('DOMContentLoaded', async() => {
    data1 = await get_photo(1);
    data100 = await get_photo(100);
    data1000 = await get_photo(1000);
    data2000 = await get_photo(2000);
    display_photos([data1, data100, data1000, data2000]);
});


document.addEventListener('click', async function(event) {
    // console.log(event.target.dataset.albumid); 
    let title = document.querySelector(`#image${event.target.dataset.imageid} > .title`);
    //console.log(`#image${event.target.dataset.imageid} > .title`);

    let result = await get_title_album(event.target.dataset.albumid);
    title.innerHTML = result['title'];
})