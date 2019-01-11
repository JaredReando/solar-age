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
    expect(starObject.birthday).toEqual("07-29-1987");
  });

  it("assigns a life expectancy based off of gender", function() {
    expect(starObject.lifeExpectancy).toEqual(76);
  });

  it("returns age in Earth years", function() {
    expect(starObject.planetAge('earth')).toEqual('31.46');
  });

  it("returns age in Mercury years.", function() {
    expect(starObject.planetAge('mercury')).toEqual('130.61');
  });

  it("returns age in Venus years.", function() {
    expect(starObject.planetAge('venus')).toEqual('51.13');
  });

  it("returns age in Mars years.", function() {
    expect(starObject.planetAge('mars')).toEqual('16.72');
  });

  it("returns age in Jupiter years.", function() {
    expect(starObject.planetAge('jupiter')).toEqual('2.65');
  });

  it("returns age in Saturn years.", function() {
    expect(starObject.planetAge('saturn')).toEqual('1.07');
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

});
