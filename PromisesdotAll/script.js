const posts=[{title:'Post One' , createdAt: new Date().getTime()},{title:'Post Two' , createdAt: new Date().getTime()}]

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            resolve()
        },1000)
    })
}

function create7thPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({title :'Post Seven' , createdAt: new Date().getTime()});
            resolve()
        },1000)
    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            for(let i=0;i<posts.length;i++){
                console.log(posts[i].title + " last updated at " + ((new Date().getTime()-posts[i].createdAt)/1000) + "Seconds ago")
            }
            resolve()
        },1000)
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            resolve()
        },1000)
    })
}


Promise.all([createPost({title :'Post Three' , createdAt: new Date().getTime()}) , 
createPost({title :'Post Four' , createdAt: new Date().getTime()}) , 
createPost({title :'Post Five' , createdAt: new Date().getTime()}) , 
createPost({title :'Post Six' , createdAt: new Date().getTime()}),
create7thPost(),
updateLastUserActivityTime()])
.then(deletePost())
.then(updateLastUserActivityTime)

