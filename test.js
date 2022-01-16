const sqlite = require("sqlite3");

let db = new sqlite.Database("genius_table.db", function(err) {
    if (err){
        console.log(err.message());
    } else {
        console.log("БД подключена!")
    }
});


db.serialize(function() {
    let query = "SELECT * FROM users";
    db.each(query, function (err, row) {
        if (err){
            console.log(err.message());
        } else {
            console.log(row)
        }
    })
})