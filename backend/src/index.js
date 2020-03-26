const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
* GET: Busca/Lista uma informação no back-end
* POST: Cria uma informação no back-end
* PUT: Altera uma informação no back-end
* DELETE: Deleta uma informação no back-end
*/

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginacao)
 * Route Params: Parametros utilizados para identificar recursos - /users/:id
 * Request Bory: Corpo da requisição, utilizado para criar ou alterar recursos - /users
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

