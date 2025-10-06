# Contributing to Tweakr

First off, **thank you** for considering contributing to Tweakr! Every contribution helps make the library better, faster, and more reliable.

---

## 🛠 Getting Started

1. **Fork the repository**
   Click the “Fork” button in GitHub to create your own copy of the repo.

2. **Clone your fork**

   ```bash
   git clone https://github.com/coxxanthony/tweakr.git
   cd tweakr
   ```

3. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run tests**

   ```bash
   npm run test
   ```

   All tests are located in `tests/<folder>/` and are run in alphabetical order per folder.

5. **Build the library**

   ```bash
   npm run build
   ```

   This will generate `dist/tweakr.esm.js`, `dist/tweakr.cjs.js`, and `dist/tweakr.min.js`.

---

## 📐 Code Guidelines

- **Language**: TypeScript only
- **Code style**:

  - 2-space indentation
  - Semicolons optional but consistent
  - Use ES modules for internal imports

- **Function design**:

  - Small, composable, modular
  - Prefer pure functions
  - Include edge-case handling

- **File structure**:

  - Each utility function has its own file in the appropriate folder: `array/`, `async/`, `function/`, `lang/`, `number/`, `object/`, `browser/`, `util/`
  - `__index.ts` per folder exports all utilities for that folder

---

## ✅ Writing Tests

- Tests are written using **Vitest** in `tests/<folder>/`
- Maintain **alphabetical order** for tests
- Include **edge cases** for each function
- Use mocks or timers if needed for async or timing functions

```ts
// Example test structure
import { describe, it, expect } from "vitest";
import { flatten } from "../../src/array/flatten";

describe("flatten", () => {
  it("flattens nested arrays", () => {
    expect(flatten([1, [2, 3]])).toEqual([1, 2, 3]);
  });
});
```

---

## 🌱 Contributing

- **Bug fixes**: Open a PR with a clear description of the issue and your fix.
- **New utilities**:

  - Ensure utility aligns with Tweakr philosophy (small, modular, composable).
  - Add TypeScript typings and Vitest coverage.

- **Documentation**: Update README and per-folder usage examples if adding new features.

---

## 🏷 Commit Messages

Use **Conventional Commits** style:

- `feat(<folder>): add new utility`
- `fix(<folder>): fix bug in utility`
- `chore: update tests or tooling`
- `docs: update documentation`

**Example**:

```bash
git add src/array/chunk.ts tests/array/chunk.test.ts
git commit -m "feat(array): add chunk utility with tests"
```

---

## 🔄 Pull Requests

1. Fork → branch → commit → push → open PR
2. PR title: follow **Conventional Commits**
3. Include **tests** for new features
4. PR will be reviewed and merged after CI passes

---

## ⚡ Notes

- All contributions must be **tested** and **type-safe**
- Use **prettier** or your preferred formatter for code style consistency
- Avoid breaking existing APIs unless necessary
- All new functions must be **tree-shakable and modular**

---

## 📬 Contact / Support

For questions or issues, use **GitHub Issues**.
Security issues should follow instructions in [`SECURITY.md`](SECURITY.md).
