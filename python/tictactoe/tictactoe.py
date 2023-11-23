"""
Tic Tac Toe Player
"""

import math

X = "X"
O = "O"
EMPTY = None


def initial_state():
    """
    Returns starting state of the board.
    """
    return [[EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY]]


def player(board):
    """
    Returns player who has the next turn on a board.
    """
    count_X = 0
    count_O = 0

    for row in board:
        for column in board:
            if row == None and column == None:
                count_X +=1
                return X
            elif count_X == 1 or count_X > count_O:
                count_O += 1
                return O
            elif count_O == count_X:
                count_X += 1
                return X







def actions(board):
    """
    Returns set of all possible actions (i, j) available on the board.
    """
    posibilities = set()
    for i in board:
        for j in board:
            if board[i][j] == None:
                (board[i][j]).append(posibilities)

    return posibilities


def result(board, action):
    """
    Returns the board that results from making move (i, j) on the board.
    """
    if new_board == None:
        new_board = set()
    else:
        for i in action:
            for j in action:
                new_board.append(board[i][j])

    return new_board
def winner(board):
    """
    Returns the winner of the game, if there is one.
    """

    if board[0][0] == X and board[0][1] == X and board[0][2] == X:
        return X
    if board[0][0] == X and board[1][0] == X and board[2][0] == X:
        return X
    if board[1][0] == X and board[1][1] == X and board[1][2] == X:
        return X
    if board[2][0] == X and board[2][1] == X and board[2][2] == X:
        return X
    if board[0][1] == X and board[1][1] == X and board[2][1] == X:
        return X
    if board[0][2] == X and board[1][2] == X and board[2][2] == X:
        return X
    else:
        return None



def terminal(board):
    """
    """
    for i in board:
        for j in board:
            if board[i][j] == None:
                return False
            else:
                return True


def utility(board):
    """
    Returns 1 if X has won the game, -1 if O has won, 0 otherwise.
    """
    if winner(board) == X:
        return 1
    elif winner(board) == O:
        return -1
    else:
        return 0


def minimax(board):
    """
    Returns the optimal action for the current player on the board.
    """
    raise NotImplementedError
