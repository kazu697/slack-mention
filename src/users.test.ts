import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch data', () => {
  const users = [{name: 'Bob'}];
  const resp = { data: users };
  // axios.get.mockResolvedValue(resp);
  axios.get.mockImplementation(() => Promise.resolve(resp));

  return Users.all().then(data => expect(data).toEqual(users));
})


