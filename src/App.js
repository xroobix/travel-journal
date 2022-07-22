import './App.css';
import Header from './Header'
import Journal from './Journal'
import data from './data'

function App() {
  const journal = data.map(item =>{
    return(
        <Journal 
          key={item.title}
          {...item}
        />
      )
  })
  return (
    <div className="App">
      <Header />
      <section className="journals">
        {journal}
      </section>
    </div>
  );
}

export default App;
