// For each does not return anything; it is only used for looping and printing.

//example 
// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )
// console.log(values); //undefined


//filter
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )


// If we use a for-each loop, we can use the code below. Both methods work correctly, but using filter is more modern and efficient.

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);



//filter complex and practical example
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// //   let userBooks = books.filter( (bk) => bk.genre === 'History')

// //   userBooks = books.filter( (bk) => { 
// //     return bk.publish >= 1995 && bk.genre === "History"
// // })
// //   console.log(userBooks);
// //
// let filteredBooks = books.filter( (booksss) => booksss.genre === "Fiction")
// //
// let filteredBooksss = books.filter( (booksss) => booksss.genre === "Fiction" && booksss.publish >= 1985)
// //
// let filteredBook = books.filter( (booksss) => {
//    return booksss.edition >= 2005
// })
// console.log(filteredBook)
