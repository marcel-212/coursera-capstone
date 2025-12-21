import TestimonialCard from '../components/TestimonialCard'


const Testimonials = () => {
  return (
    <section className="testimonials" aria-label="Testimonials">
      <div className="box">
        <TestimonialCard
          img='/testimonials/avatar.png'
          name='Emily Carter'
          description='The pierogi were incredible — rich, comforting, and clearly handmade. I’ll definitely be back.'
        />
        <TestimonialCard
          img='/testimonials/avatar2.png'
          name='James Wilson'
          description='Great food and a warm atmosphere. Everything tasted fresh and thoughtfully prepared.'
        />
        <TestimonialCard
          img='/testimonials/avatar3.png'
          name='Olivia Bennett'
          description='Lovely place for a relaxed meal. The desserts were especially good.'
        />
      </div>
    </section>
  );
};

export default Testimonials;
