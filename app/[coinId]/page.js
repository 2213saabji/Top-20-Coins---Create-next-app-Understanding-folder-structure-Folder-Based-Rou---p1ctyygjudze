'use client'
import React, { useState, useEffect } from 'react';

function CoinDetail({params}) {
    const [coin, setCoin] = useState(null);
    useEffect(()=>{
        async function fetchdata(){
            const response=await( await fetch("https://api.coinlore.net/api/tickers/")).json();
            setCoin(response.data[params.coinId-1]);
        }
        fetchdata();
    },[params])
    console.log(coin);
    return (
        <div className='coin-detail'>
            {coin &&<>
            <div className='name-symbol'>
                <h1 className='name'>{coin.name}</h1>
                <h2 className='symbol'>({coin.symbol})</h2>
            </div>
            <div className='market-description'>
                <p className='coin-rank'>Rank: {coin.rank}</p>
                <p className='coin-price'>Price: ${coin.price_usd}</p>
                <p className='coin-market-cap'>Market Cap: ${coin.csupply}</p>
                <p className='coin-total-supply'>Total Supply: {coin.tsupply}</p>
                <p className='coin-max-supply'>Max Supply: {coin.msupply}</p>
            </div>
            </>
}
        </div>
    )
}

export default CoinDetail