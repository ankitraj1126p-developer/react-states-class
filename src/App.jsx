import Counter from "./counter.jsx";

function App() {

  return (

    <div>
      <Counter />

      <Fruits/>

      <h1>Hello, I am Alexander</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur consequatur sint voluptates iure adipisci sunt
        eaque impedit obcaecati quasi, numquam accusamus voluptas
        dolor libero quia aliquid nemo iusto pariatur asperiores.
      </p>

      {/* <h3>Header File</h3> */}

    </div>
  );
}


function Fruits(){
  return(
    <h2>Mango</h2>
  )
}




export default App;