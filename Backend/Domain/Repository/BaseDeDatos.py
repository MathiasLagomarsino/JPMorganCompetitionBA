from pymongo import *

class BaseDeDatos:
    def __init__(self, client, db, collection):
        self.setMongoDataBase(client, db, collection)

    def setMongoDataBase(self, client, db, collection):
        # Requires the PyMongo package.
        # https://api.mongodb.com/python/current

        self.__MClient = MongoClient(client)
        self.__MDb = self.__MClient[db]
        self.__MCollection = self.__MDb[collection]

    def setCollection(self, nuevaCollection):
        self.__MCollection = self.__MDb[nuevaCollection]

    def getAllMongoData(self):
        return self.__MCollection.find()

    def ingresarDato(self, dato):
        datoIngresar = dato
        self.__MCollection.insert_one(datoIngresar)