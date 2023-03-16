console.log('Person 1: shows ticket');
console.log('Person 2: shows ticket'); 

const preMovie = async() => {

    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Ticket')
        },5000)
    })

    const getPopcorn = new Promise((resolve,reject)=>{
        resolve('Popcorn');
    })

    const getButter = new Promise ((resolve,reject)=>{
        resolve('Butter');
    })
     
    const getCoolDrinks = new Promise((resolve,reject)=>{
        resolve('Cool Drinks')
    })


    let ticket = await promiseWifeBringingTickets;

    console.log('Wife: i have got the tickets')
    console.log('Husband:lets Walk in')
    console.log('Wife: No, Iam Hungry')

    let popCorn = await getPopcorn;

    console.log('Husband: I have got some Popcorn')
    console.log('husband: lets walk in');
    console.log('Wife: I want butter on my Popcorn')

    let butter = await getButter;

    console.log('Husband: Here is the butter')
    console.log('husband: lets gooo!!!');
    console.log('Wife: I want sme cooldrinks to drink now..')

    let coolDrinks = await getCoolDrinks;

    console.log('Husband: Here you go lets go noww....')
    console.log('Wife:come lets go Mr.Husband...')

return ticket;

}
preMovie().then((m)=>console.log(`Person 3: shows ${m}`))
console.log('Person 4: shows ticket');
console.log('Person 5: shows ticket'); 