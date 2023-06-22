const sqlite3 = require('sqlite3').verbose();

// create sqlite database connection
const db = new sqlite3.Database(':memory:', (err) => {
    if(err) {
        return console.error(err.message);
    }

    console.log('Connected to the in memeory SQlITE database.')
});

// create tables
db.serialize(() => {
    // create product table
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price REAL,
        description TEXT
    )`);

    // insert products
    db.run(`
    INSERT INTO products (name, price, description) VALUES
    ('Potato', 200, 'Yellow carbie carbie'),
    ('Tomato', 100, 'Red perry perry'),
    ('Apple', 400, 'Green softy softy'),
    ('Vegetable', 150, 'Green leafy leafy'),
    ('Meat', 1000, 'Soft meaty meaty'),
    ('Fish', 600, 'Soft fishy fishy'),
    ('Melon', 400, 'Delicious soupy soupy')
    `, (err)=>{
        if(err){
            console.error('Unable to populate Product table')
            process.exit(1)
        }
        console.log('Product table populated successfully')
    })

    // create cart table
    db.run(`CREATE TABLE IF NOT EXISTS cart (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER,
        FOREIGN KEY (product_id) REFERENCES products (id)
    )`)

    // create reviews table
    db.run(`CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER,
        review TEXT,
        stars INTEGER,
        FOREIGN KEY (product_id) REFERENCES products (id)
    )`)
})

// close the database connection
// db.close((err) => {
//     if(err){
//         return console.error(err.message)
//     }

//     console.log('Close the database connection.');
// });

module.exports = db;