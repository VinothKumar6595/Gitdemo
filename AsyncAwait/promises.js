console.log('Person 1: shows ticket');
console.log('Person 2: shows ticket');      

const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Ticket')
    },3000)
})

const getPopcorn=promiseWifeBringingTickets.then((t)=>{
    console.log('Wife: i have got the tickets')
    console.log('Husband:lets Walk in')
    console.log('Wife: No, Iam Hungry')
    return new Promise((resolve,reject)=>{
        resolve(`${t} PopCorn`)
    })
})

const getButter = getPopcorn.then((t)=>{
    console.log('Husband: I have got some Popcorn')
    console.log('husband: lets walk in');
    console.log('Wife: I want butter on my Popcorn')
    return new Promise((resolve,reject)=>{
        resolve(`${t} Butter`)
    })
})

const getCoolDrinks = getButter.then((t)=>{
    console.log('Husband: Lets go!!')
    console.log('Wife: I Wants some Cool drinks')
    return new Promise((resolve,reject)=>{
        resolve(`${t} cool Drinks`)
    })
});

getCoolDrinks.then((t)=>{
    console.log(t)
})
console.log('Person 4: shows ticket');
console.log('Person 5: shows ticket');