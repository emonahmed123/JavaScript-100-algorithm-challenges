// inch to foot

// const inch = 24;

// function Tooo(inchTofoot) {

//     const foot = parseInt(inchTofoot / 12)
//     return foot

// }
// console.log(Tooo(inch))

//if odd numer retrun flase if even number retrun true



// function cheakEvenOdd(numer) {

//     const remainder = numer % 2
//     console.log(remainder)
//     if (remainder == 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(cheakEvenOdd(5))


//leap when year is leapyear


// function Leapyear(year) {

//     const Leap = year % 4

//     if (Leap === 0) {
//         return console.log("this is  leap year")
//     }

//     else {
//         return console.log("this is not  leap year")
//     }

// }
// Leapyear(2024)

// find odd number





// function findOddSum(paras) {
//     let sum = 0
//     paras.forEach((para, index) => {
//         const element = para
//         sum += element


//     });

//     return sum

// }
// function getOddnuminArray(numbers) {
//     const oddNumbara = []
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;

//         const element = numbers[index];
//         if (element % 2 !== 0) {


//             oddNumbara.push(element)
//         }


//     }

//     return oddNumbara

// }


// const oddNumbaras = (getOddnuminArray([5, 7, 8, 45, 30]))

// console.log(findOddSum(oddNumbaras))




// const lastvalue = [1, 2, 3, 4, 5];

// console.log(lastvalue[1])


// if (5 == '5') {
//     console.log('hello')
// } else (
//     console.log('fuck you')
// )




// let areaOfShapes = 'square'
// let a = 5;
// let b = 10;
// let result
// switch (areaOfShapes) {
//     case "square":
//         result = a * a
//         console.log(result)
//         break
//     case "rectangle":
//         result = a * b
//         console.log(result)
//         break


//     default:
// }
// let two = 5

// for (let i = 1; i <= 10; i++) {
//     let index = i

//     let numata = two * index

//     let num = two + 'x' + index + '=' + numata

//     console.log(num)
// }


// revers a sting whitout revers method


// let sumon = 'emon'




// function enaya(sum) {
//     let values = ''
//     console.log(typeof (values))
//     for (let i = sum.length - 1; i >= 0; i--) {


//         values = values + sum[i]
//     }
//     return values
// }
// console.log(enaya(sumon))


// function faCtorial(num) {
//     let sum = 1
//     for (let i = 1; i <= num; i++) {
//         let index = i;

//         sum = sum * index
//         console.log(i, sum)
//     }


// }
// faCtorial(7)

//   get  all odd number in array and get odd sum in arrry
// let oddArry = [1, 2, 3, 4, 5, 9, 6]

// function getOddnumber(arr) {
//     let Odd = []
//     for (let i = 0; i < arr.length; i++) {
//         let one = arr[i]
//         if (one % 2 !== 0) {
//             Odd.push(one)
//         }
//     }
//     return Odd
// }

// const plus = (getOddnumber(oddArry))


// function Oddsum(sum) {
//     let allSum = 0
//     for (let i = 0; i < sum.length; i++) {
//         let allvalue = sum[i];

//         if (allvalue % 2 !== 0) {
//             allSum = allSum + allvalue
//         }

//     }
//     console.log(allSum)
//     return allSum

// }
// Oddsum(plus);

// const sonay = 'i love.you and fuck you'

// const emon = sonay.split('')
// console.log(emon);

// const doesExist = sonay.includes('and')


// if (doesExist === true) {

// }

// console.log(doesExist)

// const result = Math.pow(3, 3)

// console.log(result);

//Math operation
//pow
// abs
// floor
// ceil
// Round
// const num = 2.4
// const fullNumber = Math.floor(Math.random() * 100)


// console.log(fullNumber);

// sawp

// substring
//substr



// const num = 2.1

// const number = Math.ceil(num)
// console.log(number)



// write a function that will take 3 number will return the max number;



// function maxNumber(num1, num2, num3) {
//     let maxNnum = 0


