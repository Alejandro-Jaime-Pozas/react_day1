import Navbar from "./components/Navbar";

function App(props) {
    return (
        // use angled brackets to insert created elements from index.js
        <>
        <Navbar name='Alex' city='Chicago' />
        </>
    )
};

export default App;


// import Navbar from "./components/Navbar";

// function App(props) {
//   // in these App functions, they can only return one html element, but you can wrap multiple elements inside a parent div element. <div> > <h1> <p> </div>
//     // const element = <h1>Hello <b>World</b> - {Math.floor(Math.random()*2)}</h1> // == to React.createElement('h1', null, "Hello World")
//     return (
//         // use angled brackets to insert created elements from index.js
//         <>
//         {/* <Navbar /> calls the Navbar component from components folder */}
//         {/* you can then make multiple calls for one element, and manipulate elements this way */}
//         {/* for numbers you need to put in curly brackets as a JSX expression */}
//         <Navbar /> 
//         <Navbar /> 
//         <Navbar name='Alex' city='Chicago' /> 
//         <Navbar a={1} name='Jaime' city='Austin' /> 
//         </>
//     )
// };

// export default App;
