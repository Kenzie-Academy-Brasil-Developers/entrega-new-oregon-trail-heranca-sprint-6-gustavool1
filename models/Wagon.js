class Wagon{
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []
    }
    get _capacity(){
        return this.capacity
    }
    set _capacity(c){
        this.capacity = c
    }
    get _passengers(){
        return this.passengers
    }
    set _passengers(p){
        this._passengers.push(p)
    }
    getAvailableSeatCount(){
        let availabeSeat = this._capacity- this._passengers.length
        return availabeSeat
    }
    join(person){
        let seatsAvailable = this.getAvailableSeatCount()
        if( seatsAvailable>0){
            this._passengers = person
            
        }   
        
    }
    shouldQuarantine(){
        let passengersArr = this._passengers
        for(let i=0; i<passengersArr.length;i++){
            if(!passengersArr[i]._isHealthy || passengersArr[i]._isHealthy === 'false'){
               
                return true
            }
        }
       
        return false
    }
    totalFood(){
        let passangersArr = this._passengers
        let totalFood = 0;
        for(let i=0; i<passangersArr.length;i++){
            totalFood += passangersArr[i]._food
        }
        return totalFood
    }
}

module.exports = Wagon;