import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";


const Sport=()=>{
    const [fixtures, setFixtures] = useState([])
    const fetchData= async ()=>{
        try {
            const base_url = "https://livescore-api.com/api-client/scores/live.json?&key=RVx3zhx1kZvZLAgE&secret=CZDLUe4r6Sce2sCUn9XXqvYLuuLf51UI"
            await axios.get(base_url).then((response)=>(
                setFixtures(response.data.data.match)
            ))
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        fetchData();        
    })

    return(
        <div className="sport">
            <div className="score-fixtures">
                <h1>Football Scores and Fixtures</h1>
            </div>
            <div className="search-scores">
                <input type="text" placeholder="Enter a Team or Competition" />
            </div>

            <div className="league">
                {
                    fixtures.map((fixture, index)=>(
                        <div key={index} className="ind-div">
                            <h4>{fixture.competition_name}</h4>
                            <div className="home-away">
                                <a href={`/sport/matchdetails/${fixture.competition_id}`}><p>{fixture.home_name} vs {fixture.away_name}</p></a>
                                <p className="score">{fixture.score}</p>
                                <p>{fixture.scheduled}</p>
                                <p className="status">{fixture.status}</p>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )   
}
export default Sport;
