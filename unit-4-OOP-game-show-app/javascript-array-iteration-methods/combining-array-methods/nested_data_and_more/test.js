/*
const users = [{
        name: 'Samir',
        age: 27,
        favoriteBooks: [{
                title: 'The Iliad'
            },
            {
                title: 'The Brothers Karamazov'
            }
        ]
    },
    {
        name: 'Angela',
        age: 33,
        favoriteBooks: [{
                title: 'Tenth of December'
            },
            {
                title: 'Cloud Atlas'
            },
            {
                title: 'One Hundred Years of Solitude'
            }
        ]
    },
    {
        name: 'Beatrice',
        age: 42,
        favoriteBooks: [{
            title: 'Candide'
        }]
    }
];

const books = users
    .map(user => user.favoriteBooks.map(book => book.title))
    .reduce((arr, titles) => [...arr, ...titles], []);

// Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];
console.log(books);

*/

// ========== ACTIVITY ========== 

const customers = [{
        name: "Tyrone",
        personal: {
            age: 33,
            hobbies: ["Bicycling", "Camping"]
        }
    },
    {
        name: "Elizabeth",
        personal: {
            age: 25,
            hobbies: ["Guitar", "Reading", "Gardening"]
        }
    },
    {
        name: "Penny",
        personal: {
            age: 36,
            hobbies: ["Comics", "Chess", "Legos"]
        }
    }
];

const hobbies = customers

    .map(customer => customer.personal.hobbies.map(hobby => hobby))

    .reduce((arr, hobbies) => [...arr, ...hobbies], []);
// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
console.log(hobbies);