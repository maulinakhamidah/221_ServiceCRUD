
// POST (Tambah Data)
app.post('/biodata', (req, res) => {
    const { id, nama, nim, kelas } = req.body;

    pool.query(
        'INSERT INTO biodata (id, nama, nim, kelas) VALUES ($1,$2,$3,$4) RETURNING *',
        [id, nama, nim, kelas]
    )
        .then(result => res.json(result.rows[0]))
        .catch(err => console.error(err));
});

