var yourPet = {
    name: "",
    type: "",
    age: 0,
    happiness: 0,
    hunger: 0,
    feed: function() {
        if (this.hunger > 100) this.hunger = 100;
        this.hunger -= 20;
        if (this.hunger < 0) this.hunger = 0;
        alert(`${this.name} is fed, and the hunger level is ${this.hunger}`);
    },

    play: function() {
        if(this.hunger < 100) {
            this.happiness += 20;
            if(this.happiness > 100) this.happiness = 100; 
            alert(`${this.name} played, now its happiness level is ${this.happiness}`);
        } else {
            alert(`${this.name} is too hungry to play!`);
        }
    },
    
    agePet: function() {
        this.age += 1;
        this.happiness -= 5;
        this.hunger += 10;
        if(this.happiness < 0) this.happiness = 0;
        if(this.hunger > 100) this.hunger = 100;

        alert(`${this.name} is now ${this.age} years old. Happiness: ${this.happiness}, Hunger: ${this.hunger}`);
    }
}


function getInfo() {
    yourPet.name = prompt("Please tell me, what's your pet's name?");
    yourPet.type = prompt(`Please tell me, what's the type of ${yourPet.name}? (cat, dog, etc.)`);
    yourPet.age = +prompt(`Please tell me, what's the age of ${yourPet.name}?`);
    yourPet.happiness = +prompt(`Please tell me, what's the happiness level of ${yourPet.name}? (0-100)`);
    yourPet.hunger = +prompt(`Please tell me, what's the hunger level of ${yourPet.name}? (0-100)`);

    let letsPlayGame = true;
    while (letsPlayGame) {
        let play = +prompt(`What would you like to do with ${yourPet.name}? Choose one of the options:
            1) Feed    2) Play
            3) Age     4) Quit`);
    
        if(play === 1) {
            yourPet.feed();
        }
        else if(play === 2) {
            yourPet.play();
        }
        else if(play === 3) {
            yourPet.agePet();
        }
        else if (play === 4) {
            alert("Thank you so much for participating!");
            letsPlayGame = false;
        }
        else {
            alert("⛔ Incorrect option! Kindly choose again.");
        }
    }
}

getInfo();
