const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

app.get('/admin', (req, res) => {
    // Get all of the feedback from the database
    const sqlText = `SELECT * FROM "feedback";`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

// POST new feedback
app.post('/', (req, res) => {
    let newFeedback = req.body;
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
            .then(result => {
                res.sendStatus(201);
            })
            .catch(error => {
                console.log(`Error adding new task`, error);
                res.sendStatus(500);
            });
    });

// DELETE feedback
// router.delete('/:id', (req, res) => {
//     pool.query('DELETE FROM "orders" WHERE id=$1', [req.params.id]).then((result) => {
//         res.sendStatus(200);
//     }).catch((error) => {
//         console.log('Error DELETE /api/order', error);
//         res.sendStatus(500);
//     })
// });

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});