import '../../styles/page-styles/home/product-grid.scss';
import { Col } from 'react-bootstrap';
import Product from '../product';

const products = [
  {
    id: '001',
    img: 'https://via.placeholder.com/250x350',
    productName: 'Product 1',
    price: '$100.00',
    oldPrice: '$150.00',
    discount: 'Save 33%',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: '002',
    img: 'https://via.placeholder.com/250x350',
    productName: 'Product 2',
    price: '$120.00',
    oldPrice: '$180.00',
    discount: 'Save 33%',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
  },
  {
    id: '003',
    img: 'https://via.placeholder.com/250x350',
    productName: 'Product 3',
    price: '$90.00',
    oldPrice: '$130.00',
    discount: 'Save 30%',
    sizes: ['M', 'L', 'XL'],
    colors: ['Yellow', 'Pink'],
  },
  {
    id: '004',
    img: 'https://via.placeholder.com/250x350',
    productName: 'Product 4',
    price: '$110.00',
    oldPrice: '$160.00',
    discount: 'Save 31%',
    sizes: ['S', 'M', 'L'],
    colors: ['Gray', 'Brown'],
  },
  {
    id: '005',
    img: 'https://via.placeholder.com/250x350',
    productName: 'Product 5',
    price: '$130.00',
    oldPrice: '$200.00',
    discount: 'Save 35%',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Purple', 'Orange'],
  },
  {
    id: '006',
    img: 'https://via.placeholder.com/250x350',
    productName: 'Product 6',
    price: '$140.00',
    oldPrice: '$210.00',
    discount: 'Save 33%',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Cyan', 'Magenta'],
  },
];

const ProductGrid = () => {
  return (
    <div className="product-grid-container mx-auto my-3">
      <div className="row g-3">
        {products.map((product) => (
          <Col key={product.id} className="d-flex justify-content-center">
            <Product
              _id={product._id}
              img={product.img}
              productName={product.productName}
              price={product.price}
              color={product.color}
            />
          </Col>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
