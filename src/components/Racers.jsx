import React from 'react'

export default function Racers(props) {
    let tableHeaders = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor']
  return (
    <div className='row py-3'>
        <h4 className="text-center">Driver Standings</h4>
        <form onSubmit={props.handleRacerSubmit}>
            <div className="row">
                <div className="col-12 col-md-6 mt-3">
                    <input className='form-control' type="text" name="" id="" placeholder='Enter Season' />
                </div>
                <div className="col-12 col-md-6 mt-3">
                    <input className='form-control' type="text" name="" id="" placeholder='Enter Round' />
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
                {props.racers.map((racer, idx) => {
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
