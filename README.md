# Travel Journal in React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Requirements

- Data array in a separate .js file
- Title, locatiion, Google Maps link, start date, end date, description, image url
- Use .map() and props
- Style & polished
- Mobile only designed

### Links

- Live Site Preview: [@Netlify](https://roob-travel-journal.netlify.app)
- Figma Design Link: [@Figma](https://www.figma.com/file/QG4cOExkdbIbhSfWJhs2gs/Travel-Journal)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- React.JS
- Flexbox

### What I learned

- This is my way to display dynamic divider between components but not on the first and last one:

```css
.journals > .journal + .journal {
  border-top: 1px solid #F5F5F5;
}

.journals .journal:first-child {
  padding-top: 0;
}

.journals .journal:last-child {
  padding-bottom: 0;
}
```
