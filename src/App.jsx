import { useState } from 'react';

function Square({ value, onSquareClick }) {
    return(
        <button 
            className="bg-white border border-gray-900 h-12 w-12 m-1 leading-9 text-lg text-center"
            onClick = {onSquareClick}
            >
            {value}
        </button>
    )
}

export default function Board(){
    const [squares, setsquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNest] = useState(true);

    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = `Winner: ${winner}`
    } else{
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
     
    function handleClick(i){
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = 'X';
        } else{
            nextSquares[i] = 'o';
        }
        setsquares(nextSquares);
        setXIsNest(!xIsNext);
    }
    return(
        <>
        <div className='text-center mt-20'>{status}</div>
            <div className="w-40 grid grid-cols-3 m-auto mt-6">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/> 
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
            
        </>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}