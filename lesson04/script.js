let somePost = document.querySelector(".newPost");


async function get_post(id = '') {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/` + `${id}`);
    let data = await response.json();
    return data;
}

function display_posts(data) {

    for (let key in data) {
        let userInfoPost = data[key];
        somePost.innerHTML += `
    <div>
        <img src="postSVG.png" alt="">
        <div class="content">
          <h1>${userInfoPost.title}</h1>
        <p>${userInfoPost.body}</p>
        </div>
    </div>
    `;
    }

}

document.addEventListener('DOMContentLoaded', async() => {
    data = await get_post(1);
    display_posts([data]);
});