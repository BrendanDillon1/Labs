import {
  findAverageSpeed,
  getFasterRacer,
  findRacersWithEmptyFuel,
} from "../src/racer-functions";
import { GasCar } from "../src/gasCar";
import { SolarCar } from "../src/solarCar";

test("findRacersWithEmptyFuel returns GasCars with empty fuel", () => {
  const cars = [
    new GasCar("Team1", 1),
    new GasCar("Team2", 0),
    new SolarCar("TeamSun"),
  ];
  cars[0].accelerate();
  const emptyFuelCars = findRacersWithEmptyFuel(cars);
  expect(emptyFuelCars.length).toBe(2);
});

test("findAverageSpeed calculates average speed correctly", () => {
  const cars = [new GasCar("Team1"), new SolarCar("TeamSun")];
  cars[0].accelerate();
  cars[1].accelerate();
  expect(findAverageSpeed(cars)).toBe(1.5);
});

test("getFasterRacer returns the faster racer", () => {
  const car1 = new GasCar("TeamGas");
  const car2 = new SolarCar("TeamSun");
  car1.accelerate();
  expect(getFasterRacer(car1, car2)).toBe(car1);
});
