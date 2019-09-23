/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.hobby = 'javascript';
user.premium = 'falce';
user.mood = 'happy';
const userKeys = Object.keys(user);
for (const userKey of userKeys) {
  console.log(userKey, ':', user[userKey]);
}
// const userEntries = Object.entries(user);
// for (const userEntry of userEntries) {
//   const key = userEntry[0];
//   const value = userEntry[1];
//   console.log(`${key}:${value}`);
// }
