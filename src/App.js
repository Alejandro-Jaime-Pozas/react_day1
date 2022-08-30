import { useState, useEffect } from 'react';
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Racers from './components/Racers';

function App(props) {
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ]

    // Set a state for count - initial state of 0 and setCount is function to change state value of count
    const [count, setCount] = useState(0);
    // Set a state for names - initial state of [] and setRacers is function to change state value of names
    const [racers, setRacers] = useState([]);

    // create an effect -> fn to execute after every render on website
    useEffect(() => {
        console.log('useEffect callback executed')
        fetch('https://ergast.com/api/f1/2022/1/driverStandings.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                setRacers(racerStandings);
            })
    }, []);

    // Function to be executed when a button is clicked
    function handleClick(step){
        console.log('Clicked');
        setCount(count + step);
    };

    // Function to be exectuted when the name form is submitteed
    function handleRacerSubmit(e){
        // Prevent default of refreshing page
        e.preventDefault();
        // Get the value from the form
        const name = e.target.firstName.value;
        let newNames = [...racers, name]
        // Set the state of names to be the current state of names + the new name
        setRacers(newNames)
    }

    return (
        <>
            <Navbar name='Brian' city='Chicago'/>
            <div className='container'>
                <h1 className='text-center'>Hello World</h1>
                <h3 className='text-center'>Total: {count}</h3>
                {buttons.map((b, i) => <Button color={b.color} step={b.step} key={i} handleClick={handleClick} />)}
                <Racers handleRacerSubmit={handleRacerSubmit} racers={racers} />
            </div>
        </>
    )
}

export default App;
