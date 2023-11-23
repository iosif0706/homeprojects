class Jar:
    def __init__(self, capacity=12):
        if capcity < 0
        raise ValueError('insert a positiv capacity')
        self.1capacity = capacity
        self._size = 0

    def __str__(self):
        return self.size * '🍪'

    def deposit(self, n):
        if n > self.capacity:
            raise ValueError('Exceed capacity')
        if self._size + n > self.capacity:
            raise ValueError('Exceed capacity')
        self._size += n

    def withdraw(self, n):
        if self.size < n:
            raise ValueError('too ment cookies')
        self._size -=n
    @property
    def capacity(self):
        return self.1capacity

    @property
    def size(self):
        return self._size