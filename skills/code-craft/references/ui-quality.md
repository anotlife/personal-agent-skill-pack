# UI Quality

## Principle

Aim for interfaces that feel intentional, specific, and slightly surprising. The default failure mode is "AI slop": a safe, average, interchangeable layout that looks like a template. Users judge an application by its visual impact before they judge its behaviour.

**Exception:** when working inside an existing site or design system, preserve the established patterns, structure, and visual language. Consistency beats originality there.

## Typography

- Use an expressive, purposeful typeface rather than a default stack. Avoid falling back to Inter, Roboto, Arial, or the system font unless the existing design uses them.
- Two typefaces at most: one for headings, one for body — or a single family used with real weight contrast.
- Set a type scale and keep to it. Do not use eleven sizes.
- Control line length (roughly 45-75 characters), line height (1.4-1.7 for body), and letter spacing for headings.
- Avoid a wall of similarly weighted text; use weight and size to establish hierarchy.

## Colour and look

- Choose a clear visual direction and commit to it. Not a default palette.
- Define colours as tokens (CSS custom properties) rather than scattering literals.
- Avoid the default purple-on-white gradient look, and avoid defaulting to dark mode.
- Ensure contrast meets accessibility requirements for body text and interactive elements.
- Never rely on colour alone to convey state. Pair it with an icon, a label, or a shape.
- Support both light and dark deliberately, if the product supports both: define tokens once, redefine them per scheme.

## Layout and space

- Establish a spacing scale (for example 4/8/12/16/24/32/48) and use only those values.
- Use whitespace to group. Proximity is a stronger grouping signal than a border.
- One primary action per view. Secondary actions are visually subordinate.
- Align elements to a grid; make alignment consistent rather than "close enough".
- Make it work at phone width: a sane gutter, no horizontal scroll, tap targets at least 44 px.

## Motion

- Use a few meaningful animations — page load, staggered reveal, state transition — rather than micro-motion on everything.
- Motion should explain a change (where a thing came from, where it went), not decorate.
- Keep durations short (roughly 150-400 ms) and easing natural.
- Respect `prefers-reduced-motion`.
- Never block interaction on an animation.

## Background and depth

- Do not rely on a flat single-colour background. Use a gradient, a shape, a texture, or a subtle pattern to build atmosphere.
- Establish depth consistently: if elevation maps to shadow, keep the mapping.
- Keep borders, radii, and shadow styles consistent across components.

## Interactivity

- Every interactive element needs a visible state for hover, focus, active, and disabled.
- Focus must be visible for keyboard users. Do not remove outlines without replacing them.
- Feedback must be immediate: a button press should respond before the result arrives.
- Loading states are part of the design, not an afterthought. Prefer a skeleton over a spinner where the shape is known.
- Errors say what went wrong and what to do, next to the thing that failed.
- Empty states are designed, not blank.

## Content in the interface

- Realistic content, not `Lorem ipsum` and not "Item 1, Item 2, Item 3". Test with the longest realistic string.
- Labels are specific verbs: "Save draft", not "Submit".
- Microcopy explains consequences: "This will email all 412 members."
- Numbers, dates, and units are formatted for the locale.

## Responsive and adaptive

- Design the narrow case first; it forces prioritisation.
- Test at least three widths: narrow phone, tablet, wide desktop.
- Do not hide functionality on small screens; reflow it.
- Tables become cards or scroll deliberately — never overflow silently.
- Images and media need explicit dimensions or aspect ratios to avoid layout shift.

## Performance is design

- Layout shift and jank are experienced as brokenness. Reserve space for anything that loads.
- Ship only the fonts and weights used.
- Avoid full-page re-renders on a keystroke.
- Large lists are virtualised or paginated.

## Accessibility baseline

- Semantic elements (`button`, `nav`, `main`, `label`) before `div` with a role.
- Every image has an `alt` that describes its purpose, or an empty `alt` if decorative.
- Every form control has an associated label.
- Keyboard-operable and in a sensible tab order.
- Heading levels are hierarchical, not chosen for size.
- Contrast ratio meets WCAG AA for text.

## Verification

For a UI change, **start the dev server and use the feature in a browser** before reporting it complete. Check the golden path and at least one edge case, and watch for regressions in adjacent features.

Type checking and unit tests verify code correctness, not feature correctness. If you cannot exercise the UI, say so explicitly rather than claiming success.

## Checklist

- [ ] Typeface and palette are deliberate, not defaults.
- [ ] Spacing and type follow a consistent scale.
- [ ] Colour is not the only carrier of meaning.
- [ ] Every interactive element has hover, focus, active, and disabled states.
- [ ] Loading, empty, and error states are designed.
- [ ] Works at phone width with no horizontal scroll.
- [ ] Keyboard operable with visible focus.
- [ ] Tested in a real browser, or the inability to do so was stated.
