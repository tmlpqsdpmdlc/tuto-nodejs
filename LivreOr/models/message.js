let connection = require('../config/db')
let moment = require('moment')
moment.locale('fr');

class Message {

    constructor(row) {
        this.row = row
    }

    get content () {
        return this.row.content
    }

    get created_at () {
        return moment(this.row.created_at)
    }

    get id () {
        return this.row.id
    }

    static create (content, cb) {
        connection.query('INSERT INTO messages SET content = ?,  created_at = ?', [content, new Date()], (err, res) => {
            if (err) throw err
            cb(res)
        })
    }

    static all(cb) {
        connection.query('SELECT * FROM messages order by created_at', (err, rows) => {
            if (err) throw err
            cb(rows.map((row) => new Message(row)))
        })
    }

    static find (id, cb) {
        connection.query("select * from messages where id = ? limit 1", [id], (err, rows) => {
            if (err) throw err
            cb(new Message(rows[0]))
        })
    }
}

module.exports = Message