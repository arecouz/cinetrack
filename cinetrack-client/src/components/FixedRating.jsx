const FixedRating = ({ rating, size = '44px' }) => {  // Add a `size` prop with default value
    const stars = Array(5)
      .fill('☆')
      .map((star, index) => (
        <span
          key={index}
          style={{
            color: index < rating ? '#FFD700' : '#ccc',
            fontSize: size,  // Set font size here
          }}
        >
          ★
        </span>
      ));
  
    return <div className="fixed-rating">{stars}</div>;
  };
  
  export default FixedRating;
  