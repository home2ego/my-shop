import aboutShop from '../assets/about-my-shop.webp';

function About() {
  return (
    <div className="about-layout">
      <div>
        <h1>About Us</h1>
        <p>
          We started operations in 2020. We guarantee fresh produce.
          <br />
          <br />
          Save time by shopping on our app and we will deliver the products
          right to your home.
        </p>
      </div>
      <img
        src={aboutShop}
        height="275"
        width="183"
        className="rounded"
        alt="A hand passing a net bag filled with fresh fruit to another person."
      />
    </div>
  );
}

export default About;
