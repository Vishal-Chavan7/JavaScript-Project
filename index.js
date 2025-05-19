// 

// let movieRating = [
//     {title: "Movie A", ratings: [4,5,3]},
//     {title: "Movie B", ratings: [5,5,4]},
//     {title: "Movie C", ratings: [3,4,2]}
// ]

// let result = movieRating.map((movie)=>{
//     let total = movie.ratings.reduce((acc,sum)=> acc+sum,0)
//     let average = total/movie.ratings.length;
//     return {title : movie.title, averageRatings: average.toFixed(2)}
// })

// console.log(result)


// function in js

// function greet(value){
//     console.log(`Hello ` + value);
// }

// greet("Vishal")
// let person1 = {
//     name : "vishal",
//     greet: function(){
//         console.log(`Hello ${name}`)
//     }
// }

// setTimeout(()=>{
//     console.log("First Time")
// },2000)

// setTimeout(()=>{
//     console.log("Second Time")
// },5000)

// setTimeout(()=>{
//     console.log("Third Time")
// },7000


// callback in js

// function doHomework(subject,callback){
//     console.log(`Starting my ${subject} homework`);
//     callback();
// }

// function alertFinished(){
//     console.log("Finished my homework")
// }

// doHomework("Math",alertFinished)


