const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const { cacador } = require("./../../app");
const { viajante } = require("./../../app")

/*-------GIVEN---------------*/ 
Given('um viajante de nome {string}', function (string) {
    viajante._name = string
  });
Given('ele sempre comeca a viagem com {int} refeicao', function (int) {
    assert.strictEqual(viajante._food, int)
});
Given('o viajante sempre comeca a viagem saudavel', function () {
    assert.strictEqual(viajante._isHealthy, true)
  });
Given('um Hunter de nome {string}', function (string) {
    cacador.name = string
  });
Given('ele sempre começa a viagem com {int} refeiçoes', function (int) {
    cacador.food = int
});
Given('ele sempre começa a viagem saúdavel.', function () {
    cacador._isHealthy = true
});



/*--------WHEN---------------*/
When('o Hunter sair pra caçar {int} vezes', function (int) {
    for(let i=0; i<int; i++){
        cacador.hunt()
    }
});

When('um Hunter come {int} vezes', function (int) {
        for(let i=0; i<int;i++){
            cacador.eat()
        }
    });
When('o Hunter comer {int} vezes', function (int) {

    for(let i=0; i<int;i++){
    cacador.eat()
    }
});
When('um Hunter sai para caçar {int} vez', function (int) {
        for(let i=0; i<int; i++){
            cacador.hunt()
        }
    });

When('come {int} vezes', function (int) {
    for(let i=0; i<int;i++){
        cacador.eat()
        }
});
When('um Hunter doar {int} refeições para um viajante', function (int) {
    cacador.giveFood(viajante, int)
});
/*-------THEN----------------*/ 
Then('sua quantidade de refeições deve ser {int}', function (int) {
    
    assert.strictEqual(cacador.food, int)    
});
Then('sua quantidade de refeições deve ser igual a {int}', function (int) {
    assert.strictEqual(cacador.food, int)    
});
  
Then('o Hunter não ficará doente', function () {
    cacador._isHealthy = true
});
Then('ele irá continuar saúdavel', function () {
    assert.strictEqual(cacador.isHealthy, true )
});
Then('o Hunter ficará doente', function () {
    cacador._isHealthy = false
});
Then('a quantidade de refeiçao deve ser igual a {int}', function (int) {
    assert.strictEqual(cacador._food, int)    
});

Then('ele Hunter terá {int} refeições', function (int) {
    assert.strictEqual(cacador._food, int)
});
Then('o viajante terá {int} refeições', function (int) {
    assert.strictEqual(viajante._food, int)    
});