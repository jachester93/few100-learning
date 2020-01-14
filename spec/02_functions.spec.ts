describe('functions', () => {
    describe('declaring them', () => {
        it('has about three different ways to do it.', () => {
            // 1. Named function
            function add(a: number, b: number) {
                return a + b;
            }

            // 2. Anonymous functions
            const subtract = function (a: number, b: number) {
                return a - b;
            };

            const multiply = (a: number, b: number) => a * b;

            expect(add(2, 2)).toBe(4);
            expect(subtract(10, 2)).toBe(8);
            expect(multiply(3, 3)).toBe(9);
        });
        it('details of arrow functions', () => {
            const getMessage = () => 'Howdy!';

            expect(getMessage()).toBe('Howdy!');

            const logIt = (message: string) => {
                console.log(message);
                return 'Logged It';
            };

            expect(logIt('Pizza')).toBe('Logged It');
        });
    });

    describe('arguments to functions', () => {
        it('does not have overloading', () => {
            function formatName(first: string, last: string, mi?: string) {
                let firstPart = `${last}, ${first}`;
                if (mi) {
                    firstPart += ` ${mi}.`;
                }
                return firstPart;
            }

            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });

        it('default values for parameters', () => {
            function add(a: number = 15, b: number = 10) {
                return a + b;
            }

            expect(add(2, 2)).toBe(4);
            expect(add(12)).toBe(22);
            expect(add(undefined, 12)).toBe(27);
        });

        it('rest operator', () => {

            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
            }
            expect(add(2, 2)).toBe(4);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });
    });
    describe('higher order functions', () => {
        // A function that takes one or more arguments that are functions and/or return a function
        it('the basic syntax', () => {

            type StringModifier = (msg: string) => string;
            function logItOut(message: string, f: StringModifier) {
                console.log(`At ${new Date().toISOString()}: ${f(message)}`);
            }

            logItOut('Tacos!!!', (s: string) => s.toUpperCase());

            function decorate(x: string) {
                return `***${x}***`;
            }

            logItOut('Burrito', decorate);
        });

    });
});
