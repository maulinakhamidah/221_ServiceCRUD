

// PUT (Update Data)
app.put('/biodata/:id', (req, res) => {
    const { id } = req.params;
    const { nama, nim, kelas } = req.body;

    pool.query(
        'UPDATE biodata SET nama=$1, nim=$2, kelas=$3 WHERE id=$4 RETURNING *',
        [nama, nim, kelas, id]
    )
        