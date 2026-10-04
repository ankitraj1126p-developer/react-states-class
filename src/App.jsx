// import Counter from "./counter.jsx";
// import Login,{Profile,Setting} from './UserComponent.jsx';

// import ToDo from './ToDo.jsx';

// function App() {

//   return (

//     <div>
//       <Counter />

//       {/* <Fruits/> */}

//       <Login />
//       <Profile />
//       <Setting />

//       <ToDo/>

//       <h1>Importing and Exporting Components</h1>

//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Consequuntur consequatur sint voluptates iure adipisci sunt
//         eaque impedit obcaecati quasi, numquam accusamus voluptas
//         dolor libero quia aliquid nemo iusto pariatur asperiores.
//       </p>

//       {/* <h3>Header File</h3> */}

//     </div>
//   );
// }


// function Fruits(){
//   return(
//     <h2>Mango</h2>
//   )
// }

// export default App;

// HOOKS

import Counter from "./counter.jsx";
import { useState } from 'react';
import LikeButton from './LikeButton.jsx';

function App() {

  const [fruit, setFruit] = useState('Apple');

  const handleFruit = () => {
    setFruit("Mango");
    console.log("Mango");
  };

  return (
    <div>
      <h2>State in React</h2>

      {/* <h1>{fruit}</h1>

      <button onClick={handleFruit}>
        Change Fruit Name
      </button> */}

    
      {/* <Counter /> */}
      <LikeButton />
    </div>
  );
}

export default App;