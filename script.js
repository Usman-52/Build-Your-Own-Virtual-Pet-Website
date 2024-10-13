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

    
}

getInfo();
