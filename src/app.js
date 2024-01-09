const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const paginate = require('express-paginate');
const app = express();
const cors = require('cors')
//Ejecuto el llamado a mis rutas
// const indexRouter = require('./routes/index');
// const moviesRoutes = require('./routes/moviesRoutes');
// const genresRoutes = require('./routes/genresRoutes');

//Aquí pueden colocar las rutas de las APIs


// view engine setup
// app.set('views', path.resolve(__dirname, './views'));
// app.set('view engine', 'ejs');

// app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(paginate.middleware(8,50));
//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

// Aqui pueden colocar las rutas de las apis
app.use('/api/v1/movies', require('./routes/v1/movies.routes'));
app.use('/api/v1/genres', require('./routes/v1/genres.routes'));


//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
