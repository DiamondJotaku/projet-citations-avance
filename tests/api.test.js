const getCitation = require('../src/api');

test('L\'API retourne une citation valide (string > 10)', async () => {
  const result = await getCitation();
  expect(typeof result).toBe('string');
  expect(result.length).toBeGreaterThan(10);
});
