# Exercise 2: JS + CSS Clock

> Ram kumar, Front-end Developer & asp.net developer
> Last commit Date: Mar 22, 2022

Given a web page with an analog clock created with CSS, write the
JavaScript necessary to make the clock functional. Make alterations to the CSS as necessary.

## Guide

The HTML file has 3 `div` elements which correspond with the second, minute, and hour hand on a clock

```html
<!-- ...previous elements -->
<div class="hand hour-hand"></div>
<div class="hand min-hand"></div>
<div class="hand second-hand"></div>
<!-- ...next elements -->
```

The necessary JavaScript code shouldn't be too crazy;
we'll create references to these elements and dynamically
update certain CSS properties to change their positions so they reflect the current time. Easy peasy.
