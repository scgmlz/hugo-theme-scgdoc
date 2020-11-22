import sys
import numpy


class Base:
    """
    Base class
    """
    def __init__(self):
        self.x = None
        self.y = numpy.sin(numpy.pi/2.0)

    def value(self):
        return self.y


def say_hello():
    """
    Prints 'Hello World' message
    """
    b = Base()
    print("Hello World", b.value())


if __name__ == '__main__':
    say_hello()

