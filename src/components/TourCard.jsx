// Create a card component to display a tour's name, info, image, and price
// Include a "Not Interested" button that removes this tour when clicked

function TourCard({ tour, removeTour }) {
    const { id, image, info, name, price } = tour;
  
    return (
      <article className="card">
        <img src={image} alt={name} className="card-img" />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h4 className="card-price">${price}</h4>
          <p className="card-info">{info}</p>
          <button onClick={() => removeTour(id)} className="btn">Not Interested</button>
        </div>
      </article>
    );
  }
  
  export default TourCard;
  