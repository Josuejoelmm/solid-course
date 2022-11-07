(() => {

  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  const newPerson = new Person('Josue', 'M', new Date('1989-06-09'));

  console.log({ newPerson });


})()