import { StarChild } from './../src/starchild.js';


describe('StarChild', function() {
  let userBirthday;
  let userSex;
  let starObject;

  beforeEach(function() {
    userBirthday = "07-29-1987";
    userSex = 'male';
    starObject = new StarChild(userBirthday, userSex);
  });

  it("creates a new StarChild object", function() {
    expect(starObject.birthday).toEqual("07-29-1987");
  });

  it("returns age in Earth years", function() {
    expect(earthAge(userBirthday)).toEqual(31);
  });

  it("returns age in Mercury years.", function() {
    expect(userBirthday.mercuryAge()).toEqual(0);
  });

  it("returns age in Venus years.", function() {
    expect(userBirthday.venusAge()).toEqual(0);
  });

  it("returns age in Mars years.", function() {
    expect(userBirthday.marsAge()).toEqual(0);
  });

  it("returns age in Jupiter years.", function() {
    expect(userBirthday.jupiterAge()).toEqual(0);
  });

  it("returns age in Saturn years.", function() {
    expect(userBirthday.saturnAge()).toEqual(0);
  });

  it("returns age in Uranus years.", function() {
    expect(userBirthday.uranusAge()).toEqual(0);
  });

  it("returns age in Neptune years.", function() {
    expect(userBirthday.neptuneAge()).toEqual(0);
  });

  it("returns age in Pluto years.", function() {
    expect(userBirthday.plutoAge()).toEqual(0);
  });

});
