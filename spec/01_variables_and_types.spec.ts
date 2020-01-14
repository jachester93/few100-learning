describe('declaring variables', () => {
    it('an example', () => {
        const name = 'Bob';
        expect(name).toBe('Bob');
    });
    it('what happend above?', () => {
        const name = 'Carl';
    });
    it('declaring a variable with let', () => {
        let age: number | string;

        age = 50;

        age = 51;

        age = 'Old';

        let x: any;

        x = 'dog';
        x = 34;
        x = [];

        function add(a: any, b: any) {
            return a + b;
        }

    });
    it('initializing a variable defines (infers) the type', () => {
        let name = 'Bob';

        name = 'Steve';

        name = 'Kara';

        // name = 1138;
    });
    describe('a bit about strings', () => {
        it('can be delimted with single or double', () => {
            const name = 'Bob';

            // tslint:disable-next-line: quotemark
            expect(name).toBe("Bob");

            const story = 'She said "Hello! How is your day going?" on the way out the door.';

            // tslint:disable-next-line: quotemark
            const author = "Flannery O'Connor";
            const author2 = 'Flannery O\'Connor';
        });
        it('string literals - interpreted strings', () => {
            const name = `Bob`;
            expect(name).toBe('Bob');

            const story = `Chapter 1

            It was a dark and stormy night.

            the End`;

            const age = 27;

            const message = 'The name is ' + name + ' and the age is ' + age + '.';
            const message2 = `The name is ${name} and the age is ${age}.`;
            expect(message).toBe(message2);

            const newElement = `<div>
            <h2>${name} is ${age}</h2>
            </div>`;
        });
    });

    it('const - be careful', () => {
        const x = 12;

        // x = 14;

        const favoriteNumbers: Array<string | number> = [2, 4, 9, 20];

        favoriteNumbers[2] = 10;
        // favoriteNumbers[998] = 'tacos';

        console.log(favoriteNumbers);
        interface Movie {
            title: string;
            yearReleased?: number;
        }
        const movie: Movie = {
            title: 'The Rise of Skywalker',
            yearReleased: 2020
        };

        const otherMovie: Movie = {
            title: 'Jaws',
            yearReleased: 1977
        };
        movie.yearReleased = 2019;
    });

    describe('various types', () => {
        it('number literals', () => {
            const bigNumber = 123_456_789.23;

            const color = 0xFF;
            const permissions = 0o33;
            const binary = 0b0101010;
        });
        describe('array destructring and tuples', () => {
            it('array destructuring', () => {
                const friends = ['David', 'Sean', 'Amy'];

                // const first = friends[0];
                // const last = friends[2];
                const [first, , last] = friends;

                expect(first).toBe('David');
                expect(last).toBe('Amy');
            });

            it('using destructuring with rest', () => {
                const todos = ['Clean Garage', 'Fix tire', 'mop Floors'];

                const [next, ...others] = todos; // the rest operator.

                expect(next).toBe('Clean Garage');
                expect(others).toEqual(['Fix tire', 'mop Floors']);
            });
            it('tuples - basic example', () => {
                let stuff: [boolean, number];

                stuff = [true, 140];
            });

            it('type aliases', () => {

                type ThingWithLettersAndJunk = string;

                let name: ThingWithLettersAndJunk;

                type ArtistNameAndAge = [string, string, number];
                let warren: ArtistNameAndAge;

                warren = ['Warren', 'Ellis', 53];

            });

            it('an oop example', () => {
                // string formatName(string first, string, last)
                interface NameResult { fullName: string; length: number; }
                function formatName(first: string, last: string): NameResult {
                    const fullName = `${last}, ${first}`;
                    return {
                        fullName,
                        length: fullName.length
                    };
                }

                const answer = formatName('Han', 'Solo');
                expect(answer.fullName).toBe('Solo, Han');
                expect(answer.length).toBe(9);

                const { fullName, length: john } = formatName('Han', 'Solo');
                expect(fullName).toBe('Solo, Han');
                expect(john).toBe(9);
            });

            it('a tuple example', () => {
                type NameResult = [string, number];

                function formatName(first: string, last: string): NameResult {
                    const fn = `${last}, ${first}`;
                    return [fn, fn.length];
                }

                const [fullname, length] = formatName('Luke', 'Skywalker');
                expect(fullname).toBe('Skywalker, Luke');
                expect(length).toBe(15);
            });
        });
    });

    describe('enums and union constants', () => {
        enum SeatType { window, aisle, middle }

        function getSeatForticket(ticketNumber: number): SeatType {
            if (ticketNumber % 2 === 0) {
                return SeatType.window;
            } else {
                return SeatType.aisle;
            }
        }

        it('a truth table', () => {
            expect(true).toBeTruthy();
            expect(false).toBeFalsy();
            expect('').toBeFalsy();
            expect(' ').toBeTruthy();
            expect(undefined).toBeFalsy();
            expect(null).toBeFalsy();
            expect(0).toBeFalsy();
            expect(-1).toBeTruthy();
            // this means if you use one of these as a predicate in an if statement, you will get either true or false.
            // e.g.
            if ('tacos') {
                // it is true!
            }
        });

        it('using enums', () => {
            const getMySeat = getSeatForticket(108);
            let cost = 0;
            switch (getMySeat) {
                case SeatType.window: {
                    cost = 100;
                    break;
                }
                case SeatType.aisle: {
                    cost = 150;
                    break;
                }
                case SeatType.middle: {
                    cost = 75;
                    break;
                }
                default:
                    break;
            }
            expect(cost).toBe(100);
        });
    });
    it('with union constants', () => {
        type SeatType = 'aisle' | 'window' | 'middle';

        const mySeat: SeatType = 'window';
    });

    it('type assertions', () => {
        let x: any;
        x = 'Tacos';

        const y = x as string;

        expect(y.length).toBe(5);

        const z = x as string;

        expect((x as string).length).toBe(5);
    });
});
