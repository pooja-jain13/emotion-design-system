Design System Components

Folder structure:
- atoms/: Basic UI elements (buttons, inputs, labels)
- molecules/: Compositions of atoms (form field, search bar)
- organisms/: Complex sections composed of molecules/atoms (header, footer)

Core mandates (enforced):
- BEM CSS naming: use `block__element--modifier` only. No camelCase, no utility classes, no inline styles.
- Atomic classification: When adding a component, include a short note at the top of the file stating: "This component is an [Atom/Molecule/Organism] because..."
- Accessibility & semantic HTML: use proper elements (`button`, `nav`, `header`, etc.) and follow ARIA best practices.

Before adding a new component, check `src/styles` (or global variables) for existing CSS variables to avoid hardcoded values.
