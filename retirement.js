// Retirement Conditions
// woman -> contribution >= 30 && contribution + age == 85 && gender == "F"
// man -> contribution >= 35 && contribution + age == 95 && gender == "M"

const retired = {   
    name: "Silvana",
    gender: "F",
    age: 70,
    contribution: 25
}

if ((retired.contribution >= 30 && (retired.contribution + retired.age) >= 85 && retired.gender == "F") 
|| (retired.contribution >= 35 && (retired.contribution + retired.age) >= 95 && retired.gender == "M")) {
    console.log(`${retired.name} can retire`)
} else {
    console.log(`${retired.name} still can't retire`)
}
