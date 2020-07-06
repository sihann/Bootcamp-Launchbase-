// BMI 
// < 18,5      - Underweight 
// 18,5 - 24,9 - Normal weight
// 25,0 - 29,9 - Overweight
// > 30,0      - Obesity 

const bmi = {
    name: "Carlos",
    weight: 90,
    height: 1.88
}

let calculateBmi =  bmi.weight / (bmi.height ** 2)

if(calculateBmi < 18.5) {
    console.log(`${bmi.name}, you are underweight`)
} else if (calculateBmi >= 18.5 && calculateBmi < 25) {
    console.log(`${bmi.name}, you are at normal weight`)
} else if (calculateBmi >= 25 && calculateBmi < 30) {
    console.log(`${bmi.name}, you are overweight`)
} else {
    console.log(`${bmi.name}, you are obese`)
}
