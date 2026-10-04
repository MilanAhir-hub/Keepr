# Design System — Keep-Inspired Notes UI

> **Purpose:** A clean, production-ready design specification for a note-taking application inspired by the visual simplicity and interaction model of Google Keep.
>
> **Important:** This is a *Keep-inspired* system, not a pixel-for-pixel copy. Use original branding, icons where appropriate, and the application's own product identity. The goal is to reproduce the useful design principles: fast capture, lightweight cards, strong whitespace, colorful note organization, simple navigation, and low-friction interactions.

---

## 1. Design Direction

### Core design principles

1. **Simple first**
   - The interface should feel immediately understandable without onboarding.
   - Every screen should have one obvious primary action.
   - Avoid decorative UI that does not improve scanning or interaction.

2. **Content is the hero**
   - Notes, titles, files, labels, and user content receive visual priority.
   - Navigation and secondary actions remain visually quiet.

3. **Fast capture**
   - Creating a new note should require almost no navigation.
   - The main create control should always be easy to find.
   - Prefer inline creation over opening complex forms.

4. **Lightweight organization**
   - Use labels, colors, pins, archive, search, and filters.
   - Do not make users maintain complicated folder hierarchies.

5. **Progressive disclosure**
   - Show common actions immediately.
   - Put less-common actions inside overflow menus, popovers, or contextual toolbars.

6. **Friendly, not corporate**
   - Soft surfaces.
   - Rounded controls.
   - Pastel note colors.
   - Minimal borders.
   - Subtle elevation.

7. **Desktop-first productivity + mobile adaptation**
   - Desktop uses a persistent top bar and collapsible navigation.
   - Mobile uses compact navigation and touch-friendly controls.
   - The content model remains identical across breakpoints.

Google Keep itself supports note creation/editing, lists, drawings, labels, colors, pins, archive, reminders, search, and sharing/collaboration. These are useful reference interaction patterns for this system.

---

# 2. Visual Language

## 2.1 Overall feel

Use:

- Clean
- Light
- Spacious
- Rounded
- Soft
- Quiet
- Content-focused
- Pastel accents
- Minimal shadows
- High readability

Avoid:

- Heavy gradients
- Excessive glassmorphism
- Thick borders
- Strong drop shadows
- Dense dashboards
- Excessive animations
- Large decorative illustrations inside the workspace
- More than one strong accent color competing on a screen

---

# 3. Color System

## 3.1 Application UI colors

These are the base UI tokens. They are intentionally neutral so the colorful notes remain visually important.

### Light theme

| Token | Hex | Usage |
|---|---|---|
| `--color-background` | `#FFFFFF` | Main application background |
| `--color-surface` | `#FFFFFF` | Cards, dialogs, popovers |
| `--color-surface-subtle` | `#F8F9FA` | Secondary surfaces |
| `--color-surface-hover` | `#F1F3F4` | Hover backgrounds |
| `--color-surface-active` | `#E8EAED` | Active/pressed surfaces |
| `--color-border` | `#DADCE0` | Dividers and subtle borders |
| `--color-text-primary` | `#202124` | Main text |
| `--color-text-secondary` | `#5F6368` | Supporting text |
| `--color-text-tertiary` | `#80868B` | Metadata/placeholders |
| `--color-icon` | `#5F6368` | Default icons |
| `--color-icon-active` | `#202124` | Active icons |
| `--color-primary` | `#1A73E8` | Primary interaction |
| `--color-primary-hover` | `#1769D2` | Primary hover |
| `--color-primary-soft` | `#E8F0FE` | Selected/soft primary surface |
| `--color-focus` | `#1A73E8` | Keyboard focus |
| `--color-success` | `#188038` | Success |
| `--color-warning` | `#F9AB00` | Warning |
| `--color-error` | `#D93025` | Error |
| `--color-info` | `#1A73E8` | Informational state |

### Product accent

If the application needs a branded blue:

- Primary: `#1A73E8`
- Primary dark: `#1557B0`
- Primary light: `#E8F0FE`
- Primary text-on-color: `#FFFFFF`

Do not turn the entire interface blue. Blue is an interaction accent, not the main page background.

---

# 4. Google Keep-Inspired Note Palette

Google Keep is strongly associated with soft, colorful note backgrounds. The palette below is suitable for reproducing that visual language.

