// // deel 1

const numberHigherThen100 = function (number) {

    if (number > 100) {
        return "True";
    };
    return "False";
};
const result = numberHigherThen100(101);
console.log(result);

// je returned dus naar waar de functie gecalled word. dit kan overal zijn!
// // dit is een function die wat doet
// // deel 2

const bouncer = function (totalOfGuests, age) {

    if (totalOfGuests <= 100 && age >= 18)
        return "come in";
    ;
    if (totalOfGuests > 100 && age >= 18)
        return "it's to busy now, come back later";

    return "this club is for adults";
};
const verdict = bouncer(101, 17);
console.log(verdict);

// deel 3

const calculateAverage = function (number1, number2, number3, number4, number5) {
    const average = (number1 + number2 + number3 + number4 + number5) / 5;

    return average;
}
const result3 = calculateAverage(2, 2, 2, 2, 2);
console.log(result3);


// const array = const calculate = function(array){

// }



