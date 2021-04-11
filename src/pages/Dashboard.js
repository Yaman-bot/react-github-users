import React, { useContext } from 'react';
import Info from '../components/Info';
import Repos from '../components/Repos';
import User from '../components/User';
import Search from '../components/Search';
import Navbar from '../components/Navbar';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';


const Dashboard = () => {
    const { isLoading } = useContext(GithubContext);
    if (isLoading) {
        return (
            <main>
                <Navbar />
                <Search />
                <img src={loadingImage} className='loading-img' alt='loding' />
            </main>
        );
    }
    return (
        <main>
            <Navbar></Navbar>
            <Search />
            <Info />
            <User />
            <Repos />
        </main>
    );
};

export default Dashboard;
