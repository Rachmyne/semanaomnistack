const express= require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Busca/listarr uma info de Back-end
  * POST: Criar uma  info no Back-end
  * PUT: Alterar uma info no Back-end
  * DELETE: Deletar uma info no Back-end
  */
 /**
  * Tipos de parametros:
  * 
  * Quey: Parametros nomeados enviados na rota apos *?* (filtros,paginação)
  *Route Params: Parametros utilizados para identificar recursos
 *Reques Body: Corpo da requisição, utilisado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL,SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table ('users').select
 */


