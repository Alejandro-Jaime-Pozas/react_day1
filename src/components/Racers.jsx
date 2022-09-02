import React from 'react'
import { useState, useEffect } from 'react';

// Essentially, in order to display f1 driver standings for a given season and round, every time a user submits a new year and round, you have to
    /*  fetch that data from the API
        display that new data once wo re-rendering entire website
        take another input to display as next data and change current data to next data
    */


export default function Racers(props) {
    
    const [racers, setRacers] = useState([]);

    const [season, setSeason] = useState(1950);
    const [round, setRound] = useState(0);

    // BOTH USEEFFECT AND HANDLERACERSUBMIT USE THE SEASON AND ROUND, BUT USEFFECT ADDITIONALY TAKES IN RACERS, BUT NEITHER OF THE TWO ARE CONNECTED TO EACH OTHER, THEY BRANCH DOWN FROM SEASON, ROUND, AND/OR RACERS STATES

    // create an effect -> fn to execute after every render on website fetching api data
    // IS THIS DIRECTLY CALLING USEFFECT FN? yes
    useEffect(() => {
        // console.log('useEffect callback executed')
        fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                // console.log(racerStandings)
                setRacers(racerStandings);
            })
    }, [season, round]); // this list [season, round] only runs if the variables have changed above, since to fill the table we only need the same season and round for each query, we insert season, round to indicate that the state will not be changed for those variables, which are fetched in the API; once there is another submit, season and round change, so there is a re-render since they are not equal to values in fetch


    // THIS FN REPRESENTS A CHANGE IN THE STATE OF RACERS, IT WILL TAKE INPUTS FROM USER AND CHANGE THE STATE FROM A PREVIOUS STATE, TO A NEW STATE. IT IS NOT CONNECTED TO OR HAS ANYTHING TO DO WITH USEEFFECT.
    function handleRacerSubmit(e){
        // Prevent default of refreshing page
        e.preventDefault();
        // Get the value from the form
        // console.log(`This is a new event here is the obj ${e}:`)
        // console.log(e)
        let newSeason = e.target.season.value;
        let newRound = e.target.round.value;
        // console.log(newSeason, newRound);
        setSeason(newSeason);
        if (newRound){
            setRound(newRound);
        } else{
            setRound(0)
        }
    }
    

    let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor']

    return (
        <div className='row py-3'>
            <h4 className="text-center">Driver Standings</h4>
            <form onSubmit={handleRacerSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <input className='form-control' type="text" name="season" id="" placeholder='Enter Season' />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <input className='form-control' type="text" name="round" id="" placeholder='Enter Round (Optional)' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="submit" value='Submit' className='btn btn-primary my-4' />
                    </div>
                </div>

            </form>
            <table className="table table-light table-striped">
                <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {racers.map((racer, i) => {
                    return (
                        <tr key={i}>
                            <td><b>{racer.position}</b> </td>
                            <td>{racer.Driver.givenName}</td>
                            <td>{racer.Driver.familyName}</td>
                            <td>{racer.points}</td>
                            <td>{racer.wins}</td>
                            <td>{racer.Driver.nationality}</td>
                            <td>{racer.Constructors[0].name}</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        
        </div>
    )
}
