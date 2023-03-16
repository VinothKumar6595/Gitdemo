

const posts=[{title:'Post One' , createdAt: new Date().getTime()},{title:'Post Two' , createdAt: new Date().getTime()}]

const newPosts= async() => {
    let createPost = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push()
            resolve()
        },1000)
    })

    let create7thPost = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },4000)
    })

    let updateLastUserActivityTime = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        })
    })

    let deletePost = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },1000)
    })

    let Po = await createPost
    posts.push({title :'Post three' , createdAt: new Date().getTime()},{title :'Post Four' , createdAt: new Date().getTime()},{title :'Post five' , createdAt: new Date().getTime()},{title :'Post Six' , createdAt: new Date().getTime()})

    let seventh = await create7thPost;
    posts.push({title :'Post Seven' , createdAt: new Date().getTime()});

    let userActivity = await updateLastUserActivityTime; 
    for(let i=0;i<posts.length;i++){
        console.log(posts[i].title + " last updated at " + ((new Date().getTime()-posts[i].createdAt)/1000) + "Seconds ago")
    }

    let Delete = await deletePost;
    posts.pop();

    let userActivity1 = await deletePost;
    for(let i=0;i<posts.length;i++){
        console.log(posts[i].title + " last updated at " + ((new Date().getTime()-posts[i].createdAt)/1000) + "Seconds ago")
    }
    return Po;
}
newPosts().then(()=>console.log('posts are printed'))



// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//              posts.push({title :'Post Seven' , createdAt: new Date().getTime()});
//             resolve()
//         },1000)
//     })
// }

// function create7thPost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push({title :'Post Seven' , createdAt: new Date().getTime()});
//             resolve()
//         },1000)
//     })
// }

// function updateLastUserActivityTime(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             for(let i=0;i<posts.length;i++){
//                 console.log(posts[i].title + " last updated at " + ((new Date().getTime()-posts[i].createdAt)/1000) + "Seconds ago")
//             }
//             resolve()
//         },1000)
//     })
// }

// function deletePost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.pop();
//             resolve()
//         },1000)
//     })
// }


// Promise.all([createPost({title :'Post Three' , createdAt: new Date().getTime()}) , 
// createPost({title :'Post Four' , createdAt: new Date().getTime()}) , 
// createPost({title :'Post Five' , createdAt: new Date().getTime()}) , 
// createPost({title :'Post Six' , createdAt: new Date().getTime()}),
// create7thPost(),
// updateLastUserActivityTime()])
// .then(deletePost())
// .then(updateLastUserActivityTime)

