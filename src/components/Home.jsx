import { Link } from 'react-router-dom';
import homeShop from '../assets/home-my-shop.webp';

function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Online shopping simplified</h1>
        <p>
          Order your groceries from <em>MyShop</em> with our easy to use app,
          and get your products delivered straight to your doorstep.
        </p>
        <Link to="/products" className="btn btn-accent">
          Start shopping
        </Link>
      </div>
      <img
        src={homeShop}
        width="350"
        height="241"
        className="rounded"
        alt="A net bag filled with fresh tangerines and peaches lying on a table next to a stack of books."
      />
    </div>
  );
}

export default Home;
