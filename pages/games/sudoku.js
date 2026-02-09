// pages/game.js
import dynamic from "next/dynamic";

// Import the PhaserGame component dynamically
const DynamicPhaserGame = dynamic(
  () => import("../../components/games/Sudoku"),
  {
    ssr: false, // This ensures that the component is only rendered on the client side
  }
);

const GamePage = () => {
  return (
    <div>
      <DynamicPhaserGame />
    </div>
  );
};

export default GamePage;
