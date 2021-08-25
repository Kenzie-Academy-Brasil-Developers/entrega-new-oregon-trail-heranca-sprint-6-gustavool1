class Traveler{
    constructor(name,isHealthy = true, food = 1){
        this._name = name
        this._food = Number(food)
        this._isHealthy = isHealthy
    }
    get name(){
        return this._name
    }
    set name(n){
        this._name = n
    }
    get food(){
        return this._food
    }
    set food(f){
        this._food = f
    }
    get isHealthy(){
        return this._isHealthy
    }
    set isHealthy(h){
        this._isHealthy = h
    }

    hunt(){
        this._food+=2
        
    }
    eat(){
        if(this._food>0){
            this._food-=1
            
        }else{
            this._isHealthy = false
            
        }
    }
}

module.exports = Traveler;