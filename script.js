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
    
    
}

getInfo();
