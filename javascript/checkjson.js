// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let likes = [];
  for (let i = 0; i < contacts.length; i++){
    if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];     
        }
      }
    const arr = []; 
    for (let j = 0; j < contacts.length; j++ ){
      arr.push(contacts[j].firstName)
    }
    if (name != arr){
      return "No such name";
    }
    else {
      return "No such property";
    }
    
  
  
    
    
  // Only change code above this line
}

console.log(lookUpProfile("Akira", "arrtist"));
