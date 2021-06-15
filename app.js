// function randomn(num) {
//     return Math.ceil(Math.random()*num);
// }

// console.log(randomn(10));

// function singSong() {
//     console.log('lalallalalalalalallalala')
//     console.log('lalallalalalalalallalala')
//     console.log('lalallalalalalalallalala')
//     console.log('lalallalalalalalallalala')
// }
// singSong();

// function greet(name) {
//     console.log(`Hi ${name}`)
// }
// greet('Jack');

// function repeat(string, num) {
//     let mess = '';
//     for(let i = 0; i < num; i++) {
//         mess += string + ' ';
//     }
//     console.log(mess)
// }
// repeat('hello', 5);

// function add(num1, num2) {
//     return num1+num2;
//     console.log('shit son')
// }

// let sum = add(5,20);
// console.log(sum)

// function isShortsWeather(temp) {
//     if(temp >= 75) {
//         return true;
//     }
//     return false;

// }
// console.log(isShortsWeather(80));
// console.log(isShortsWeather(60));

// function lastElement(last) {
//     if(last.length === 0) {
//         return null;
//     }
//     let end = last.length;
//     return last[end - 1];
// }
// console.log(lastElement([0,1,2,3,4,5]));

// function capitalize(str) {
//     let first = str.slice(0,1).toUpperCase();
//     let newstr = str.slice(1).toLowerCase();
//     return first + newstr;
// }
// console.log(capitalize('PRESToN'));
// function sumArray(array) {
//     let total = 0;
//     for(let i = 0; i < array.length; i++) {
//       total += array[i];
//     }
//     return total;
// }
// console.log(sumArray([1,1,1,3]))
// let days = [ 'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday'
//     ];
// function returnDay(num) {
//     if(num < 1 || num > 7) {
//         return null;
//     }
//     return days[num - 1];
// }
// console.log(returnDay(0))

// const product = {
//     name: 'Gummy Bears',
//     inStock: true,
//     price: 1.99,
//     flavors: ['grape','apple','cherry'],
// };
// console.log(product)
// console.log(product.name)

// const midterms = {
//     danielle: 96,
//     thomas: 78
// }
// console.log(midterms)

// midterms.thomas = 79
// console.log(midterms)

// midterms.justin = 55;
// console.log(midterms);


// const comments = [
//     {
//         username: 'Tammy',
//         text: 'lololo',
//         votes: 9
//     },
//     {
//         username: 'FishBoi',
//         text: 'Glub',
//         votes: 200
//     }
// ]
// console.log(comments[1].username)


// const cats = [
//     {
//         name: 'Larp',
//         age: Math.ceil(Math.random()*20),
//         nice: function() {
//             let flip = 0;
//             flip = Math.ceil(Math.random()*2);
//             console.log(flip);
//             if(flip === 1) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     },
//     {
//         name: 'Kart',
//         age: 2,
//         nice: true
//     },
//     {
//         name: 'Kitty',
//         age: 12,
//         nice: false
//     },
//     {
//         name: 'Cheeseball',
//         age: 10,
//         nice: true
//     },
//     {
//         name: 'Lumpy',
//         age: 33,
//         nice: false
//     }
// ]
// for (let i = 0; i < cats.length; i++) {
//     if(cats[i].nice === true) {
//         console.log(`${cats[i].name} is a ${cats[i].age} year old nice cat`)
//     } else {
//         console.log(`${cats[i].name} is a real ass hole!!`)
//     }
// }

// const myFriends = ['Sophia','John','Winston','Leif','Jeff']

// for(let i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i]);
// }


// const mathHelp = {
//     add: function(num1,num2) {
//         return num1 + num2;
//     },
//     sub: function(num1,num2) {
//         return num1 - num2;
//     },
//     sqr: function(num) {
//         return num * num;
//     }
// }
// console.log(mathHelp.add(1,2));

// console.log(mathHelp.sub(10,5))

// console.log(mathHelp.sqr(2))
// console.log(mathHelp.sqr);

// function fuck() {
//     for(let i = 0; i < 10; i++) {
//     console.log('<3')
// }
// }
// console.log(fuck())


// function rant(message) {
//     for(let i = 0; i < 3; i++) {
//         console.log(message.toUpperCase());
//     }
// }
// rant('fuck');

// function isSnakeEyes(num1,num2) {
//     if(num1 === 1 && num2 === 1) {
//         console.log('Snake Eyes!');
//     } else {
//         console.log('Not Snake Eyes!');
//     }
// }

// isSnakeEyes(1,1)
// isSnakeEyes(1,2)

// function multiply(num1,num2) {
//     return num1*num2;
// }
// console.log(multiply(1,2));

// function lastElement(array) {
//     let index = array.length - 1; 
//     if(index >= 0) {
//         return array[index];
//     } else {
//         return null;
//     }
// }
// console.log(lastElement([]));
// console.log(lastElement([1,2]))
// function capitalize(string) {
//     let first = string.slice(0,1).toUpperCase();
//     let rest = string.slice(1).toLowerCase();
//     console.log(first + rest) ;
// }
// capitalize('fasdfHJHSHHSHD')
// capitalize('FUCK')


// function sumArray(array) {
//     let sum = 0;
//     for(let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }

// console.log(sumArray([1,2,3,4]))

// const days = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday'
//     ];
    
// function returnDay(day) {
//     if(day >= 1 && day <=7) {
//         return days[day - 1];
//     } else {
//         return null;
//     }
// }

// console.log(returnDay(7));


// function isSnakeEyes(num1,num2) {
//     if(num1 === 1 && num2 === 1) {
//         console.log('Snake Eyes!');
//     } else {
//         console.log('Not Snake Eyes!');
//     }
// }
// isSnakeEyes(1,1);
// isSnakeEyes(2,1);


const days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};
console.log(days[4])


function returnDay(day) {
    if(day >=1 && day <= 7) {
        return days[day];
    } else {
        return null;
    }
}
console.log(returnDay(1))