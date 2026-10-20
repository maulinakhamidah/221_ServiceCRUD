
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
