from flask import *
import datetime
import requests
import json

from Domain.Entity.Torneo import Torneo
from Domain.Repository.TorneoRepositorio import RepositorioTorneo

app = Flask(__name__, static_url_path='')
app.secret_key = "patronatoInfantil"

cliente = "mongodb+srv://admin:ad6BmaJ4zXMYP1ZT@cluster0.t3d77.gcp.mongodb.net/test?authSource=admin&replicaSet=atlas-30yzca-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true"
base = "patronatoInfantil"

DBTorneo = RepositorioTorneo(cliente, base)

@app.route('/')
def index():
    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}

@app.route("/torneo/listar", methods=["GET"])
def torneo_listar():
    return DBTorneo.getListaTorneos()

@app.route("/torneo/ingresar", methods=["POST"])
def torneo_ingresar():
    nombre = request.form['nombre']
    cantidad = int(request.form['cantidad'])
    juego = request.form['juego']
    fechaInicio = request.form['fecha_inicio']
    torneoNuevo = Torneo(nombre, cantidad, juego, fechaInicio)
    RepositorioTorneo.agregarTorneo(torneoNuevo)
    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}

if __name__ == '__main__':
    app.run(debug=False, port=5000)
