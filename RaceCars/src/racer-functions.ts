import { Racer } from "../src/racerInterface";

export const findRacersWithEmptyFuel = (racers: Racer[]): Racer[] => {
  return racers.filter((racer) => racer.isFuelEmpty());
};

export const findAverageSpeed = (racers: Racer[]): number => {
  if (racers.length === 0) return 0;
  const totalSpeed = racers.reduce((acc, racer) => acc + racer.speed, 0);
  return totalSpeed / racers.length;
};

export const getFasterRacer = (racerA: Racer, racerB: Racer): Racer | null => {
  if (racerA.speed > racerB.speed) return racerA;
  if (racerB.speed > racerA.speed) return racerB;
  return null;
};
