let selectElementsStartingWithA = (array) => {
    let newArr =[];
    array.forEach(fruit => {
        if(fruit.startsWith("a")) {
            newArr.push(fruit)
        }
    });
   return newArr;
}

let selectElementsStartingWithVowel = (array) => {
    
   let vowel = array.filter(str => /^[aeiou]/i.test(str));
    return vowel;
}

let removeNullElements = (array) => {
    let filtered = array.filter(el => el != null);
    return filtered;
}

let removeNullAndFalseElements = (array) => {
    return array.filter(e => e === 0 || e);
}

let reverseWordsInArray = (array) => {
    let newArr = [];
    array.forEach(animals => {
        newArr.push(animals.split('').reverse().join(''))
    });
    
    return newArr;
}

let everyPossiblePair = (array) => {
    return 'Write your method here';
}

let allElementsExceptFirstThree = (array) => {
    array.splice(0,3);
    return array;

    /*array.shift();
    array.shift();
    array.shift();
    return array;*/
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;//pas de besoin de creer une nouvel array car l'array deja existant
}

let sortByLastLetter = (array) => {
   /* return array.sort(
        (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
    );*/
}

let getFirstHalf = (string) => {
    return string.substr(0, Math.round(string.length / 2));
}

let makeNegative = (number) => {
    return -Math.abs(number);// - = le signe moins (-)
}

let numberOfPalindromes = (array) => {
    let countPalindromo = 0;
    array.forEach(names => {
       if(names.split('').reverse().join('') == names)
    {
        countPalindromo += 1;
    }
}); 
       return countPalindromo;
}

let shortestWord = (array) => {
    return ;
}

let longestWord = (array) => {
    return ;
}

let sumNumbers = (array) => {
   array.reduce((a,b) =>  a + b);//reduire a 2 le nombre d'elements dans le tableau pour pouvoir faire la somme
   return array;
}
/******************************************** */
let repeatElements = (array) => {
    array.forEach(alphabet => {
        array.push(alphabet)
    });
    return array;
}

let stringToNumber = (string) => {
    return parseInt('3');
}

let calculateAverage = (array) => {
    array.reduce((a,b) => a + b)/array.length;//lenght pour compter le nombre d'elements dans un tableau (ATTENTION le dot length)
    return array;
}

let getElementsUntilGreaterThanFive = (array) => {
    let newArr = [];
    for(let i = 0; i<= 5; i++) {
        newArr.push(array[i]);
    };
    return newArr;

    /*newArr = array.splice(0,6);
    console.log(newArr);
    return newArr;*/
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    string = string.slice(1);
    return string;
}

let roundUp = (number) => {
    Math.round()
    return Math.round(number);
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    
    return Math.sqrt(9);
    return Math.sqrt(9)
    
}

let factorial = (number) => {
    if (number < 0) return -1
    if (number === 0) return 1;
    return number * factorial(number - 1);;
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    let Fahrenheit = Fahrenheit => (Fahrenheit - 32) * 5/9;
    return Fahrenheit;
}

let letterPosition = (array) => {
    return 'Write your method here';
}
