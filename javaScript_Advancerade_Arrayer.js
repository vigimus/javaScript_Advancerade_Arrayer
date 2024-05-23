//Advancerade arrayer:er i JavaScript

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2);
}); 

console.log('forEach', double);

//Map, Filter, Reduce

//Är utmärkt för loopar + arrayer
//Maparrayer har mindre side effects så man kan hitta på många fler dumheter
//och onödig kod, man måste dessutom ge return:ed ett värde den kommer ge oss undefined annars
//Exempel på en "pure function"

//Har man bara en parameter så kan man ta bort brackets 
//(num) => {
//	return num * 2;
//});

//Blir istället

//(num => num * 2);
//	
//)

const mapArray = array.map((num) => {
	return num * 2;
});

console.log('mapArray', mapArray);


//Filter
//Läger bara saker i filterArrayen om den klarar filtret med är talet x i arrayen ovanför mera än 5
const filterArray = array.filter(num => num > 5);

console.log('Filter', filterArray);

//Reduce
//Accumulator sparar värdet innan det ändras och gör ++ efter varje gång
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num 
}, 5);

console.log('Reduce', reduceArray);


