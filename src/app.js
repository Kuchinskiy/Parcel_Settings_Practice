const sum = (a, b) => a + b;

sum(5, 7);

class Hero {
   constructor(name) {
      this._name = name;
   }

   get() {
      return this._name;
   }

   set(newName) {
      this._name = newName;
   }
}

const name = new Hero('Mango');