
        .then(result => {
            if (result.rowCount === 0) {
                return res.status(404).json({
                    message: "Data tidak ditemukan"
                });
            }

            res.json({
                message: "Data berhasil diupdate",
                data: result.rows[0]
            });
   