# ⛵ Boat Movements

**Difficulty:** Hard | **Tags:** 2D Array, Graphs

## 📝 Problem Statement

A turn-based strategy game features a grid consisting of water and land. The grid is represented by a 2D array where a `true` value indicates water and a `false` value indicates land.

The player controls a boat unit that has a specific movement pattern. It can only move to fixed destinations from its current position and must travel in a direct path through water. If there is land in the way, the destination becomes unreachable.

The objective is to implement the `canTravelTo` function. This function must check whether a specific destination coordinates are reachable by the boat from its starting coordinates. It should return:
*   `true` for destinations that are reachable according to the movement pattern and pathing rules.
*   `false` for unreachable destinations (blocked by land) or destinations that are out of bounds outside the grid.

## 💡 Example

Consider the following grid and test cases:

```typescript
const gameMatrix = [
  [false, true,  true,  false, false, false],
  [true,  true,  true,  false, false, false],
  [true,  true,  true,  true,  true,  true],
  [false, true,  true,  false, true,  true],
  [false, true,  true,  true,  false, true],
  [false, false, false, false, false, false],
];

console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds