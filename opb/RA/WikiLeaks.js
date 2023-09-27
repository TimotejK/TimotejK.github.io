relations = [
    {
        name: 'privacy', header: ['PID', 'Privacy'], types: ['number', 'string'], shortName: 'p',
        data: [
            [1, "Unclassified"],
            [2, "Confidential"],
            [3, "Secret"]
        ]
    },
    {
        name: 'embassy', header: ['EID', 'Embassy'], types: ['number', 'string'], shortName: 'e',
        data: [
            [1, "Buenos Aires"],
            [2, "Teheran"],
            [3, "Ljubljana"]
        ]
    },
    {
        name: 'reference', header: ['CID', 'RID'], types: ['number', 'number'], shortName: 'r',
        data: [
            [1, 2],
            [2, 4],
            [3, 5],
            [3, 4],
            [8, 9],
            [10, 9],
            [4, 9],
            [6, 9]
        ]
    },
    {
        name: 'cable', header: ['CID', 'Date', 'Content', 'PID', 'EID'], types: ['number', 'date', 'string', 'number', 'number'], shortName: 'c',
        data: [
            [1, "1966-12-28", "Extended national jurisdictions over...", 1, 1],
            [2, "1972-02-25", "General Azimi, minister of war, asks...", 1, 2],
            [3, "1972-03-09", "Trials/executions of anti-government...", 2, 3],
            [4, "2001-01-02", "he also made important contributions...", 3, 1],
            [5, "2001-01-02", "and originality have made Einstein s...", 2, 2],
            [6, "2001-01-02", "that if the special theory is correc...", 3, 3],
            [7, "2001-01-02", "For much of the last phase of his ac...", 1, 1],
            [8, "2001-01-02", "he enrolled in the mathematics and p...", 2, 2],
            [9, "2001-01-02", "Horrified by the Nazi war of extermi...", 3, 3],
            [10, "2001-01-02", "Einstein supported the Allies but ge...", 1, 2]
        ]
    }
]