import { MyClass } from './myclass';

describe('Test', () => {
    it('Async test', async () => {
        const my = new MyClass();
        await my.foo();
    });
});