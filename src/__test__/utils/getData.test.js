import getData from '../../utils/getData';

//we use a global fetch configuration
/*basically any time we call the api in the test enviroment
  there is a mock response (see utils)
  this way we don't have to worry to call the API or to write a response
*/
describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Get Data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com')
      .then(((res) => {
        expect(res.data).toEqual('12345');
      }));
    //checking that the api call is actually happening
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
