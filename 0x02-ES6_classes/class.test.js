// import EVCar from './100-evcar.js';
import Car from './10-car.js';

Car;
test('Car has the correct definition', () => {
  const bmw = new Car('BMW', 'Turbo', 'Mango');
  expect(bmw._brand).toBe('BMW');
  expect(bmw._color).toBe('Mango');
  expect(bmw._motor).toBe('Turbo');
  expect(bmw._range).toBe(undefined);
});

class TestCar extends Car {}

test('Car cloneCar check for species', () => {
  const opel = new TestCar();
  const newCar = opel.cloneCar();

  expect(newCar instanceof TestCar).toBe(true);
});

// EVCar

// test("EVCar has the correct definition", () => {
//     const tesla = new EVCar('Tesla', 'Electric', 'Red', '250');
//     expect(tesla._brand).toBe('Tesla');
//     expect(tesla._color).toBe('Red');
//     expect(tesla._motor).toBe('Electric');
//     expect(tesla._range).toBe('250');
// });
// test("Species is correctly implemented on EVCar", () => {
//     const tesla = new EVCar('Tesla', 'Electric', 'Red', '250');
//     const newCar = tesla.cloneCar();

//     expect(newCar instanceof EVCar).toBe(false);
//     expect(newCar instanceof Car).toBe(true);
// });
