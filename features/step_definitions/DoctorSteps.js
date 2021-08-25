const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const { cacador } = require("./../../app");
const { viajante } = require("./../../app")
const { doutor } = require("./../../app")
const { viajanteDoente } = require("./../../app")

// ---------- Given -------------
Given('um Doctor de nome {string}', function (string) {
     doutor.name = string
  });

// ---------- When ---------------
When('Doctor curar um Viajante', function () {
    doutor.heal(viajanteDoente)
  });
// ----------Then ----------------

Then('Viajante irá ficar saudável', function () {
    assert.strictEqual(viajanteDoente.isHealthy, true)
  });
  Then('o Viajante irá continuar saudável', function () {
    assert.strictEqual(viajanteDoente.isHealthy, true)
  });