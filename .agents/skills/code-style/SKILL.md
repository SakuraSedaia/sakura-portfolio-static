---
name: code-style
description: Apply Sedaia Portfolio frontend conventions when creating, editing, formatting, or reviewing SolidJS 2, TypeScript/TSX, Sass, Vite, or frontend configuration.
---

# Apply Frontend Code Style

Read the repository-root `AGENTS.md`, any nearer package instructions, and nearby code before editing.

- Use strict TypeScript, `.tsx` for JSX, and `.ts` otherwise.
- Use SolidJS primitives and fine-grained reactivity; do not import React conventions. Use `class`, not `className`, and prefer accessors, `For`, `Show`, and `createMemo` where they improve Solid behavior.
- Keep application entry components focused on composition. Extract reusable UI and nonvisual behavior according to the existing project structure.
- Use typed props, semantic HTML, and explicit loading, empty, error, and stale states for API-backed content.
- Guard browser-only APIs during static document generation.
- Use Sass for authored styles and preserve nearby conventions. Prefer existing semantic tokens and use `hsl()` or `oklch()` for new authored colors.
- Preserve package boundaries. Shared code belongs in `packages/` only when more than one application or package has a concrete need for it.

Use the target package's scripts for focused checks. Run relevant tests, lint, format checks, and builds, then `git diff --check`, in proportion to the change.
