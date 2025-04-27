const personDescription1 = (name: String, city: String, age: number) =>
    `${name} lives in ${city}, his age is ${age}. In 10 years he'll be ${age+10}`;
  
  console.log(personDescription1("Kostas", "Athens", 20));