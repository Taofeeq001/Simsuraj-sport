import React from "react"

const Footer =()=>{
    return(
        <footer>
            <div>
                <h1>Explore SIMSURAJ</h1>
            </div>
            <div className="foot-down">
                <div className="one">
                    <a href="/sport">Sport</a>
                    <a href="/weather">Weather</a>
                </div>
                <div className="two">
                    <a href="/travel">Travel</a>
                    <a href="/news">News</a>
                </div>
                <div className="three">
                    <a href="/jokes">Jokes</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;