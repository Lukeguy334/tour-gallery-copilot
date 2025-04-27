import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";

// Fetch tours from local tours.json using useEffect
// Store in state: tours, loading, error

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch("./tours.json"); // Notice the "./"!
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
