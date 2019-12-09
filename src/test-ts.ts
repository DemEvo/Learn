
class User {
    name: string;
    age: number;
    sex: string;

    constructor(name: string, age: number, sex: string) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}

var tom: User = new User("Том", 29, 'men');

// var el = this.document.getElementById("content");
// el.innerHTML = "Имя: " + tom.name + " возраст: " + tom.age + " пол: " + tom.sex;

