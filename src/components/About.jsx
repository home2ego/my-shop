function About() {
  return (
    <div className="about-layout">
      <div>
        <h1>About Us</h1>
        <p>
          We started operations in 2020. We guarantee fresh produce.
          <br />
          Save time by shopping on our app and we will deliver the products right to your home. <br />
          <em>We use Stripe to process your payment.</em>
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/deoo8jl7p/image/upload/f_auto,q_auto,w_550/v1729229826/about_i03iy5.jpg"
        height="275"
        width="183"
        className="rounded"
        alt=""
      />
    </div>
  );
}

export default About;
