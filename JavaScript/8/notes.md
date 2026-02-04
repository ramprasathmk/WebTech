# Units in CSS

### Absolute Units

- px
- cm
- mm
- pt
  **NOTE:** other than `px` we don't use any other units.

### Relative Units

- rem
- em
- %
- vh
- vw
- vmin
- vmax
  **NOTE:** rem & em stands 16px.

---

## Media Queries

It is used to create responsive layout for different devices

### Basic Syntax:

```css
@media (max-width:500px) {
    css styles here
}
```

### Full Syntax:

```css
@media deviceType (screen width) and (orientation) {
    css styles here
}
```

**Example:**

```css
@media all (min-width:501px) and (orientation:landscape) {
    css styles here
}
```

**NOTE:**

1. Device Type: screen, print, all
2. Orientation: Potrait & landscape

### Units

- **Absolute:**

  - px
  - cm
  - mm
  - pt

- **Relative:**

  - rem
  - em
  - %
  - vh
  - wh
  - vmin
  - vmax

  `rem, em - 16px`

  1. rem - depends on root (html)
  2. em - depends on parent element (div)
  3. % - depends on parent
  4. vh - screen height (viewport height)
  5. vw - screen width (viewport width)
  6. vmin - between screen width & height which is minimum it will take that value.
  7. vmax - between screen width & height which is maximum it will take that value.
