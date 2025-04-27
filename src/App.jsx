import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";

// Fetch tours from https://course-api.com/react-tours-project using useEffect
// Store in state: tours, loading, error

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://course-api.com/react-tours-project");
      if (!response.ok) {
        throw new Error("Failed to fetch tours");
      }
      const data = await response.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // If loading is true, display "Loading..."
  // If error, display an error message
  // Else, render Gallery with tour data

  if (loading) {
    return (
      <main className="loading">
        <h2>Loading...</h2>
      </main>
    );
  }

  if (error) {
    return (
      <main className="error">
        <h2>{error}</h2>
      </main>
    );
  }

  if (tours.length === 0) {
    // If no tours are left, show a "Refresh" button to refetch the data
    return (
      <main className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={fetchTours} className="btn">Refresh Tours</button>
      </main>
    );
  }

  return (
    <main>
      <h1 className="title">Tour Gallery</h1>
      <Gallery tours={tours} setTours={setTours} />
    </main>
  );
}

export default App;