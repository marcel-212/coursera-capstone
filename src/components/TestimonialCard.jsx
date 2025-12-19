const TestimonialCard = ({img, name, description}) => {
    return ( 
        <div className="testimonial-card shadow">
            <div>
                <img src={img} alt={`${name}'s image`}/>
                <h5>{name}</h5>
            </div>
            <p>{description}</p>
        </div>
     );
}
 
export default TestimonialCard;