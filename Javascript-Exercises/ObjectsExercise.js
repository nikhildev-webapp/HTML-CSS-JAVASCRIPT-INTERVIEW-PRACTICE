//Objects Exercise
//Exercise 1-Create person object
let person = {
    name: 'Nikhil',
    age: 21,
    nationality: 'Indian',
    isEmployed: false
}
console.log(person)

//Exercise 2-acess the name and age from person object
console.log('Acessing the Person Name and Age from person object');
let UserName = person.name;
let UserAge = person.age;
console.log(`The Name of person is ${UserName}\nAge of the person is ${UserAge}`);

//Exercise 3-add the favourite movie to person object
console.log('Adding the Fav Movie in Person Object')
person.favMovie = 'Harry potter';
console.log(person);

//Exercise 4- delete the age from person object
console.log('Deleted the age from person object');
delete person.age;
console.log(person)

//Exercise5- loop through object
console.log('USer Object')
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}:${value}`)
}

//Task-Create a user profile system storename,email,skills,address
let UserProfile = {
    name: 'Nikhil',
    email: 'nikhilkholiya@gmail.com',
    skills: 'Frontend Developer',
    address:'Delhi'
}
console.log('User Profile:')
console.log(`UserName:${UserProfile.name}\nUserEmail:${UserProfile.email}\nSkill:${UserProfile.skills}\nAdderss:${UserProfile.address}`)