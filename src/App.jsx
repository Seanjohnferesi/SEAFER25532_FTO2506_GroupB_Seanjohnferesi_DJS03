import { useCallback, useEffect, useState } from "react";
import PodcastCard from "./components/PodcastCard";
import "./styles/App.css";

export default function App() {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchPodcasts = useCallback(async (signal) => { 
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("https://podcast-api.netlify.app/", { signal }, []);
            if(!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
            const data = await res.json();

            if(!Array.isArray(data)) {
                setPodcasts([]);
                setError("Unexpected response format from API.");
            } else {
                setPodcasts(data);
            }
        } catch (err) {
            // if fetch was aborted or cancelled, do nothing
            if (err.name === "AbortError") return;
            setError(err.message || "Unknown error while fetching podcasts.");
            setPodcasts([]);
        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        const controller = new AbortController();
        fetchPodcasts(controller.signal);
        return () => controller.abort();
    }, [fetchPodcasts]);

    if(loading) {
        return(
            <main className="app-root">
                <header className="app-header">
                    <h1>Forger Talks</h1>
                </header>
                <div className="status">
                    <span>f</span>
                    <span>f</span>
                    <span>f</span>
                    <span>f</span>
                </div>
            </main>
        );
    }

    return (
        <main className="app-root">
            <header className="app-header">
            <h1>Podcast Discovery</h1>
            </header>

            <section className="podcast-grid">
            {podcasts.map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
            </section>
        </main>
    )
}

