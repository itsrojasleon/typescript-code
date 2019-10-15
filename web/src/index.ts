import { User } from './models/User';

const user = new User({ name: 'stephen', age: 20 });

user.on('change', () => {
  console.log('User was changed');
});
