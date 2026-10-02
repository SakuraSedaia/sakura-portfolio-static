# Sedaia Portfolio guidelines

## Project

This project is the static professional portfolio. It uses SolidJS 2,
TypeScript, Vite, and Sass without SolidStart, a router, or server runtime.
`vite build` emits the deployable static site in `dist/client`.

Dynamic public content may be fetched from the independent
`sedaia-central-api` project. Do not connect this frontend directly to
`sedaia-main-db`, add server-only behavior, or introduce SolidStart unless the
deployment architecture is intentionally reconsidered across the workspace.

Do not edit generated output such as `dist/`, `.vite/`, or dependency folders.

## Operations

- Perform agent operations through standard shell interactions and repository
  file-editing tools.
- Do not take control of the user's screen, mouse, keyboard, browser, IDE, or
  other graphical applications. If a task cannot be completed through the
  shell, explain what the user must do manually.

## Conventions

- Use `.tsx` for JSX and `.ts` otherwise; keep useful strict types.
- Follow SolidJS 2 patterns, not React patterns. Use `class` for JSX classes;
  never use React's `className`. Use Solid primitives, accessors, and
  fine-grained reactivity.
- Keep `src/App.tsx` focused on page composition; put reusable UI in
  `src/components` and nonvisual behavior in `src/lib`.
- Use semantic HTML and accessible loading, error, empty, navigation, and form
  states.
- Guard browser-only globals when code can run while the document shell is
  generated.
- Use `.scss` or `.module.scss` for authored styles. Prefer semantic tokens and
  `hsl()` or `oklch()` colors over hexadecimal, RGB, or named literals.

## Commands

Use pnpm and the checked-in lockfile:

```sh
pnpm install
pnpm dev
pnpm build
pnpm serve
```

Run focused tests when present, then `pnpm build` and `git diff --check` for
behavior or configuration changes as applicable.

## Git guidelines

- Inspect `git status` and relevant diffs before staging. Stage only requested
  files with explicit paths, and review `git diff --staged` before committing.
- Preserve unrelated and pre-existing work; do not discard, overwrite, reset,
  or otherwise alter it to create a clean worktree.
- Commit only when explicitly requested. Keep commits cohesive and use
  `[Type: module]: Description`, or `[Type]: Description` for repository-wide
  changes. Use an imperative description without a trailing period and keep the
  complete subject at or below 150 characters.
- Do not amend or rewrite commits unless explicitly requested.
- Push only when explicitly requested. Verify the branch, remote, upstream, and
  outgoing commits first; never force-push without explicit authorization and
  an exact verified target.
- Do not tag, release, deploy, publish, or modify remote services without
  explicit authorization for that stage.

## Repository skills

- Use `.agents/skills/code-style` for SolidJS, TypeScript/TSX, Sass, Vite, or
  frontend configuration work.
- Use `.agents/skills/ui-accessibility` for components, interactions, layouts,
  and accessibility reviews.
- Use `.agents/skills/integrate-brand-icons` when adding or normalizing SVG
  brand marks.
- Use `.agents/skills/git-commit` for staging, commit-message preparation, or
  commits.
- Use `.agents/skills/edit-changelog` for changelog entries and release notes.
- Use `.agents/skills/cross-repository-release` for releases coordinated with
  other Sedaia repositories.
- Use `.agents/skills/cross-site-content-migration` when adapting public content
  among Sedaia applications or properties.
