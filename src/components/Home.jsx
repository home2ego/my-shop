import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Online shopping simplified</h1>
        <p>
          Order your groceries from <em>MyShop</em> with our easy to use app, and get your products delivered straight
          to your doorstep.
        </p>
        <Link to="/products" className="btn btn-accent">
          Start shopping
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/deoo8jl7p/image/upload/f_auto,q_auto,w_700/v1729229817/home_qrbfkg.jpg"
        width="350"
        height="240"
        className="rounded"
        alt=""
      />
    </div>
  );
}

export default Home;