| Name | Hex | Recommended use |
|---|---|---|
| Default / White | `#FFFFFF` | Normal notes |
| Red | `#F28B82` | Urgent / important |
| Orange | `#FBBC04` | Shopping / action |
| Yellow | `#FFF475` | Ideas / quick notes |
| Green | `#CCFF90` | Work / completed |
| Teal | `#A7FFEB` | Personal / creative |
| Cyan | `#CBF0F8` | Information |
| Blue | `#AECBFA` | Study / technical |
| Purple | `#D7AEFB` | Projects |
| Pink | `#FDCFE8` | Personal |
| Brown | `#E6C9A8` | Miscellaneous |
| Gray | `#E8EAED` | Neutral |

### Color rules

- Colors are **categorization aids**, not decoration.
- Never use a saturated note color for body text.
- Use dark neutral text on light note backgrounds.
- Preserve readable contrast.
- Do not require color alone to communicate meaning.
- Selected colors should have a visible check/icon indicator.
- White/default notes should still have enough boundary definition.

Google Keep officially supports changing note colors/backgrounds, and current help documentation confirms color and background customization as a core organization feature.

---

# 5. Dark Theme

The application can support dark mode, but the default product experience should remain light.

### Dark UI tokens

| Token | Hex |
|---|---|
| `--dark-background` | `#202124` |
| `--dark-surface` | `#292A2D` |
| `--dark-surface-hover` | `#303134` |
| `--dark-border` | `#3C4043` |
| `--dark-text-primary` | `#E8EAED` |
| `--dark-text-secondary` | `#BDC1C6` |
| `--dark-text-tertiary` | `#9AA0A6` |
| `--dark-icon` | `#BDC1C6` |
| `--dark-primary` | `#8AB4F8` |

### Dark note colors

Do not use the exact light palette at full brightness in dark mode.

Suggested dark equivalents:

| Name | Hex |
|---|---|
| Red | `#5C2B29` |
| Orange | `#5F3A00` |
| Yellow | `#5F4B00` |
| Green | `#394A24` |
| Teal | `#164C45` |
| Cyan | `#21434A` |
| Blue | `#2D3F5F` |
| Purple | `#49335F` |
| Pink | `#5A3547` |
| Brown | `#4A3A2B` |
| Gray | `#3C4043` |

---

# 6. Typography

## Font

Preferred:

**Roboto**

Fallback:

```text
Roboto, Arial, sans-serif
```

If the application already has a strong product font, use it consistently instead of mixing several fonts.

## Type scale

| Role | Size | Weight | Line height |
|---|---:|---:|---:|
| Display | 36px | 400 | 44px |
| Page title | 28px | 400 | 36px |
| Section title | 22px | 500 | 28px |
| Card title | 16px | 500 | 24px |
| Body | 14px | 400 | 20px |
| Body large | 16px | 400 | 24px |
| Label | 12px | 500 | 16px |
| Caption | 11px | 400 | 16px |
| Button | 14px | 500 | 20px |

### Typography rules

- Avoid all-caps headings.
- Avoid extremely bold typography.
- Use `500` for emphasis before using `700`.
- Titles should remain short.
- Metadata should be smaller and lower contrast.
- Never use light gray for important content.

---

# 7. Spacing System

Use a 4px base grid.

| Token | Size |
|---|---:|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-7` | 28px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |

### Rules

- Default component internal padding: `12px–16px`.
- Main content gutter: `24px` desktop.
- Mobile gutter: `16px`.
- Use `8px` between tightly related elements.
- Use `16px` between normal component groups.
- Use `24px–32px` between major sections.

---

# 8. Border Radius

The interface should feel rounded but not childish.

| Token | Radius | Usage |
|---|---:|---|
| `radius-none` | 0px | Rarely used |
| `radius-sm` | 4px | Small utility surfaces |
| `radius-md` | 8px | Inputs, compact controls |
| `radius-lg` | 12px | Cards |
| `radius-xl` | 16px | Large cards/dialogs |
| `radius-2xl` | 20px | Prominent surfaces |
| `radius-full` | 9999px | Pills, avatars, circular buttons |

### Default rules

- Note cards: `12px`
- Dialogs: `16px`
- Search bar: `28px–32px`
- Buttons: `20px–24px`
- Chips: `9999px`
- Avatar: `50%`
- Icon buttons: circular or `50%`
- Tooltips: `4px–8px`

Do not use `rounded-full` for large cards.

---

# 9. Borders

Default approach:

**No visible border unless it improves separation.**

When borders are required:

```text
1px solid #DADCE0
```

Dark mode:

```text
1px solid #3C4043
```

Avoid:

- 2px card borders
- colored borders around every card
- heavy outlines
- double borders

For colored notes, the background color should create the visual separation.

---

# 10. Shadows / Elevation

Keep shadows extremely subtle.

### Elevation levels

```text
elevation-0:
none

