import React from "react";
import "../styles/PodcastCard.css";
import  seasonIcon from "../assets/season.png"
import { genres } from "../data.js";

export default function PodcastCard({podcast}) {
    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }
        const showGenres = genres.filter(genre => genre.shows.includes(podcast.id))
        .map(gen => gen.title)


    return (    
        <div className="card">
            <div className="podcast-img-div">
                <img src={podcast.image} alt={podcast.title} className="podcast-img"/>
            </div>

            <h2 className="pod-title">{podcast.title}</h2>
                    
            <div className="season-wrapper">
                <img src={seasonIcon} alt="calender icon" className="season-icon"/>
                <span>{podcast.seasons} seasons</span>
            </div>

            <div className="genre-wrapper">
                {showGenres.map((gen,index) => (
                    <div key={index} className="genre-item">
                        {gen}
                    </div>
            
                ))}
                
            </div>

            <p className="update-time">Updated {formatDate(podcast.updated)}</p>
        </div>
        
    )
}
