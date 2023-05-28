import Layout from "../components/Layout";
import React from 'react';
import marketxls from '../marketxls';
import axios from 'axios';
import Link from "next/link";
import Stock from "./stock";
import Router from 'next/router'
const gatAllShareData = shareArray =>
  Promise.all(
    shareArray.map(async shares => {
      var count = 0
      const { data: result } = await marketxls.get(`/${shares}`)
      console.log(count)
      count++
      return { ...result, shares: shares.toLowerCase() }
    })
  )
const StockList = ({allStocks}) => {
    return(
    <Layout>
      <h1><center>Stock List</center></h1>
      <ol>
        {allStocks&&allStocks.map((stock, index) => 
            <li key={index}>
              <Link href={{pathname: "stocks/"+stock.shares, query: {idx: index}}}><a>{stock.Name}</a></Link>
              {/* <Link href={{pathname: "stocks/"+stock.shares, query: {stock: JSON.stringify(stock)}}}><a>{stock.Name}</a></Link> */}
              {/* <Link href={"stocks/"+stock.shares}><a>{stock.Name}</a></Link> */}
            </li>
        )}
      </ol>
    </Layout>
    )
}
StockList.getInitialProps = async ({ req }) => {
    const res = await axios.get("https://raw.githubusercontent.com/bhavish23/Company/master/com_name.json")
    const arrayOfSnp = res.data.books;
    let companytikles = []
    arrayOfSnp.map(ele => {
        companytikles.push(ele.tickle)
    })
    companytikles = companytikles.slice(0, 350);
    const allStocks = await gatAllShareData(companytikles)
    return {allStocks}
}
export default StockList