elevation-1:
0 1px 2px rgba(60, 64, 67, 0.15)

elevation-2:
0 2px 6px rgba(60, 64, 67, 0.15)

elevation-3:
0 4px 12px rgba(60, 64, 67, 0.18)

elevation-dialog:
0 8px 24px rgba(60, 64, 67, 0.20)
```

### Rules

- Normal note: mostly `elevation-0` or extremely subtle shadow.
- Hovered note: `elevation-1`.
- Popover: `elevation-2`.
- Dialog: `elevation-dialog`.
- Never use huge shadows.

---

# 11. Icons

## Icon style

Use:

**Material Symbols Rounded** or another consistent rounded outline icon family.

Recommended characteristics:

- 20–24px default size
- Rounded geometry
- Consistent stroke/weight
- Neutral gray by default
- Blue only for active/selected states

### Core navigation icons

| Action | Icon |
|---|---|
| Menu | `menu` |
| Search | `search` |
| Notes | `lightbulb` |
| Reminders | `notifications` |
| Labels | `label` |
| Archive | `archive` |
| Trash | `delete` |
| Settings | `settings` |
| Help | `help` |
| Account | `account_circle` |

### Note action icons

| Action | Icon |
|---|---|
| Pin | `push_pin` |
| Palette | `palette` |
| Add image | `image` |
| Archive | `archive` |
| More | `more_vert` |
| Delete | `delete` |
| Restore | `restore_from_trash` |
| Reminder | `notifications` |
| Collaborator | `person_add` |
| Checklist | `check_box` |
| Drawing | `draw` |
| Undo | `undo` |
| Redo | `redo` |
| Close | `close` |
| Back | `arrow_back` |
| Check / Done | `check` |
| Drag | `drag_indicator` |
| Copy | `content_copy` |
| Share | `share` |
| Link | `link` |

### Icon sizing

```text
16px — compact metadata
20px — small controls
24px — standard controls
28px — prominent actions
32px+ — empty-state illustration/icon only
```

### Icon button

Default:

```text
40px × 40px
border-radius: 50%
icon: 20–24px
```

Touch-friendly mobile:

```text
44px × 44px minimum
```

Never put text labels inside an icon button unless necessary.

---

# 12. Logo / Branding

Do not reproduce the Google Keep logo.

Create an original product logo using:

- Simple geometric form
- One primary brand color
- Minimal visual complexity
- Same visual weight as the navigation icons

Recommended logo area:

```text
Desktop: 32–40px icon
Mobile: 32px icon
```

Product name:

```text
16–20px
font-weight: 500
```

---

# 13. Layout

## Desktop shell

Recommended structure:

```text
┌───────────────────────────────────────────────────────────────┐
│ Menu │ Logo / Product │ Search                         │ User │
├──────┴─────────────────────────────────────────────────────────┤
│ Sidebar │                    Main Content                      │
│         │                                                       │
│ Notes   │             Page title / controls                    │
│ Remind. │                                                       │
│ Labels  │            ┌──────┐ ┌──────┐ ┌──────┐               │
│ Archive │            │ Note │ │ Note │ │ Note │               │
│ Trash   │            └──────┘ └──────┘ └──────┘               │
│         │                                                       │
└─────────┴───────────────────────────────────────────────────────┘
```

## Header

Height:

```text
64px
```

Elements:

- Menu icon
- Product logo/name
- Search
- Optional view/sort/settings controls
- User avatar

Header should remain visually quiet.

---

# 14. Search Bar

The search bar is a primary interaction.

### Desktop

```text
Width: 360–720px
Height: 48–56px
Radius: 28px
Background: #F1F3F4
```

### Contents

```text
Search icon
Placeholder
Search query
Filter button
Clear button when active
```

### Focus

On focus:

- Surface becomes white
- Subtle shadow
- Blue focus indication
- Do not create a thick blue border

### Search UX

Support:

- Text search
- Labels
- Colors
- Note type
- Reminders
- Shared notes
- Date/time where relevant

Google Keep's search supports text and filters such as note type, labels, people, and colors. Use this as the interaction model rather than forcing users to navigate manually through every category.

---

# 15. Sidebar

## Desktop

Width:

```text
256px expanded
72px collapsed
```

Items:

```text
Notes
Reminders
Labels
Archive
Trash
```

Optional secondary:

```text
Settings
Help / Feedback
```

### Sidebar item

```text
height: 48px
padding: 0 16px
radius: 0 24px 24px 0
```

Icon:

```text
24px
```

Label:

```text
14px
```

### Active state

```text
background: #E8F0FE
text: #174EA6
icon: #174EA6
```

Do not make the active item heavily saturated.

---

# 16. Main Notes Grid

## Grid behavior

Use responsive masonry-like cards or CSS grid.

Desktop:

```text
3–5 columns depending on viewport
```

Tablet:

```text
2–3 columns
```

Mobile:

```text
1 column
```

Recommended gap:

```text
16px
```

Do not make cards touch each other.

---

# 17. Note Card

## Structure

```text
┌──────────────────────────────┐
│ Title                    📌  │
│                              │
│ Note content preview...      │
│                              │
│ ☐ Task one                   │
│ ☐ Task two                   │
│                              │
│ #label     #project          │
│                              │
│ [actions appear on hover]   │
└──────────────────────────────┘
```

## Dimensions

Suggested:

```text
min-width: 240px
max-width: 320px
padding: 16px
radius: 12px
```

Height:

**Content-driven.**

Do not force every note to have the same height.

## Card behavior

Default:

- No strong border
- Minimal shadow
- Actions hidden or muted

Hover:

- Slight elevation
- Action buttons appear
- Pin remains visible if pinned

Selected:

- Subtle primary outline or surface change
- Checkbox/check indicator

---

# 18. Note Card Content Hierarchy

Order:

1. Pin / important state
2. Title
3. Main content
4. Checklist
5. Image/media
6. Labels
7. Reminder/collaborator metadata
8. Actions

Title:

```text
16px / 500
```

Body:

```text
14px / 400
```

Metadata:

```text
11–12px / 400
```

Do not show every metadata field simultaneously.

---

# 19. Create Note UX

The primary capture surface should be compact.

Example:

```text
┌───────────────────────────────────────────┐
│ Take a note...                         +  │
└───────────────────────────────────────────┘
```

When opened:

```text
┌───────────────────────────────────────────┐
│ Title                                     │
│                                           │
│ Take a note...                            │
│                                           │
│                                           │
│ 📌  🔔  🎨  🖼  👤                 ⋮   ✓ │
└───────────────────────────────────────────┘
```

Actions:

- Pin
- Reminder
- Color/background
- Image
- Collaborator
- More
- Close/save

The editor should feel like an expanded card, not a separate complicated page.

---

# 20. Checklist UX

Checklist items should be visually simple.

```text
☐ Buy milk
☐ Finish project
☑ Submit assignment
```

Completed item:

- Checkbox filled/checked
- Text gets strikethrough
- Text opacity reduced
- Do not hide completed items automatically

Interaction:

- Clicking checkbox toggles completion.
- Clicking text edits the item.
- Enter creates the next item.
- Backspace on an empty item merges/removes it.

---

# 21. Labels / Chips

Labels should be compact pills.

```text
border-radius: 9999px
height: 24–28px
padding: 4px 10px
font-size: 11–12px
```

Example:

```text
#work
#college
#project
```

Default:

```text
background: rgba(95,99,104,0.10)
text: #5F6368
```

Selected:

```text
background: #E8F0FE
text: #174EA6
```

Do not use large colorful chips for every label.

---

# 22. Pinning

Pinned notes appear in a dedicated top section.

```text
PINNED
────────────────────────────

