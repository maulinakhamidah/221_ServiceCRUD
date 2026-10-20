

// GET ALL
app.get('/', (req, res) => {
    console.log("TEST DATA :");

    pool.query('SELECT * FROM biodata ORDER BY id')
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
