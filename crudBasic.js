//CRUD - Basic

const miniTwitter = {
    users:[
        {
            username: 'joaogab',
        }
    ],
    posts:[
        {
            id:1,
            owner:'joaogab',
            content:'My first tweet'
        }
    ]
};

//CREATE------------------------------------

function createPost(dados){
    miniTwitter.posts.push({
        id:miniTwitter.posts.length +1,
        owner: dados.owner,
        content: dados.content
    })
}
createPost({owner:'joaogab', content:'My second tweet'});
createPost({owner:'joaogab', content:'Hello world'});
//console.log(miniTwitter.posts)

//READ-----------------------------------

function pickPost(){
    return miniTwitter.posts;
}
console.log(pickPost())

//UPDATE--------------------------------------

function updateContentPost(id, newContent){
    const postWhichUpdate = pickPost().find((post) => {
        return post.id === id;
    })
    console.log(postWhichUpdate)
    postWhichUpdate.content = newContent;
}
updateContentPost(2, 'new contentX');
console.log(pickPost())

//DELETE--------------------------------

function deletePost(id){
    const postListUpdated = pickPost().filter((atualPost) =>{
        return atualPost.id !== id;
    })
    miniTwitter.posts = postListUpdated;
    console.log(postListUpdated)
}
//deletePost(3);
//deletePost(2);
deletePost(1);
console.log(pickPost())