[notes]

OTHER NOTES
────────────────────────────

[notes]
```

The pin icon should be small and visually secondary.

Pinning should change ordering, not dramatically change card design.

Google Keep explicitly supports pinning important notes to the top of the feed.

---

# 23. Archive

Archive should remove the note from the main notes feed without deleting it.

UX:

```text
Archive action
      ↓
Note disappears from Notes
      ↓
Available in Archive
```

Do not show a large confirmation dialog for normal archive actions.

Use a toast:

```text
Note archived     Undo
```

---

# 24. Trash

Deletion should be more deliberate than archive.

Preferred:

```text
Delete
  ↓
Toast / undo window
  ↓
Trash
```

Permanent deletion should require confirmation.

Dangerous actions use:

```text
#D93025
```

Never use red for normal destructive-adjacent actions like opening a menu.

---

# 25. Toast / Snackbar

Use for short-lived feedback.

Example:

```text
┌─────────────────────────────────────┐
│ Note archived                  Undo │
└─────────────────────────────────────┘
```

Style:

```text
min-height: 48px
radius: 8px
padding: 12px 16px
elevation: 2
```

Duration:

```text
3–5 seconds
```

Allow an immediate Undo action for reversible operations.

---

# 26. Dialogs

Use dialogs for:

- Permanent deletion
- Important destructive confirmations
- Label management
- Account/security actions
- Complex settings

Do NOT use dialogs for:

- Normal note creation
- Simple color selection
- Archive
- Pin
- Routine editing

### Dialog

```text
width: 320–560px
padding: 24px
radius: 16px
```

Actions aligned to the bottom/right.

Primary action:

```text
Blue
```

Destructive primary action:

```text
Red
```

---

# 27. Popovers / Menus

Use for contextual actions.

Examples:

```text
⋮
 ├─ Add label
 ├─ Add drawing
 ├─ Make a copy
 ├─ Copy to document
 └─ Delete
