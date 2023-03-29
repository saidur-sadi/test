const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const eta = require('eta');

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({extended: false}));

// view engine config
app.engine('eta', eta.renderFile);
eta.configure({ views: './pages', cache: true });
app.set('views', './pages');
app.set('view cache', true);
app.set('view engine', 'eta');

const adminRouter = require('./routers/admin');
app.use('/admin', adminRouter);

const tasksRouter = require('./routers/tasks');
app.use('/', tasksRouter);

app.all('*', (req, res) => {
    res.render('index', {title: '404', message: `We were unable to ${req.method} the path ${req.path}`});
});

app.listen(port, () => {
    console.log(`Site running http://localhost:${port}`);
});