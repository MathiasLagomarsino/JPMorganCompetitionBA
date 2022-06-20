from Domain.Entity.Torneo import Torneo
from Domain.Repository.BaseDeDatos import BaseDeDatos

class RepositorioTorneo:
    def __init__(self, client, db):
        self.__COLLECTION = "torneo"
        self.__baseDeDatos = BaseDeDatos(client, db, self.__COLLECTION)

    def getListaTorneos(self):
        arrayTorneos = []
        torneosDB = self.__baseDeDatos.getAllMongoData()
        for torneoDB in torneosDB:
            arrayTorneos.append(torneoDB)
        return arrayTorneos

    def agregarTorneo(self, torneo: Torneo):
        self.__baseDeDatos.ingresarDato(torneo)