```

Menu:

```text
min-width: 200px
padding: 8px 0
radius: 8px
elevation: 2
```

Menu item:

```text
height: 40–48px
padding: 0 16px
```

Hover:

```text
#F1F3F4
```

---

# 28. Color Picker

Use circular swatches.

```text
○ ○ ○ ○ ○ ○
○ ○ ○ ○ ○ ○
```

Swatch:

```text
32px desktop
36–40px touch
border-radius: 50%
```

Selected:

- Check icon
- subtle outline

Do not rely only on a border because white needs a visible boundary.

---

# 29. Tooltips

Use tooltips for unfamiliar icon-only controls.

Example:

```text
Hover → "Archive"
```

Style:

```text
background: #3C4043
text: #FFFFFF
font-size: 12px
radius: 4px
padding: 6px 8px
```

Delay:

```text
~500ms
```

Do not tooltip obvious text buttons.

---

# 30. Buttons

## Primary

```text
height: 40px
padding: 0 20px
radius: 20px
background: #1A73E8
color: #FFFFFF
font-size: 14px
font-weight: 500
```

## Secondary

```text
height: 40px
padding: 0 20px
radius: 20px
background: transparent
border: 1px solid #DADCE0
```

## Text button

```text
height: 40px
padding: 0 12px
radius: 20px
```

## Icon button

```text
40 × 40px
radius: 50%
```

Mobile:

```text
44 × 44px minimum
```

---

# 31. Floating Action Button

A FAB is optional.

If used:

```text
56 × 56px
radius: 16px
```

Use it for:

```text
+ New note
```

Avoid a FAB if the top create-note surface already provides an obvious primary action.

Do not have two competing "create note" buttons.

---

# 32. Empty States

Keep empty states minimal.

Example:

```text
             ✦

          No notes yet

Create your first note to get started.

          + Create note
```

Rules:

- Small icon/illustration
- Short title
- One sentence
- One action
- Large whitespace

Do not fill the page with decorative artwork.

---

# 33. Loading States

Prefer skeletons over spinners for content loading.

Skeleton:

```text
┌────────────────────┐
│ ███████████        │
│ ███████████████    │
│ ███████            │
└────────────────────┘
```

Use:

```text
#F1F3F4
```

with subtle animated shimmer.

Do not display a spinner for every small interaction.

---

# 34. Error States

Errors should be:

- Specific
- Short
- Actionable

Bad:

```text
Something went wrong.
```

Better:

```text
Couldn't save this note.
Check your connection and try again.
```

Action:

```text
Try again
```

Use red only for the error indicator/action.

---

# 35. Interaction States

Every interactive component must define:

```text
Default
Hover
Focus
Pressed
Selected
Disabled
Loading
Error
Success
```

### Hover

Use subtle surface changes.

```text
#F1F3F4
```

### Focus

Use a visible blue focus ring.

```text
outline: 2px solid #1A73E8
outline-offset: 2px
```

### Pressed

Slightly darker surface.

### Disabled

```text
opacity: 0.38–0.50
```

Never rely only on opacity if the control must remain accessible.

---

# 36. Hover Behavior

Desktop:

- Reveal note actions on hover.
- Show tooltips after delay.
- Slightly elevate hovered cards.
- Do not move the card.

Mobile:

- No hover-dependent functionality.
- All essential actions must be accessible through tap/menu.

---

# 37. Selection UX

For multi-select:

1. User clicks/taps selection checkbox.
2. Card gets selected.
3. Contextual toolbar appears.
4. Toolbar exposes bulk actions.

Example:

```text
┌────────────────────────────────────────────────┐
│ 3 selected   🎨  Archive  Delete  ⋮           │
└────────────────────────────────────────────────┘
```

Bulk actions:

- Archive
- Delete
- Change color
- Add label
- Pin
- More

Google Keep supports selecting multiple notes and applying operations such as color changes.

---

# 38. Drag and Drop

Use only where it provides real value.

Possible uses:

- Reordering checklist items
- Reordering labels
- Custom note ordering

Drag handle:

```text
drag_indicator
```

During drag:

- Increase elevation.
- Slightly reduce opacity of the original position.
- Show insertion indicator.

Never make drag-and-drop the only way to reorder something.

---

# 39. Responsive Breakpoints

```text
Mobile:
0–767px

