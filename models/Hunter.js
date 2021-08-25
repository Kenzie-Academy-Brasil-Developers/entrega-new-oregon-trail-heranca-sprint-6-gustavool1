const Traveler  = require("./Traveler");
class Hunter extends Traveler{
    constructor(name){
        super(name)
        this.food = 2
    }
    hunt(){
        this.food+=5
    }
    eat(){
        if(this.food=== 1){
            this.food-=1
            this.isHealthy = false
        }
        if(this.food>=2){
            this.food-=2
            
            
        }
        else{
            this.isHealthy = false
            
        }
    }
    giveFood(traveler, numOfFoodUnits){
        if(this.food>=numOfFoodUnits){
            traveler.food += numOfFoodUnits
            this.food-= numOfFoodUnits 
        }
    }
}

module.exports = Hunter