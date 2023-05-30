import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'


const MatchDetail=()=>{
    const [detail, setDetail] = useState()
    const {competition_id} = useParams()
    useEffect(()=>{
        const base_url = `https://livescore-api.com/api-client/scores/live.json?&key=RVx3zhx1kZvZLAgE&secret=CZDLUe4r6Sce2sCUn9XXqvYLuuLf51UI/${competition_id}`
        axios.get(base_url).then((response)=>(
            setDetail(response.data.data.match)
        )) 
    },[])
    return(
        <div>
            <Nav/>
        </div>
    )
}
export default MatchDetail;