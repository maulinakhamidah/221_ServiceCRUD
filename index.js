
// DELETE (Hapus Data)
app.delete('/biodata/:id', (req, res) => {
    const { id } = req.params;

    pool.query(
        'DELETE FROM biodata WHERE id=$1 RETURNING *',
        [id]
   