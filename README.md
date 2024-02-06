# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/design/screenshot.PNG)
Here is the solution I can come up with ☝️.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS 

### What I learned

I learned a lot from this challenge... From working with `display: none`, `background-image` to creating a `repeat loop` in js.

As in this part of the code, see below:

```js
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}
```
```css
body {
  background: url("/assets/images/background-pattern-desktop.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: hsl(275, 100%, 97%);
}
```

### Useful resources

- [W3Schools](https://www.w3schools.com/howto/howto_js_accordion.asp) - This site helped me make the "Accordion", and I highly recommend using it for any questions in Web Development;

## Acknowledgments

Thanks to the website [FrontendMentor.io] (https://www.frontendmentor.io/home). This provided these challenges for me to test my limits and see that I have a lot to improve on. So get in there and test your skills 😄.