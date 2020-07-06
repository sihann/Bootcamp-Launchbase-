const users = 
[
    { name: "Gabriel", technologies: ["HTML", "CSS"] },
    { name: "Guilherme", technologies: ["JavaScript", "CSS"] },
    { name: "Débora", technologies: ["HTML", "Node.js"] }
]

for (let user of users) {
    console.log(`${user.name} work with ${user.technologies.join(", ")}`)
}

function checkCssUser(user) {
    for (let technology of user.technologies) {
        if (technology == "CSS") return true
    }   return false
}

for (let i = 0; i < users.length; i++) {
    const userWorkCss = checkCssUser(users[i])

    if(userWorkCss) {
        console.log(`The user ${users[i].name} work with CSS`)
    }
}
