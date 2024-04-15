let sentence: string = "i am learning typescript. ";

//                           <<<<<<<<<<<<<<<<<<<<<<<<<< for lowercase >>>>>>>>>>>>>>>>>>>>>>>
// In TypeScript, lowercase refers to characters that are not capitalized.


let lowercase:string = sentence.toLocaleLowerCase();
console.log(lowercase);                         // i am learning typescript.   



//                            <<<<<<<<<<<<<<<<<<<<<<< for upper case >>>>>>>>>>>>>>>>>>>>>>
// In TypeScript, uppercase refers to characters that are capitalized.

let uppercase:string = sentence.toLocaleUpperCase();
console.log(uppercase);                 // I AM LEARNING TYPESCRIPT.


//                             <<<<<<<<<<<<<<<<<<<<<<  split >>>>>>>>>>>>>>>>>>>>>>

// In TypeScript, split divides a string into substrings based on a specified separator, returning an array

// 1.
let words = sentence.split(" ");
console.log(words);                   // [ 'i', 'am', 'learning', 'typescript.', '' ]


// 2.
let cut :string = "hello my name is amna ";

let rub = cut.split(" ");
console.log(rub);                  // [ 'hello', 'my', 'name', 'is', 'amna', '' ]





//                             <<<<<<<<<<<<<<<<<<<<<<< Title case >>>>>>>>>>>>>>>>>>>>>>>


// In TypeScript, title case refers to a string where the first letter of each word is capitalized.

let  titleCase:string ="";

for(let i = 0; i<words.length; i++) {
   titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1) .toLowerCase() + " "
}

console.log(titleCase);                 // I Am Learning Typescript.







//                              <<<<<<<<<<<<<<<<<<<<<< slice >>>>>>>>>>>>>>>>>>>>


// In TypeScript, slice extracts a portion of an array or string without altering the original, returning the selected elements or 
// characters.

let cut1 :string = "hello my name is amna ";
let rub1 = cut1.slice(5,12);
console.log(rub1);                 // my nam




//                               <<<<<<<<<<<<<<<<<<<<<<< chartAt >>>>>>>>>>>>>>>>>>>>>


// In TypeScript, charAt returns the character at a specified index in a string.

let cut2 :string = "hello my name is amna ";

let rub2 = cut2.charAt(2);
console.log(rub2);             // l

//                               <<<<<<<<<<<<<<<<<<<<<<SWITCH CASE>>>>>>>>>>>>>>>>>>>>
// 1.
let waether = "autom";
switch (waether) {
    case "rain":
        console.log("Take umbrella")
        break;

    case "sunny":
        console.log("Go to the beach")
        
        break;
        case "cloudy":
            console.log("Go to the park")
            break;

    default:
        console.log("Take rest at home")
}


// 2.
let score = Math.floor(Math.random() * 100) + 1;
switch (true) {
    case score >= 80 && score <=100:
    
    console.log("A grade")
        
        break;

    case score>=70 && score<80:
    
        console.log("B grade")
        break;

    case score>=50 && score<70:
    
    console.log("C grade")
        break;
    
    case score>= 35 && score<50:

        console.log("D grade")
        break;

    case score >=30 && score<35:
    
        console.log("E grade")
        break;

    case score<30:
        console.log("F grade")
        break;
    default:
        console.log("Fail")
    
}


// 3. Write a program that takes an animal name as input and prints the sound that animal makes

let animals = ["cat","dog","cow","lion"]
let randomAnimal = Math.floor(Math.random()*animals.length);
let animal = animals[randomAnimal]
switch (animal) {
    case "cat":
    console.log("Cat:  meow");
        break;
case "dog":
console.log("Dog: bark");
break;

case "cow": 
console.log("Cow: moo");
break;

case "lion":
    console.log("Lion: roar")
break;
    default:
        console.log("Invalid animal name")

}



//4. Write a program that simulates a traffic light. It should take a color as input (Red, Yellow, Green) and print the corresponding
//  action (Stop, Wait, Go).


let trafficLight = ["red","yellow","green"];
let choose = Math.floor(Math.random()*trafficLight.length);
let trafficLights =trafficLight[choose];
switch (trafficLights) {
    case "red":
    console.log("Stop");
break;

case "yellow":
console.log("Wait");
break;

case "green":
console.log("Go");
break;

    default:
        ("Drive save")
}






//5. Write a simple calculator program that takes two numbers and an operator (+, -, *, /) as input and performs the corresponding operation.


let num1 = 10;
let num2 = 5;
let operator =  "+"
let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;

    default:
        break;
}




// 6.
let fruits = ["apple", "banana", "orange"];
let index = 1; // You can change this index to select a different fruit from the array
let fruit = fruits[index];

switch (fruit) {
    case "apple":
        console.log("Selected fruit is an apple.");
        break;

    case "banana":
        console.log("Selected fruit is a banana.");
        break;

    case "orange":
        console.log("Selected fruit is an orange.");
        break;

    default:
        console.log("Unknown fruit.");
}



















































