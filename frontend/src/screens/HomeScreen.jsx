import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { Link, useParams } from "react-router-dom";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({ pageNumber, keyword });

  return (
    <>
      {keyword && (
        <Link to="/" className="btn btn-light my-4">
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Row>
            <Paginate pages={data.pages} page={data.page} keyword={keyword} />
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
