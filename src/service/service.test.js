import { getRequest } from '.';

jest.useFakeTimers()

describe('getRequest', () => {
    it('should render passed columns', () => {
        expect.assertions(1);

        const callback = () => expect(true).toBeTruthy();

        getRequest(callback);
        jest.runAllTimers(); 
    });
});
