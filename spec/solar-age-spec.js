import { Age } from './../src/age';


describe('Age', function() {
  let userBirthday;

  beforeEach(function() {
    userBirthday = new Age("07-29-1987");
  });

  it("returns age in Earth years", function() {
    expect(userBirthday.earthAge()).toEqual(31);
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
