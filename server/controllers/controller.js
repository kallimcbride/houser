module.exports ={
    add: (req, res) => {
        let db = req.app.get('db');
        db.add_home(req.body).then(response => {
            res.send(response).status(200);
        }).catch(err => {
            res.send(err).status(500);
        });
    },

    getHomes: (req, res) => {
        let db = req.app.get('db');
        db.get_homes().then(response => {
            res.send(response).status(200);
        }).catch(err => {
            res.send(err).status(500);
        })        
    },

    getHome: (req, res) => {
        let db = req.app.get('db');
        db.get_home(req.params.id).then(response => {
            res.send(response[0]).status(200);
        }).catch(err => {
            res.send(err).status(500);
        })
    },

    updateHome: (req, res) => {
        let db = req.app.get('db');
        let params = req.body;
        params.id = req.params.id;
        db.update_home(params).then(response => {
            res.send(response).status(200);
        }).catch(err => {
            res.send(err).status(500);
        })
    },

    deleteHome: (req, res) => {
        let db = req.app.get('db');
        db.delete_home(req.params.id).then(response => {
            res.send(response).status(200);
        }).catch(err => {
            res.send(err).status(500);
        })
    }
}