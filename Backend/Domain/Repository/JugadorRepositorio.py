from Domain.Entity.Jugador import Jugador
from Domain.Repository.BaseDeDatos import BaseDeDatos

class RepositorioEmbalador:
    def __init__(self, client, db):
        self.__COLLECTION = "jugadores"
        self.__baseDeDatos = BaseDeDatos(client, db, self.__COLLECTION)