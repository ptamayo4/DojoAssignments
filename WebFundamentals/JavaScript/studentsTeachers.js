var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

for(var people in students){
    console.log(students[people].first_name + " " + students[people].last_name);
}

//Part 2

console.log("----Part 2----");
var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

console.log("Students");
for(people in users.Students){
    console.log((parseInt(people) + 1) + " - " + users.Students[people].first_name.toUpperCase() + " " + users.Students[people].last_name.toUpperCase() + " - " + (users.Students[people].first_name.length + users.Students[people].last_name.length));
}
console.log("Instructors");
for(people in users.Instructors){
    console.log((parseInt(people) + 1) + " - " + users.Instructors[people].first_name.toUpperCase() + " " + users.Instructors[people].last_name.toUpperCase() + " - " + (users.Instructors[people].first_name.length + users.Instructors[people].last_name.length));
}
