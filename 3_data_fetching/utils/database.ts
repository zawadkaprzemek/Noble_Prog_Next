// import { FieldInfo } from "mysql";
require('util');

// const util = require('util');

var mysql = require("mysql");

var pool = mysql.createPool({
  host: "134.209.244.72",
  user: "nis",
  password: "nis",
  database: "wordpress",
});

const _getPosts = () : any => {
  return new Promise((resolve: any, reject: any) => {
    pool.getConnection((error: Error, connection: any) => {
      if (error) console.error("No connection", error);
      else console.log("Conn", connection);
      var sql = "SELECT * FROM ??";
      var credentials = ["wp_posts"];
      sql = mysql.format(sql, credentials);

      connection.query(
        sql,
        function (
          error: Error,
          results: Array<{ [key: string]: any }>,
        //   fields: FieldInfo
        ) {
          if (error) throw error;
        //   console.log(fields);

          if (true) {
            resolve(results);
          } else {
            reject(false);
          }
        }
      );
    });
  });
};

export { _getPosts };
