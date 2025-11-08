import React from "react";
import "../styles/PodcastCard.css";
import  seasonIcon from "../assets/season.png"

export default function PodcastCard({podcast}) {
    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    return (
        <>
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
                    <div className="genre-item">
                        {}
                    </div>
                </div>

                <p className="update-time">Updated {formatDate(podcast.updated)}</p>
                {/* <p className="podcast-description">
                    {podcast.description}
                </p> */}
            </div>
        </>
    )
}