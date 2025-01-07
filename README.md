# Mortgage repayment calculator solution

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Links

[LIVE:DEMO](https://miron-silviu.github.io/Mortgage-repayment-calculator/)

## Screenshot

![desktop](desktop-design-empty.jpg)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

## What I learned

Building this project I learned:

1- How to semantic define HTML elements, by building blocks of codes for header, main and footer.
2- Creating style.css I learned how to use css object oriented, mobile first apporch, BEM and implement the DRY principle.
3-Using the latest javaScript principles I created the main algorithm to calculate the entire mortgage, meaning that every time when the user select one of the radio button the algorithm calculte accordngly.

To see how you can add code snippets, see below:

```html
<form action="get">
  <fieldset>
    <label for="amount">Mortgage Amount</label>
    <input type="text" id="amount" name="mortgage" value="£" />
    <label for="team">Mortgage Team</label>
    <input type="text" id="team" name="years" value="years" />
    <label for="rate">Interest Rate</label>
    <input type=" text" id="interest" name="rate" value="%" />
  </fieldset>
</form>
```

```css
.proud-of-this-css {
  .amount_label,
  .team_label,
  .interest_rate_label {
    color: var(--Slate-100);
    font-weight: 500;
    font-size: 1rem;
    margin: 1rem 0 0.5rem 0;
  }
}
```

```js
const proudOfThisFunc = () => {
  console.log('🎉');
};
```

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [Silviu Miron](https://www.frontendmentor.io/home)
- Twitter - [Silviu Miron](https://x.com/home)
