'use client'
import React, { useState, useEffect } from 'react';
import CoinCard from './components/CoinCard';

function Home() {
    const [coins, setCoins] = useState([]);
    useEffect(()=>{
        async function fetchdata(){
            const response=await( await fetch("https://api.coinlore.net/api/tickers/")).json();
            setCoins(response.data);
        }
        fetchdata();
    },[])
    return (
        <div className='home'>
            <h1>Top 20 Cryptos</h1>
            <div className='coins-container'>
                {coins.map((coin) => (
                    <CoinCard coin={coin} />
                ))}
            </div>
        </div>
    )
}

export default Home