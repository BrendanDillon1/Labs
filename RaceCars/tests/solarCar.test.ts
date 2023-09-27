import { SolarCar } from "../src/solarCar";

test("SolarCar initializes correctly", () => {
  const car = new SolarCar("TeamSun");
  expect(car.team).toBe("TeamSun");
  expect(car.speed).toBe(0);
});

test("SolarCar accelerates correctly", () => {
  const car = new SolarCar("TeamSun");
  car.accelerate();
  expect(car.speed).toBe(1);
  car.accelerate();
  expect(car.speed).toBe(2);
});

test("SolarCar isFuelEmpty always returns false", () => {
  const car = new SolarCar("TeamSun");
  expect(car.isFuelEmpty()).toBeFalsy();
});
