import { applyPercentage, applyMinus, applySlice, returnLowestNumber, SelectBestOffer } from './offerUtils';

test('apply 10% on 200€ expect to be equal to 180', () => {
  expect(applyPercentage(200, 10)).toBe(180);
});

test('apply minus 10 on 100€ to be 90', () => {
  expect(applyMinus(100, 10)).toBe(90)
})

test('apply reduction of 10 every slice of 100€ on a total amount of 240€ to be 220', () => {
  expect(applySlice(240, 100, 10)).toBe(220)
})
test('apply reduction of 12 every slice of 100€ on a total amount of 65 to be 220', () => {
  expect(applySlice(65, 100, 12)).toBe(65)
})

test('return the lowest number from an array ', () => {
  const prices = [123, 32, 984, 11]
  expect(returnLowestNumber(prices)).toBe(11)
})

test('Select best offer for a price of 65€', () => {
  const offers = {
    "offers": [
      { "type": "percentage", "value": 5 },
      { "type": "minus", "value": 15 },
      { "type": "slice", "sliceValue": 100, "value": 12 }
    ]
  }
  expect(SelectBestOffer(65, offers)).toBe(50);
})

test('Select best offer for a price when no slice offer', () => {
  const offers = {
    "offers": [
      { "type": "percentage", "value": 5 },
      { "type": "minus", "value": 15 },
    ]
  }
  expect(SelectBestOffer(65, offers)).toBe(50);
})
test('Select best offer for a price when only percentage offer', () => {
  const offers = {
    "offers": [
      { "type": "percentage", "value": 10 },
    ]
  }
  expect(SelectBestOffer(100, offers)).toBe(90);
})
