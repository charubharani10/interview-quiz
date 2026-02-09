// src/Sudoku.js
import React, { useState, useEffect } from "react";
import { Button, Grid, Typography, IconButton, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

// Function to check if a number can be placed in a specific cell
const isSafe = (board, row, col, num) => {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num) return false; // Check row
    if (board[x][col] === num) return false; // Check column
    if (
      board[3 * Math.floor(row / 3) + Math.floor(x / 3)][
        3 * Math.floor(col / 3) + (x % 3)
      ] === num
    )
      return false; // Check 3x3 grid
  }
  return true;
};

// Backtracking algorithm to fill the Sudoku board
const solveSudoku = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === null) {
        for (let num = 1; num <= 9; num++) {
          if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) return true;
            board[row][col] = null; // Backtrack
          }
        }
        return false; // No valid number found
      }
    }
  }
  return true; // Board is completely filled
};

// Function to generate a valid Sudoku board
const generateRandomSudoku = () => {
  const board = Array(9)
    .fill(null)
    .map(() => Array(9).fill(null));
  solveSudoku(board);

  // Remove numbers randomly to create the Sudoku puzzle
  const removeCells = (board, numCells) => {
    let count = numCells;
    while (count > 0) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      if (board[row][col] !== null) {
        board[row][col] = null; // Remove number
        count--;
      }
    }
  };

  removeCells(board, 40); // Adjust the number of cells to remove for difficulty
  return board;
};

const Sudoku = () => {
  const [board, setBoard] = useState(generateRandomSudoku());
  const [selectedCell, setSelectedCell] = useState([null, null]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const [row, col] = selectedCell;
      const value = parseInt(e.key, 10);

      // Check if the key pressed is a number between 1 and 9
      if (!isNaN(value) && value >= 1 && value <= 9) {
        const newBoard = [...board];
        newBoard[row][col] = value;
        setBoard(newBoard);
      } else if (e.key === "Backspace" || e.key === "Delete") {
        // Clear the cell if Backspace or Delete is pressed
        const newBoard = [...board];
        newBoard[row][col] = null;
        setBoard(newBoard);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCell, board]);

  const handleCellClick = (row, col) => {
    setSelectedCell([row, col]);
  };

  const clearCell = () => {
    const [row, col] = selectedCell;
    const newBoard = [...board];
    newBoard[row][col] = null;
    setBoard(newBoard);
  };

  const renderCell = (value, row, col) => {
    const isSelected = selectedCell[0] === row && selectedCell[1] === col;
    return (
      <Grid item xs="1" key={`${row}-${col}`}>
        <Paper
          elevation={3}
          onClick={() => handleCellClick(row, col)}
          style={{
            width: "3rem",
            height: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isSelected ? "#d3d3d3" : "white",
            cursor: "pointer",
          }}
        >
          {value !== null ? value : ""}
        </Paper>
      </Grid>
    );
  };

  return (
    <div>
      <Typography variant="h4">Sudoku Game</Typography>
      <Grid container spacing={1} justifyContent="center">
        {board.map((row, rowIndex) => (
          <Grid container item key={rowIndex} justifyContent="center">
            {row.map((value, colIndex) =>
              renderCell(value, rowIndex, colIndex)
            )}
          </Grid>
        ))}
      </Grid>
      <Typography variant="subtitle1">
        Click on a cell and type a number (1-9)
      </Typography>
      <IconButton onClick={clearCell} color="primary">
        <FontAwesomeIcon icon={faUndo} /> Clear Cell
      </IconButton>
    </div>
  );
};

export default Sudoku;
