import React, { Component } from 'react'



// THIS IS NOT A FINISHED FUNCTIONAL CLASS
////////////////////////////////////////////




// class components dont take useState nor useEffect

export default class RacersClass extends Component {
    // create a constructor (init in python) w the props init 
    constructor(props){
        console.log('racer class constructed')
        super(props);
        this.state = {
            racers: [],
            season: 2022,
            round: 1
        }
    };

    // componentDidMount, componentDidUpdate are like the useEffect in function Racers
    componentDidMount(){
        console.log('Component Mounted')
            fetch(`https://ergast.com/api/f1/${this.state.season}/${this.state.round}/driverStandings.json`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                    this.setState({racers: racerStandings}) // this sets racers to the array of the racerStandings
                })
    };

    componentDidUpdate(prevProps, prevState){
        console.log('Component Mounted')
        if (prevState.round !== this.state.round || prevState.season !== this.state.season){
            fetch(`https://ergast.com/api/f1/${this.state.season}/${this.state.round}/driverStandings.json`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                    this.setState({racers: racerStandings}) // this sets racers to the array of the racerStandings
                })
        }
    };

    // Function to be exectuted when the name form is submitteed
    handleRacerSubmit = (e) => {
        // Prevent default of refreshing page
        e.preventDefault();
        // Get the value from the form
        // console.log(e)
        let newSeason = e.target.season.value;
        let newRound = e.target.round.value;
        // console.log(newSeason, newRound);
        this.setState({
            season: newSeason,
            round: newRound
        })
    }

    render() {
        console.log(this) // to use props from other .js file in class do this.props.<variable>
        console.log('Render method executed')
        let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor']

        return (
            <div className='row py-3'>
            <h4 className="text-center">Driver Standings</h4>
            <form onSubmit={this.handleRacerSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <input className='form-control' type="text" name='season' id="" placeholder='Enter Season' />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <input className='form-control' type="text" name="round" id="" placeholder='Enter Round' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="submit" value='Submit' className='btn btn-primary my-4' />
                    </div>
                </div>
    
            </form>
            <table className="table table-primary table-striped">
                <thead>
                    <tr>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {/* here you input this.state.racers.map vs racers.map if it were a fn...since you need to specify 'this' and the state which is included in fn but not the class */}
                    {this.state.racers.map((racer, idx) => { 
                    return (
                        <tr>
                            <th>{racer.position}</th>
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
}
