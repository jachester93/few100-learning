import { isEven, identity, IHaveAMessage } from './utils';

describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('checking the membership of an array', () => {
        // LINQ this is All
        const allEvens = numbers.every(isEven);
        expect(allEvens).toBe(false);

        const someEven = numbers.some(isEven);
        expect(someEven).toBe(true);
    });

    it('visiting every member of an array', () => {
        let total = 0;
        numbers.forEach(n => total += n);
        expect(total).toBe(45);
    });
    describe('array methods that create new arrays', () => {
        it('map', () => {
            function doubleIt(n: number) {
                return n + n;
            }
            // LINQ: select
            const doubled = numbers.map(doubleIt);
            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            const dup = numbers.map(identity);
        });

        it('has a filter', () => {
            const evens = numbers.filter(isEven);

            expect(evens).toEqual([2, 4, 6, 8]);
        });

        it('using reduce', () => {
            let total = numbers.reduce((s, n) => s + n);
            expect(total).toBe(45);
            total = numbers.reduce((s, n) => s + n, 100);
            expect(total).toBe(145);
        });
    });
    describe('an example', () => {
        it('the example', () => {
            // given a cart
            interface CartItem {
                description: string;
                qty: number;
                price: number;
            }

            const cart: CartItem[] = [
                { description: 'Eggs', qty: 3, price: 2.37 },
                { description: 'Bread', qty: 2, price: 3.50 },
                { description: 'Beer', qty: 6, price: 7.50 }
            ];

            // I want to know the total qty, and total price.

            interface ShippingInfo {
                totalQty: number;
                totalPrice: number;
            }

            const starter: ShippingInfo = {
                totalQty: 0,
                totalPrice: 0
            };

            const result = cart.reduce((s: ShippingInfo, n: CartItem) => {
                return {
                    totalQty: s.totalQty += n.qty,
                    totalPrice: s.totalPrice += n.price
                };
            }, starter);

            expect(result.totalPrice).toBeCloseTo(13.37);
            expect(result.totalQty).toBe(11);
        });
    });
});

describe('structural typing', () => {
    it('an example', () => {
        function logIt(thingy: IHaveAMessage): void {
            console.log(thingy.message + ' from: ' + thingy.from);
        }

        const call = {
            from: 'Mom',
            message: 'Call me.',
            time: '4:00 PM'
        };

        logIt(call);

        // logIt({ from: 'Joe', message: 'Tacos are ready', time: 'Noon'})
    });
});

describe('two loops you might use but probably not', () => {
    it('for in loop', () => {
        // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        // let total = 0;
        // for (const num in numbers) {
        //     total += num;
        // }

        // expect(total).toBe(45);
        // Enumerate the Properties of an Object
        const book = {
            title: 'Hyperobjects',
            author: 'Morton'
        };

        for (const prop in book) {
            console.log(`Books's ${prop} is ${book[prop]}`);
        }
    });

    it('for of loop', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let total = 0;
        for (const n of numbers) {
            total += n;
        }

        expect(total).toBe(45);
    });
});
