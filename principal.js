//const pug = require('pug');
//console.log(pug.renderFile('index.pug'));
const http = require('http');
const pug = require('pug');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Manejar las solicitudes aquí
  // Puedes agregar lógica para manejar diferentes rutas o recursos

  // Lee el archivo Pug
  const pugTemplate = fs.readFileSync('index.pug', 'utf8');

  // Compila el archivo Pug a HTML
  const compiledHtml = pug.render(pugTemplate);

  // Configura la respuesta HTTP
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(compiledHtml);
});

const PORT = 3000;

// Inicia el servidor en el puerto 3000
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});
