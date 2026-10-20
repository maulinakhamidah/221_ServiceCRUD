

    pool.query(
        'INSERT INTO biodata (id, nama, nim, kelas) VALUES ($1,$2,$3,$4) RETURNING *',
        [id, nama, nim, kelas]
    )
       