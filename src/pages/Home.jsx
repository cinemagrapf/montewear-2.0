import Header from '../components/header';
import Footer from '../components/footer';
import CardSection from '../components/home-page/card-section';
import ProductGrid from '../components/home-page/product-grid';

function Home() {
  return (
    <div className="App">
      <Header />
      <CardSection />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default Home;
