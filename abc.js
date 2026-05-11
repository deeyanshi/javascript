// let student={
//     name :"pulkit",
//     age:25

// };
// console.log(student["name"]);


// let key ="age"
// console.log(student[key]);

// student["marks"]=90;
// student["age"]=26;

// console.log(student["marks"]);

// let key ="marks"
// console.log(student[key]);

// console.log(student["age"]);

// let key ="age"
// console.log(student[key]);

// console.log(student);


// let student={};

// let prop="age";
// student[prop]=22;
// console.log(student);





// let keyName="marks";
// let student={
//     name:"aman",
//     [keyName]:90                            //{ name: 'aman', marks: 90 }
// };
// console.log(student);



// let student=[
//     {name:"himanshu", marks:60},
//     {name:"shreya", marks:80},
//     {name:"nityam", marks:90}

// ]
// console.log(student[0].name);
// student[1].marks=85;
// student[2].grade="A";
// delete student[0].marks;
// console.log(student);

// let numbers=[10,20,30];
// let[a,b,c]= numbers;
// console.log(a);
// console.log(b);
// console.log(c);


// let[x,,z]=[1,2,3];
// console.log(x);
// console.log(z);

// let numbers=[10,20,30];
// let{[1]:x,[1]:y}=numbers;
// console.log(x);
// console.log(y);



// const numbers=[10,20,30,40,50,60,70];
// const[a,b, ...rest]=numbers;
// console.log(a);
// console.log(b);
// console.log(rest);


// let firstname="alan";
// let lastname="turing";
// [firstname,lastname]=[lastname,firstname]
// console.log(firstname);
// console.log(lastname);


// let person = {name:"alice",age:25,city:"london"};
// let{name,age}=person;
// console.log(name);
// console.log(age);


// let student={
//     name:"janhit",
//     marks:90
// };
// let{name:studentName,marks:score}=student;
// console.log(studentName);
// console.log(score);


// let student ={
//     name:"akshay"
// };
// let{name,marks=60}=student;
// console.log(name);
// console.log(marks);


// const marks={
//     section1:{alpha:15,beta:16},
//     section2:{alpha:-31,beta:19}
// };
// const {section1:{alpha:alpha1,beta:beta1}}=marks;
// console.log(alpha1,beta1);


// let student={
//     name:"ritik",
//     adress:{
//         city:"delhi",
//         pincode:110001
//     }
// };
// let {address : {city,pincode}}=student;
// console.assert(city);
// console.log(pincode);



// let student={
//     name:"aman",
//     marks:90,
//     age:25
// };
// let{name,...rest}=student;
// console.log(name);
// console.log(rest);


// let obj={name:"john",age:30};
// let jsonString=JSON.stringify(obj);
// console.log(jsonString);


// let jsondata='{"name":"john","age":30}';
// let obj = JSON.parse(jsondata);
// console.log(obj.name);
// console.log(obj.age);


// let students = [
//     {name:"ridhi",marks:80},
//     {name:"tanu", marks:90},
//     {name:"parth", marks:70}
// ];
// // students.sort((a,b)=>a.name.localeCompare(b.name));
// // console.log(students);
// students.sort((a,b)=>a.marks-b.marks);
// console.log(students);


// let arr=[10,5,2,1];
// arr.sort((a,b)=>a-b);
// console.log(arr);
// arr.sort((a,b)=>b-a);
// console.log(arr);


// let arr=[1,2,3,4];
// arr.sort(()=>Math.random()-0.5);
// console.log(arr);

// console.log(Math.min(10,5,20));
// let arr= [100,50,20];
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// function myMin(arr){
//     let min = arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<min){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(myMin([10,5,20]));


// function myMax(arr){
//     let max = arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(myMax([10,5,20]));

// let arr=[1,2,3];
// arr.forEach(x=>console.log(x*2));              //for each



//flat map
// let arr=[1,2,3];
// let result= arr.flatMap(x=>[x,x*2]);
// console.log(result);

// let arr=["A","B","C"];
// for(let key of arr.keys()){
//     console.log(key);
// }


// let arr=["A","B"];
// for(let[i,val] of arr.entries()){
//     console.log(i,val);
// }

// let arr=[1,2,3];
// let newArr=arr.with(1,99);
// console.log(newArr);

// let arr=[1,2,3,4];
// let sum=arr.reduce((acc,x)=>acc+x,0);
// console.log(sum);

// let arr=["A","B","C"];
// let result= arr.reduceRight((acc,x)=>acc+x);
// console.log(result);



// let obj1={a:1};
// let obj2=Object.assign({},obj1);
// console.log(obj2);



// let obj1={a:1};
// let obj2={b:2};
// let merged=Object.assign({},obj1,obj2);
// console.log(merged);



let obj1={a:1};
// let obj2={b:2};
Object.assign(obj1,{a:2},{b:2});
console.log(obj1);
// answer={ a: 2, b: 2 }


//helloooo