Tablet:
768–1023px

Desktop:
1024–1439px

Large desktop:
1440px+
```

### Mobile

- Sidebar becomes drawer.
- One-column notes.
- Search becomes full-width/expandable.
- Controls become 44px touch targets.
- Hide secondary text where appropriate.

### Tablet

- Collapsed sidebar.
- 2–3 note columns.

### Desktop

- Expanded sidebar.
- 3–5 note columns.
- Hover interactions enabled.

---

# 40. Mobile Navigation

Use a drawer rather than permanent desktop sidebar.

Drawer:

```text
width: 280px
```

Overlay:

```text
rgba(0,0,0,0.32)
```

Navigation order:

```text
Notes
Reminders
Labels
Archive
Trash

────────────

Settings
Help
```

---

# 41. Keyboard UX

Important shortcuts:

```text
N              New note
/              Focus search
Escape         Close dialog/popover
Ctrl/Cmd + K   Search / command action
Ctrl/Cmd + Enter
               Save/finish where appropriate
```

The exact shortcuts can be adjusted to avoid browser conflicts.

Keyboard focus must always remain visible.

---

# 42. Accessibility

Minimum requirements:

- WCAG-conscious contrast.
- Visible keyboard focus.
- Semantic buttons.
- Semantic headings.
- Proper form labels.
- `aria-label` for icon-only buttons.
- Keyboard navigation.
- Screen-reader-friendly status messages.
- Do not communicate meaning with color alone.
- Minimum touch target around `44 × 44px` on mobile.

Material Design accessibility guidance emphasizes sufficient contrast, clear hierarchy, visible feedback, and usable focus/navigation.

---

# 43. Motion

Motion should be subtle and functional.

### Duration

```text
fast: 120ms
normal: 180ms
slow: 240ms
```

### Easing

```text
ease-out for entering
ease-in for exiting
ease-in-out for transformations
```

Use animation for:

- Opening dialogs
- Opening sidebars
- Toast appearance
- Card elevation
- Menu appearance
- Dragging

Avoid:

- Bouncing cards
- Excessive parallax
- Large page transitions
- Constant animation
- Decorative movement

Respect:

```text
prefers-reduced-motion
```

---

# 44. Z-Index Layers

Use a predictable system:

```text
base:       0
cards:      1
sticky:     10
header:     20
dropdown:   30
popover:    40
drawer:     50
overlay:    60
dialog:     70
toast:      80
tooltip:    90
```

Do not randomly assign z-index values throughout the application.

---

# 45. Images and Attachments

Images inside notes should:

- Respect the card radius.
- Never overflow the card.
- Use `object-fit: cover` for preview thumbnails.
- Open in a larger viewer when clicked.

Recommended radius:

```text
8–12px
```

Attachment metadata should remain subtle.

---

# 46. User Avatar

Default:

```text
32–40px
border-radius: 50%
```

Online/status indicator:

```text
8px circle
```

Do not use large profile blocks in the main workspace.

---

# 47. Collaboration UX

Collaborators should appear as:

```text
small overlapping avatars
```

Example:

```text
◯ ◯ ◯ +2
```

Hover/click:

```text
Show collaborators
```

Shared state should be recognizable but subtle.

Do not put large collaborator panels inside every note.

Google Keep supports collaboration on notes, lists, drawings, images, and audio, so collaboration should be treated as a note-level capability rather than a separate workspace.

---

# 48. Reminder UX

Reminder metadata can appear as a small pill/chip:

```text
🔔 Tomorrow, 9:00 AM
```

Style:

```text
font-size: 11–12px
radius: 9999px
background: rgba(...)
```

Reminder creation should be a small popover rather than a large page.

---

# 49. Search Results UX

Search screen:

```text
Search
────────────────────────────

