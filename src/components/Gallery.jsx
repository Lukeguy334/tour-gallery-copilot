// Create a gallery that maps over the tours array and renders TourCard for each

import TourCard from "./TourCard";

function Gallery({ tours, setTours }) {
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </section>
  );
}

export default Gallery;
