var express = require("express");
var aplicacion = express();

aplicacion.get("/",inicio);
aplicacion.get("/zahira", zahira);

function inicio(peticion, resultado)
{
  resultado.send("primer servidor")

}

function zahira(peticion, resultado)
{
resultado.send(" Mensaje para zahira")
}

aplicacion.listen(8989);