Filters
[All] [Labels] [Color] [Type]

Results

[Note]
[Note]
[Note]
```

If no result:

```text
No matching notes

Try another search term or remove a filter.
```

Do not show an empty white screen.

---

# 50. Sorting

Optional sort control:

```text
Custom
Last modified
Date created
```

Show sorting in a compact menu.

Do not permanently occupy large UI space with sort controls.

Google Keep supports custom ordering and date-created/date-modified sorting.

---

# 51. Contextual Toolbar

When selecting notes:

```text
┌─────────────────────────────────────────────┐
│ ←  4 selected    Pin  Label  Archive  ⋮    │
└─────────────────────────────────────────────┘
```

The toolbar should replace unnecessary header actions temporarily.

This is preferable to showing every bulk action all the time.

---

# 52. UX Rules — Must Follow

### Rule 1
One primary action per screen.

### Rule 2
Do not hide critical functionality behind hover.

### Rule 3
Do not use more than one strong visual accent at a time.

### Rule 4
Use icons consistently.

### Rule 5
Use labels where an icon could be ambiguous.

### Rule 6
Prefer inline editing over navigation.

### Rule 7
Prefer undo over confirmation for reversible actions.

### Rule 8
Use confirmation for irreversible actions.

### Rule 9
Keep secondary information visually quiet.

### Rule 10
Do not make every card look interactive until hovered.

### Rule 11
Do not overuse rounded-full elements.

### Rule 12
Do not overuse shadows.

### Rule 13
Never make color the only indicator of state.

### Rule 14
Keep the interface usable with keyboard only.

### Rule 15
Mobile must never depend on hover.

---

# 53. Component Naming

Recommended React component structure:

```text
AppShell
Header
SearchBar
Sidebar
SidebarItem

NotesPage
NotesGrid
NoteCard
NoteEditor
NoteTitle
NoteContent
Checklist
ChecklistItem
NoteLabels
NoteActions
NoteToolbar

ColorPicker
LabelPicker
ReminderPicker
CollaboratorPicker

ContextMenu
Popover
Dialog
Toast
Tooltip

EmptyState
LoadingSkeleton
ErrorState
Avatar
AvatarGroup
```

---

# 54. Design Tokens — CSS

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-surface-subtle: #f8f9fa;
  --color-surface-hover: #f1f3f4;
  --color-surface-active: #e8eaed;

  --color-border: #dadce0;

  --color-text-primary: #202124;
  --color-text-secondary: #5f6368;
  --color-text-tertiary: #80868b;

  --color-icon: #5f6368;
  --color-icon-active: #202124;

  --color-primary: #1a73e8;
  --color-primary-hover: #1769d2;
  --color-primary-soft: #e8f0fe;

  --color-success: #188038;
  --color-warning: #f9ab00;
  --color-error: #d93025;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 20px;
  --radius-full: 9999px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  --shadow-1: 0 1px 2px rgba(60, 64, 67, 0.15);
  --shadow-2: 0 2px 6px rgba(60, 64, 67, 0.15);
  --shadow-3: 0 4px 12px rgba(60, 64, 67, 0.18);

  --header-height: 64px;
  --sidebar-width: 256px;
  --sidebar-collapsed-width: 72px;
}
```

---

# 55. Tailwind Mapping

If Tailwind CSS is used:

```text
rounded-md     → 8px
rounded-lg     → 12px
rounded-xl     → 16px
rounded-2xl    → 20px
rounded-full   → pills/circles only

p-2            → 8px
p-3            → 12px
p-4            → 16px
p-6            → 24px
p-8            → 32px

gap-2          → 8px
gap-3          → 12px
gap-4          → 16px
gap-6          → 24px
```

Do not automatically use `rounded-full` everywhere.

---

# 56. Recommended Screen Architecture

## Landing page

Keep it minimal:

```text
Navbar
Hero
Short product explanation
Feature highlights
Simple visual/product preview
CTA
Footer
```

Do not reproduce the Google Keep marketing site.

---

## Application dashboard

