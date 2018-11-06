import { connect } from 'react-redux'
import React from 'react'

import Layout from '../components/Layout';
import Home from '../components/Home/Home';

import { loadImage } from '../components/Home/home.action'

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx
    store.dispatch(loadImage())

    return { isServer: isServer, title: 'Home' }
  }

  render() {
    return (
      <Layout>
        <Home props={this.props}></Home>
      </Layout>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    dog: store.homePage.dog
  }
}

export default connect(mapStateToProps)(Index)