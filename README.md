# Reusable UI and Theme Guide

## Theme
- The app uses class-based dark mode via Tailwind (darkMode: 'class').
- Provider: `components/ThemeProvider.tsx` adds `light | dark | system` with localStorage key `hrms-ui-theme`.
- Toggle: `components/ThemeToggle.tsx` in the navbar.

## Reusable Building Blocks

### Navigation config
- File: `lib/navigation.ts`
- Export: `mainNavigation: Array<{ icon, label, href }>`
- Used by: `components/Sidebar.tsx` and can be reused for any menu.

### IconButton
- File: `components/common/IconButton.tsx`
- Purpose: Unified ghost icon button with motion hover/tap.
- Props: `icon`, `ariaLabel`, optional `onClick`, `className`.

### SearchBar
- File: `components/common/SearchBar.tsx`
- Purpose: Standard search input with leading icon and mic button.
- Replace bespoke search inputs with this for consistency.

### EmptyState
- File: `components/common/EmptyState.tsx`
- Purpose: Consistent empty state UI.
- Props: `icon?`, `title?`, `description?`, `className?`.

### PageContainer
- File: `components/common/PageContainer.tsx`
- Purpose: Consistent page spacing (p-6 space-y-6).
- Wrap page content with this to standardize layout.

## Conventions
- Prefer consuming CSS variables (background, foreground) for theme-aware colors.
- Use `dark:` variants for custom shades only when required.
- Keep repeated menus/data in `lib/` as typed configs.

## How to add a new page
1. Add route under `app/<route>/page.tsx`.
2. Use `PageContainer` for layout.
3. Compose content with `DashboardCard`/`Card` and `EmptyState` as needed.

## Notes
- All components are TypeScript typed and lint-clean.
- Framer Motion used for subtle affordances; reuse `IconButton` where possible.


