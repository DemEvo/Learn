var el = this.document.getElementById("content");

class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

var tom: User = new User("Том", 29);
el.innerHTML = "Имя: " + tom.name + " возраст: " + tom.age;
