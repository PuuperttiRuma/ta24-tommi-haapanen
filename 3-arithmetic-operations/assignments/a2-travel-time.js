let distanceKm = 0;
let speedKmph = 0;

const travelTime = (distanceKm, speedKmph) => distanceKm / speedKmph;

const travelTimeInHoursandMinutes = (distanceKm, speedKmph) => {
  const totalTimeInMinutes = travelTime(distanceKm, speedKmph)*60;
  const inHours = Math.floor(totalTimeInMinutes / 60);
  const inMinutes = Math.round(totalTimeInMinutes % 60);
  return `${inHours} hours and ${inMinutes} minutes`;
};


console.log(`Traveling ${distanceKm = 240}km at ${speedKmph = 80} km/h will take ${travelTimeInHoursandMinutes(distanceKm, speedKmph)}.`);
console.log(`Traveling ${distanceKm = 240}km at ${speedKmph = 85} km/h will take ${travelTimeInHoursandMinutes(distanceKm, speedKmph)}.`);
console.log(`Traveling ${distanceKm = 240}km at ${speedKmph = 90} km/h will take ${travelTimeInHoursandMinutes(distanceKm, speedKmph)}.`);
console.log(`Traveling ${distanceKm = 240}km at ${speedKmph = 95} km/h will take ${travelTimeInHoursandMinutes(distanceKm, speedKmph)}.`);
console.log(`Traveling ${distanceKm = 240}km at ${speedKmph = 100} km/h will take ${travelTimeInHoursandMinutes(distanceKm, speedKmph)}.`);
console.log(`Traveling ${distanceKm = 240}km at ${speedKmph = 105} km/h will take ${travelTimeInHoursandMinutes(distanceKm, speedKmph)}.`);