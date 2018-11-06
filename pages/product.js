
import { connect } from 'react-redux'

import Layout from '../components/Layout';
import Product from '../components/Product/Product';

import { loadProduct, updateRating, updateReviews } from '../components/Product/product.action'

class Products extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx

    store.dispatch(loadProduct())
    store.dispatch(updateReviews({ userName: 'rajiv ranjan', reviews: 'It was awesome-' + new Date() }));
    store.dispatch(updateRating(4.5));

    return { isServer: isServer, title: 'Product Details' }
  }

  render() {
    return (
      <Layout>
        <Product props={this.props} />
      </Layout>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    product: store.productPage.product,
    reviews: store.productPage.reviews,
    rating: store.productPage.rating
  }
}

export default connect(mapStateToProps)(Products)