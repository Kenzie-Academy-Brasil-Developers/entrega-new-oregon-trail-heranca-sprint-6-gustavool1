const Traveler  = require("./Traveler");
class Doctor extends Traveler{
    constructor(name){
        super(name)

    }
    heal(traveler){
        if(!traveler._isHealthy){
            traveler._isHealthy = true
        }
    }
}

module.exports = Doctor