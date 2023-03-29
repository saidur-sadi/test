const db = require('better-sqlite3')('./models/todo.db', { verbose: console.log });
db.pragma('journal_mode = WAL');

exports.initDB = () => {
    db.prepare('CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL UNIQUE, done INTEGER NOT NULL)').run();
};

exports.createTask = async (title) => {
    const stmnt = db.prepare('INSERT INTO tasks (title, done) VALUES (@title, @done)');
    await stmnt.run({title, done: 0});
};

exports.deleteTask = async (id) => {
    const stmnt = db.prepare('DELETE FROM tasks WHERE id = ?');
    await stmnt.run(id);
};

exports.updateTask = async (id, done) => {
    const stmnt = db.prepare('UPDATE tasks SET done = @done WHERE id = @id');
    await stmnt.run({ done, id });
};

exports.getTask = async (id) => {
    const stmnt = db.prepare('SELECT * FROM tasks WHERE id = ?');
    const result = await stmnt.get(id);
    return result;
};

exports.getTasks = async () => {
    const stmnt = db.prepare('SELECT * FROM tasks');
    const result = await stmnt.all();
    return result;
};
