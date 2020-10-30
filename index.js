function User(name, age) {
    /*
      Under the hood, JavaScript creates a new object
      called `this` which delegates to the User's prototype
      on failed lookups. If a function is called with the
      new keyword, then it's this new object that interpreter
      created that the this keyword is referencing.
    */

    this.name = name
    this.age = age
}
const me = User('tyler',21);
