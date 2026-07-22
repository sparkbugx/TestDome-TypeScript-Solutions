# AGENTS.md — TestDome TypeScript Exercises

## What this is
Collection of standalone TestDome problem solutions under `src/<ExerciseName>/`. Each has a `README.md` (problem statement), `answer.ts` (solution), and optionally `answer.test.ts`.

## Commands
- **Build:** `npm run build` (runs `tsc`, outputs to `dist/`)
- **Test all:** `npx jest` (no `test` script in package.json)
- **Test one file:** `npx jest src/MegaStore/answer.test.ts`
- **Test watch:** `npx jest --watch`

No linter, formatter, or typecheck script is configured.

## Test quirks
- Tests import from `./answer.ts` (with `.ts` extension — required by ts-jest).
- Jest config uses `ts-jest` with `createDefaultPreset()` and `testEnvironment: "node"`.

## Structure
- `src/MegaStore/` — easy, arithmetic/conditionals. Has test file with a typo (`DiscountType.Standar`).
- `src/BoatMovements/` — hard, 2D array/graph pathfinding. `answer.ts` is currently empty (not yet implemented). No test file exists.
- No cross-package dependencies; each exercise is independent.
- `tsconfig.json` targets `es2016`/`commonjs` with `strict: true`.

## Notable constraints
- Solutions must be self-contained within `answer.ts` (no shared code between exercises).
- Test code in `answer.test.ts` should verify the solution — the repo currently has minimal test coverage.
