relations = [
    {
        name: 'oseba', header: ['ID', 'Ime', 'Rojen', 'SID'], types: ['number', 'string', 'date', 'number'], shortName: 'o',
        data: [
            [1, "Jill", "1990-03-09", 1],
            [2, "Jack", "1950-06-02", 1],
            [3, "Joe", "1989-08-01", 4],
            [4, "Jenn", "2001-01-07", 2],
            [5, "Jeff", null, 2],
            [6, "Edna", "2011-04-23", 3],
            [7, "North", null, 3]
        ]
    },
    {
        name: 'facebook', header: ['OID', 'PID'], types: ['number', 'number'], shortName: 'f',
        data: [
            [1, 2],
            [2, 1],
            [2, 3],
            [3, 2],
            [2, 4],
            [4, 2],
            [3, 4],
            [4, 3]
        ]
    },
    {
        name: 'twitter', header: ['OID', 'SID'], types: ['number', 'number'], shortName: 't',
        data: [
            [1, 2],
            [3, 2],
            [4, 3],
            [2, 4]
        ]
    },
    {
        name: 'stan', header: ['SID', 'Stan'], types: ['number', 'string'], shortName: 's',
        data: [
            [1, "Razmerje"],
            [2, "Zakonski"],
            [3, "Samski"],
            [4, "Zapleteno"]
        ]
    }
]