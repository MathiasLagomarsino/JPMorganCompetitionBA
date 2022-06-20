class Jugador:
    def __init__(self, nombre, dni):
        self.__nombre = nombre
        self.__dni = dni

    def getNombre(self):
        return self.__nombre

    def getDni(self):
        return self.__dni

    def setNombre(self, nombre):
        self.__nombre = nombre