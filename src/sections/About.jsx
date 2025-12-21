const About = () => {
  return (
    <section className="about" aria-label="About Little Lemon">
      <div className="box">
        <article>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            At our restaurant, we are passionate about serving high-quality food made with fresh ingredients and authentic flavors. Every dish is carefully prepared to deliver a memorable dining experience, whether you’re joining us for a quick meal or a special occasion. Our welcoming atmosphere and friendly service make us the perfect place to relax, connect, and enjoy great food. We take pride in creating a space where every guest feels at home and leaves satisfied.
          </p>
        </article>
        <div className="about-image">
          <img className="about-image_back shadow" src="/restaurantB.jpg" alt="Man cooking"/>
          <img className="about-image_front shadow" src="/restaurant.jpg" alt="Restaurant view"/>
        </div>
      </div>
    </section>
  );
};

export default About;