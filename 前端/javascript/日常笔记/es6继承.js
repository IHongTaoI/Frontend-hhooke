class Animal {
    constructor(color){
        this.color = color;
    }
    see(){
        console.log(this.color)
    }
}

class Dog extends Animal {
    constructor(color){
        super(color);
    }
}

var aDog = new Dog("green");
aDog.see();