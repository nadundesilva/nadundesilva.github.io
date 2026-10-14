---
name: shadcn-components
description: "Rules for shadcn/ui primitives in this repo: they are CLI-managed and never hand-edited, how to regenerate them, the component integrity rule, and the priority order for choosing a UI component (shadcn, then @base-ui/react, then custom). Use when adding, updating or modifying anything under shadcn/, or when choosing a component for new UI."
paths:
    - "shadcn/**"
    - "components.json"
---

# shadcn Components

## CLI-managed only

- **`shadcn/`** — CLI-managed only (see the rule below). `shadcn/ui/` holds the 9 shadcn primitives, `shadcn/lib/` holds the `cn()` utility, `shadcn/hooks/` is where shadcn-provided hooks would land if any are ever added.

> **shadcn components must not be hand-edited — only regenerated via the CLI.** If a shadcn primitive needs to change (new upstream version, a variant tweak, a prop addition), run `npx shadcn add <component> --overwrite` and `git mv` the freshly generated file(s) into `shadcn/ui/` (or `shadcn/lib/`), rather than editing the existing file by hand. This keeps them byte-for-byte reproducible from the registry — a hand-edit today becomes a silent, undiscoverable diff from upstream that the next regeneration either clobbers or conflicts with. If a shadcn primitive doesn't support something the app needs, either wrap it from `components/primitives/` (composition, not modification) or raise it with the user before hand-patching the CLI output. This means shadcn files also skip the usual file-header and PascalCase-filename rules — use the CLI's output as-is (lowercase-kebab filenames, no copyright header); see the **File Header** and **TypeScript Conventions** sections of `AGENTS.md`. The hand-written `index.tsx`/`index.ts` barrels in `shadcn/ui/` and `shadcn/lib/` are the one exception within `shadcn/` — they're ours, not CLI output, so they keep the normal header and convention.

**shadcn primitives** (all exported from `shadcn/ui/index.tsx`):

| Primitive              | What it renders                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------- |
| `Badge`                | Inline status/category label                                                           |
| `Breadcrumb` (+ parts) | Accessible breadcrumb navigation components                                            |
| `Button`               | Styled action button (with size/variant CVA)                                           |
| `Card`                 | Bordered content card                                                                  |
| `Drawer` (+ parts)     | Accessible drawer / bottom-sheet overlay components (built on `@base-ui/react/drawer`) |
| `Popover` (+ parts)    | Accessible popover components                                                          |
| `Separator`            | Full-width horizontal rule                                                             |
| `Spinner`              | Animated loading indicator                                                             |
| `Tooltip` (+ parts)    | Accessible tooltip components                                                          |

> **shadcn component integrity rule:** Never partially remove sub-components from a shadcn component. If at least one sub-component is used anywhere in the project, the entire component (including all unused sub-components) stays. Only remove the whole component if none of its exports are used anywhere.

Export shadcn primitives from `shadcn/ui/index.tsx` (or the utility from `shadcn/lib/index.ts`) when regenerating.

## Component Selection Hierarchy

When adding new UI functionality, follow this priority order:

1. **shadcn component** — check `shadcn/ui/` first. If a suitable component does not exist there, check the shadcn registry (`npx shadcn add`) for one that can be scaffolded in (see "CLI-managed only" above).
2. **`@base-ui/react` primitive** — if no shadcn component fits semantically, use `@base-ui/react` directly. It is the unstyled primitive library that most shadcn components in this project are built on (exceptions: `Card` uses plain React and `Spinner` only uses `lucide-react`).
3. **Custom implementation** — only if neither option above applies. Before writing a custom component, ask the user for approval.
