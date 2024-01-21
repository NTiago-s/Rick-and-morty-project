// *Server config
const { server } = require('./src/app');
const PORT = 3001;
const { conn } = require('./DB_connection');

conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        console.log('Listening on port: ' + PORT);
    });
});