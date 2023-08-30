function getUserPost (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => displayPost(json))
}
function displayPost (posts){
    console.log(posts);
    const postDiv = document.getElementById(`post-container`);
    for (const post of posts){
        console.log(post);
        const div = document.createElement(`div`);
        div.innerHTML= `
        <h2><span class="font-medium text-lg" >users:</span> ${post.id}</h2>
        <h3><span class="font-medium text-lg" >Title:</span>  ${post.title}</h3>
        <p><span class="font-medium text-lg" >Post:</span> ${post.body}</p>
        `
        div.classList.add(`bg-red-100`, `p-2`, `rounded-lg`,`w-[300px]`,`post`)
        postDiv.appendChild(div);
    }
    
}
// getUserPost();
const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 