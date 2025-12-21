const Hero = () => {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="box">
        <div className="hero-image shadow">
          <img src="/restauranfood.jpg" alt="Food showcase at Little Lemon"/>
        </div>
        <article>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            A place for good food and good times. Enjoy flavorful meals, friendly service, and a comfortable setting for family and friends.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Hero;