const TestimonialCard = ({ img, name, description }) => {
  const safeId = name.replace(/\s+/g, "-");

  return (
    <div className="testimonial-card shadow" role="region" aria-labelledby={safeId}>
      <div>
        <img src={img} alt={name} />
        <h5 id={safeId}>{name}</h5>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default TestimonialCard;