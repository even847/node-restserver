// ============
// Puerto
// ============
process.env.PORT = process.env.PORT || 3000;

// ============
// Entorno
// ============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============
// Base de Datos
// ============
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://Even847:AtkQtU5tmMd6F35Q@cluster0.bb7g6.mongodb.net/cafe'
}

process.env.URLDB = urlDB;
