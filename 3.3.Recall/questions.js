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
        return array.sort(
        (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
    );//A RETRAVAILLER

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
   let short = array.reduce((a, b) => {
        return a.length <= b.length ? a : b;
    })
    return short;
}

//return array.reduce((a, b) => a.length <= b.length ? a : b)
//tester avec reduce , filtre, sort (OU) :

/* let arr = [];
    let string = 'ttttttttttttttttttttttttttttttttttttttttttttttttttt';
    for (let i = 0; i < array.length; i++) {
        if(string.length > array[i].length){

        }
    }*/

let longestWord = (array) => {
    return array.reduce((a, b) => a.length >= b.length ? a : b);
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
    
    let arr =[];
    for (let i = 0; i < array.length; i+=2) {
        arr.push([array[i], array[i+1]])
    }
    let obj = Object.fromEntries(arr);
    return obj
    
    /*let newArr = [];
    array.forEach(obj => {
        for(let i=0; array.length; i++);
    }); obj[i] = newArr[i];
    return newArr;*/
}

let getAllLetters = (array) => {
    //It transforms array in string
    let string = array.join("");
    console.log(string);
    //It transforms the string in an array with letters
    let arrayOfLetters = string.split("").map(x => x).sort();
    console.log(arrayOfLetters);
    //It deletes doubles of letters
    let deleteDouble = [...new Set(arrayOfLetters)];
    console.log(deleteDouble)
    return deleteDouble;

    //tableau de mots , prendre tout ces mots en string
    //split le string
    //mettre en tableau
    //trier le tablaeu
    //retier element repeter
    
    /*let newArr = [];
    array.forEach( words => {
        array.split('').push
    });
    return newArr;*/
}

let swapKeysAndValues = (object) => {
    //permuter des valeurs dans un tableau + parcourir les elements d'un object avec le forEach
    return ;
}

let sumKeysAndValues = (object) => {
    //calculer somme 
    //recuper val d'un obj
    //puis les additionnier
    //2eme variable pour recuperer les keys des objects
    //convertir en entier puis faire la somme
    return;
}

let removeCapitals = (string) => {
    let newString = string.replace(/[A-Z]/g, '');
    return newString

    /*string = string.slice(1);
    return string; = ATTENTION TESTER AVEC Le SLICE*/
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let europeanDate = date.toLocaleString("fr-Fr", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
    })
    
    return europeanDate;

    /*let event = new Date(date.UTC('2015-03-04');
    return (event.toLocaleString('fr-FR'));*/

}

let getDomainName = (string) => {
    return 'Write your method here';
    /*Let a = "manger"

    afficher juste le "ger" de manger 

    a.replace("man" , "")

    1) premier parametre la partie a remplacer
    2) ce que je vais mettre a la placer de man*/
    
}//regex & replace

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    let specialCharact = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialCharact.test(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
     
}

let factorial = (number) => {
    return (number != 1) ? number * factorial(number - 1) : 1;
    
    //return number * factorial(number - 1);;
    /*let f = 1;
    for (let i = 1; i <= number; i++) {
        f = f * i
    }
    return f;*/
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5 / 9);

    //let celsiusToFahrenheit = number => number * 9/5 + 32;
    //let celsius = number => (number - 32) * 5/9;
}

let letterPosition = (array) => {
    return array.map((e) => e.toUpperCase().charCodeAt(0) - 64);
}
