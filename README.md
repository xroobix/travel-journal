# Travel Journal in React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Requirements

- Data array in a separate .js file
- Title, description, price, cover image, rating, review count, location, open spots
- Use .map() and props
- Style & polished
- Mobile only designed

### Links

[Figma Design](https://www.figma.com/file/QG4cOExkdbIbhSfWJhs2gs/Travel-Journal)



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