//     if (num1 < num2 && num1 < num3) {

//         return maxNnum = num1

//     }
//     else if (num2 > num1 && num2 > num3) {
//         return maxNnum = num2

//     }
//     else if (num3 > num1 && num3 > num2) {
//         return maxNnum = num3

//     }
//     return maxNnum
// }


// console.log(maxNumber(4, 12, 7))


// function minNumber(num1, num2, num3) {

//     let first = num1
//     let sec = num2
//     let thrd = num1

//     let minBtween = Math.min(first, sec, thrd)


//     return minBtween

// }

// console.log(minNumber(10, 2, 3))

// big elemeint in the array

// function maxNumberInArry(numbers) {
//     let mat = 0

//     for (let i = 0; i < numbers.length; i++) {

//         const element = numbers[i]
//         if (element > mat) {
//             mat = element
//         }

//     }
//     return mat
// }

// console.log(maxNumberInArry([33, 2, 2, 45, 63, 34]))


// function ReversWord(word) {
//     let ans = []

//     const Splet = word.split(' ')

//     for (let i = Splet.length - 1; i >= 0; i--) {

//         const element = Splet[i]
//         console.log(element)
//         ans.push(element)
//     }

//     console.log(ans)
//     const revers = ans.join(' ')
//     return revers
// }

// console.log(ReversWord('I love you'))


// Fibonacci sequence


// let fibo = [0, 1]

// for (let i = 2; i < 13; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2]
// }
// console.log(fibo)



// function PaperRequirements(book1, book2, book3) {

//     let mott = 0
//     if (book3 && book2 && book3) {
//         let mot = (book1 * 100) + (book2 * 200) + (book3 * 300)
//         mott = mott + mot

//     }
//     return mott
// }


// console.log(PaperRequirements(1, 5, 5));

// more big name


// function BestFriend(name) {
//     let big = name[0]


//     for (let i = 0; i < name.length; i++) {


//         if (name[i].length > big.length) {
//             big = name[i]
//         }
//     }
//     return big;
// }


// console.log(BestFriend(["emon", "sumonsss", "asraful"]))


// ৫. এইটা একটু ট্রিকি হতে পারে। একটা Array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা Array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।




// const deTicetodd = (arr) => {
//     let aRR = []

//     for (let i = 0; i <= arr.length; i++) {
//         let index = i;
//         let elemeint = arr[index]

//         if (elemeint >= 1) {
//             aRR.push(elemeint)

//         }
//         else {
//             break
//         }
//     }
//     return aRR
// }

// console.log(deTicetodd([1, 2, 3, 4, -5, 54]))


//  today off day.
//second off day
// last off day
// last eidit

//

// function woddCalculator(num, num2, num3) {

//     const perChairWood = 3;
//     const perTable = 10;
//     const perBedwood = 50;

//     const total = (perChairWood * num) + (perTable + num2) + (perBedwood * num3)

//     return total

// }

// const totalWood = woddCalculator(1, 2, 10,)
// console.log(totalWood)

const phones = [

    { name: 'Samsung', camera: 12, storage: '32gp', price: 3600, color: 'red' }, { name: 'Walton', camera: 15, storage: '34gp', price: 3500, color: 'green' },
    { name: 'Vivo', camera: 110, storage: '512gp', price: 5000, color: 'yellow' },
    { name: 'Walton', camera: 15, storage: '34gp', price: 3500, color: 'green' },
    { name: 'Iphone14', camera: 48, storage: '100gp', price: 9600, color: 'red' },

]
function CheapestPhone(phones) {

    let cheapest = phones[0]

    for (let i = 0; i < phones.length; i++) {

        const index = i;
        const phone = phones[index]
        if (phone.price < cheapest.price) {
            cheapest = phone
        }


    }
    return cheapest



    // const result = phone.filter(e => e.price >= 5000)


}

const mySelection = CheapestPhone(phones)
console.log(mySelection)