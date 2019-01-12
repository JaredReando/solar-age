import { StarChild } from './../src/starchild.js';


describe('StarChild', function() {
  let today = new Date();
  let userBirthday = new Date();
  let userSex;
  let starObject;

  beforeEach(function() {
    userBirthday.setFullYear(today.getFullYear()-31);
    userSex = 'male';
    starObject = new StarChild(userBirthday, userSex);
  });

  it("creates a new StarChild object", function() {
    expect(starObject).toEqual(starObject);
  });

  it("assigns a life expectancy based off of gender", function() {
    expect(starObject.lifeExpectancy).toEqual(76);
  });

  it("returns age in Earth years", function() {
    expect(starObject.planetAge('earth')).toEqual('31.00');
  });

  it("returns age in Mercury years.", function() {
    expect(starObject.planetAge('mercury')).toEqual('128.71');
  });

  it("returns age in Venus years.", function() {
    expect(starObject.planetAge('venus')).toEqual('50.39');
  });

  it("returns age in Mars years.", function() {
    expect(starObject.planetAge('mars')).toEqual('16.48');
  });

  it("returns age in Jupiter years.", function() {
    expect(starObject.planetAge('jupiter')).toEqual('2.61');
  });

  it("returns age in Saturn years.", function() {
    expect(starObject.planetAge('saturn')).toEqual('1.05');
  });

  it("returns age in Uranus years.", function() {
    expect(starObject.planetAge('uranus')).toEqual('0.37');
  });

  it("returns age in Neptune years.", function() {
    expect(starObject.planetAge('neptune')).toEqual('0.19');
  });

  it("returns age in Pluto years.", function() {
    expect(starObject.planetAge('pluto')).toEqual('0.13');
  });

  it("calculates years left to live relative to a planet's year length", function() {
    expect(starObject.tickTock('earth')).toEqual()
  }

});
