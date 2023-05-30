import React, { useState } from "react"
import {FaSearchLocation} from "react-icons/fa"
import { Link } from "react-router-dom"
import profile from "../Components/images.png"
import hamb from "../Components/hamburger.png"
import close from "../Components/close.png"

const Nav=()=>{
    const [nav, setNav] = useState(false);
    const handleClick=()=>{
        setNav(!nav)
    }
    return(
        <div className="header">
            <div className="left-head">
                <div style={{display:"flex"}}>
                    <div  style={{backgroundColor:"yellow",padding:"10px"}}><h2>Sim</h2></div>
                    <div style={{backgroundColor:"black",padding:"10px"}}><h2 style={{color:"white"}}>Suraj</h2></div>
                </div>
                <a href="" className="lefthead">
                    <div className="profile">
                        <img src={profile} alt="" />
                        <a href="/login">Sign In</a>    
                    </div>
                </a>
            </div>
            <button className="hamburger" onClick={handleClick}>
                {
                    nav? <img src={close} alt=""/>: <img src={hamb} alt="" />
                }
            </button>
            <div className="right">
                <ul>
                    <li><Link to={"/"}>Sport</Link></li>
                    <li><Link to ={'/weather'}>Weather</Link></li>
                    <li><Link to={"/travel"}>Travel</Link></li>
                    <li><Link to={"/news"}>News</Link></li>
                    <li><Link to={"/jokes"}>Jokes</Link></li>
                </ul>
            </div>
            <div className={`${nav?"mobile-nav display" : "mobile-nav"}`}>
                <ul>
                    <li><Link to={"/"}>Sport</Link></li>
                    <li><Link to ={'/weather'}>Weather</Link></li>
                    <li><Link to={"/travel"}>Travel</Link></li>
                    <li><Link to={"/news"}>News</Link></li>
                    <li><Link to={"/jokes"}>Jokes</Link></li>
                </ul>
            </div>
            <div className="search-sim">
                <form action="">
                    <FaSearchLocation/>
                    <input type="search" placeholder="Search Simsuraj "/>
                    <button>Search</button>
                </form>                
            </div>
        </div>
    )
}
export default Nav;