const data = 
{   name: "Gabriel", 
    age: 32,
    technologies: [ 
        { name:"C++", expertise: "Desktop"},
        { name:"Pyrhon", expertise: "Data Science"},
        { name: "JavaScript", expertise: "Web/Mobile"}
    ]
}

console.log(`User ${data.name} has ${data.age} years and uses ${data.technologies[0].name} technology with expertise in ${data.technologies[0].expertise}`)