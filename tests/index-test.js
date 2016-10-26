/* eslint-env qunit */

test('it is working', (assert) => {
  assert.ok(true);
});

const greater = (a, b) => {
  if (a > b) {
    return a;
  }

  return b;
};


test('find greater of two numbers', (assert) => {
  assert.equal(greater(200, 120), 200);
  assert.equal(greater(5, -1), 5);
  assert.equal(greater(5, 10), 10);
});

const nums = [200, 500, 1000, 2, 5, -1, 20];

test('find the maximum', (assert) => {
  let max = nums[0];

  nums.forEach((num) => {
    max = greater(max, num);
  });

  assert.equal(max, 1000);
});