```text
Header
 ├─ Menu
 ├─ Logo
 ├─ Search
 └─ Account

Sidebar
 ├─ Notes
 ├─ Reminders
 ├─ Labels
 ├─ Archive
 └─ Trash

Main
 ├─ Create note
 ├─ Pinned
 └─ Notes grid
```

---

# 57. Recommended Note Editor

Desktop:

```text
┌─────────────────────────────────────────────────────┐
│ Title                                               │
│                                                     │
│ Note content...                                     │
│                                                     │
│ ☐ Checklist item                                    │
│                                                     │
│                                                     │
│ 🔔  🎨  🖼  👤                         ⋮       ✓  │
└─────────────────────────────────────────────────────┘
```

Mobile:

```text
┌──────────────────────────────┐
│ ←                       ✓    │
│                              │
│ Title                        │
│                              │
│ Note content...              │
│                              │
│                              │
│ 🔔 🎨 🖼 👤              ⋮  │
└──────────────────────────────┘
```

---

# 58. What NOT To Do

Do not create:

- Huge dashboard cards
- Excessive gradients
- Neon colors
- Heavy glassmorphism
- Excessive animations
- Huge sidebar
- 10 different button styles
- Multiple font families
- Random icon libraries
- Giant rounded containers
- Cards with thick borders
- Full-screen modals for simple actions
- Hover-only actions on mobile
- Tiny mobile controls
- Excessive empty-state illustrations
- Colorful UI chrome competing with colorful notes

---

# 59. Design Priority Order

When making a design decision, prioritize in this order:

```text
1. Usability
2. Readability
3. Information hierarchy
4. Accessibility
5. Consistency
6. Speed of interaction
7. Visual polish
8. Decoration
```

Never sacrifice usability for visual similarity.

---

# 60. Final Design Personality

The finished application should feel like:

> **A calm digital notebook that users can understand instantly.**

Visual keywords:

```text
Clean
Minimal
Soft
Rounded
Pastel
Fast
Friendly
Quiet
Organized
Modern
Productive
```

The user should be able to open the application and immediately know:

```text
Where am I?
→ Notes

What can I do?
→ Create / search / organize

Where are my important notes?
→ Pinned

How do I organize?
→ Labels + colors

How do I find something?
→ Search

How do I undo a mistake?
→ Undo / Trash
```

---

# 61. Reference Research

This design system is informed by publicly documented Google Keep behavior and Google's Material Design guidance.

- Google Keep Help — organizing notes: labels, colors, pins, archive-related workflows.
- Google Keep Help — creating/editing notes and lists.
- Google Keep Help — search and filters.
- Google Keep Help — collaboration.
- Material Design — color, contrast, hierarchy, states, and accessibility.

Primary references:

- https://support.google.com/keep/answer/6191044
- https://support.google.com/keep/answer/2888240
- https://support.google.com/keep/answer/2888263
- https://support.google.com/keep/answer/6101196
- https://m1.material.io/style/color.html
- https://m1.material.io/usability/accessibility.html

---

# 62. Implementation Rule for Antigravity

When implementing this design:

1. Read this file before creating UI components.
2. Treat the color, spacing, radius, typography, shadow, and icon values as design tokens.
3. Do not invent additional styles unless necessary.
4. Reuse components instead of creating one-off variants.
5. Keep the UI light and content-focused.
6. Use the note palette consistently.
7. Use rounded corners intentionally.
8. Use shadows sparingly.
9. Keep primary actions obvious.
10. Test desktop, tablet, and mobile.
11. Test keyboard navigation.
12. Test empty, loading, error, selected, disabled, and hover states.
13. Do not copy Google's proprietary branding or logo.
14. The final UI should feel **inspired by Google Keep's UX philosophy while remaining an original product.**

---

## Design acceptance checklist

Before considering a screen finished:

- [ ] Correct typography
- [ ] Correct spacing scale
- [ ] Correct border radius
- [ ] Correct icon size
- [ ] Correct icon family
- [ ] Correct color token
- [ ] Correct hover state
- [ ] Correct focus state
- [ ] Correct disabled state
- [ ] Correct loading state
- [ ] Correct empty state
- [ ] Correct error state
- [ ] Mobile responsive
- [ ] Keyboard accessible
- [ ] No unnecessary decoration
- [ ] No excessive shadows
- [ ] No excessive rounded-full elements
- [ ] Primary action is obvious
- [ ] Content remains the visual focus
