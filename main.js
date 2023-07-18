// Set Methods 

let date = new Date();
let newdate = date.setTime(459250000000);
// setTime ---> add or subtruct time since 1970 by millseconds 
let setDate = date.setDate(15);
// setDate ---> change the day in month
let setyear = date.setFullYear(2020,5,30)
// setFullYear ---> set Year for the date and (month - day in the month) ===> optional
let setmonth = date.setMonth(7,2);
// setMonth ---> set the month and the day of the month
let setHours = date.setHours(20,5,3,1000);
//setHours ---> setHours and minutes and seconds and millseconds
let setminutes = date.setMinutes(59,2000);
// setMinutes ---> set minutes and seconds 
let setSeconds = date.setSeconds(1,1000);
// setSeconds ---> set seconds to the date
console.log(date);
//TimeStamp
let newdate2 = new Date(10000*60);
console.log(newdate2);
// How to type the date 
/*
1- string method
2- numerical method
*/
let history = new Date('Oct 15 1980');
let history1 = new Date('10 15 1980');
let history2 = new Date('Oct-15-1980');
let history3 = new Date('10-15-1980');
let history4 = new Date('1950-10-25'); //ISO (international standard)
let history5 = new Date(1910, 2 , 3 , 20 , 10 ,1000);
let history6 = new Date('1960-10-30T06:05:00Z');
let history7 = new Date('1980 12');
let history8 = new Date('1980');
let history9 = new Date('86');


console.log(history);
console.log(history1);
console.log(history2);
console.log(history3);
console.log(history4);
console.log(history5);
console.log(history6);
console.log(history7);
console.log(history8);
console.log(history9);

let performancenow = performance.now();
for(let i =0; i<10; i++){
    console.log(i);
}
let end_it = performance.now();
console.log(`now: ${performancenow}`);
console.log(`end: ${end_it}`);
// performance.now() ---> check the performance of your code 
// Generator function() ---> it is an iterator function and its type is object it used to excute operation and another operation will not be excuted before the first done 
let arr = ['anwar','kareem','belal']
function* check()
{
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield* myDetails();
    yield* arr
}
let res = check();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());

for(const i of check())
{
    console.log(i);
}

function myDetails ()
{
    return '123'
}
// you can use return it will stop the code after it if it hasnot value in it prancess
