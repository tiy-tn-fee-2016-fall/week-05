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

const getInitials = (user) => {
  return user.initials;
};

test('it finds initials for users', (assert) => {
  const users = [
    { initials: 'clay', bpm: 90 },
    { initials: 'bob', bpm: 120 },
    { initials: 'ryan', bpm: 120 },
  ];

  // Same as the map function below
  // let names = [];
  //
  // users.forEach((user) => {
  //   names = [...names, getInitials(user)];
  // });

  const names = users.map(getInitials);

  assert.deepEqual(names, ['clay', 'bob', 'ryan']);
});

const isFirstOccurance = (current, index, arr) => {
  return arr.indexOf(current) === index;
};

test('it checks if first occurance', (assert) => {
  const people = ['ryan', 'ryan', 'bob'];

  assert.equal(isFirstOccurance('ryan', 0, people), true);
  assert.equal(isFirstOccurance('bob', 2, people), true);
  assert.equal(isFirstOccurance('ryan', 1, people), false);

  // const unique = people.filter(isFirstOccurance);

  let unique = [];

  people.forEach((item, index, arr) => {
    if (isFirstOccurance(item, index, arr)) {
      unique = [...unique, item];
    }
  });

  assert.deepEqual(unique, ['ryan', 'bob']);
});
