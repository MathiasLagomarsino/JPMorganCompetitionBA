from Domain.Entity.Jugador import Jugador
import datetime

class Torneo:
    def __init__(self, nombre : str, puestos : int, juego: str, fechaInicio : datetime):
        self.__nombre = nombre
        self.__puestos = puestos
        self.__juego = juego
        self.__fechaInicio = fechaInicio
        self.__jugadores = []

    def getNombre(self):
        return self.__nombre

    def getJugadores(self):
        return self.__jugadores

    def getCantidadParticipantes(self):
        return len(self.__jugadores)

    def getJuego(self):
        return self.__juego

    def getFechaInicio(self):
        return self.__fechaInicio

    def setNombre(self, nombre):
        self.__nombre = nombre

    def agregarJugador(self, jugador: Jugador):
        self.__jugadores.append(jugador)

    def eliminarJugador(self, jugador: Jugador):
        self.__jugadores.remove(jugador)