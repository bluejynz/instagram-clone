import Header from '../../components/Header';
import Stories from '../../components/Stories'
import Post from '../../components/Post';
import Tabbar from '../../components/Tabbar';
import React from 'react';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Stories />
            <Post />
            <Tabbar />
        </React.Fragment>
    )
}

export default Home;