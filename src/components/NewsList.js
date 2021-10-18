import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NewsItem from "./NewsItem";
import axios from "axios";
import {API_KEY} from "../App";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 2rem auto 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const NewsList = ({category}) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : '&category=' + category;
        const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`
        return axios.get(url);
    }, [category]);

    if (loading) {
        return <NewsListBlock>대기중 ...</NewsListBlock>
    }

    if (!response) {
        return null;
    }

    if (error) {
        return <NewsListBlock>에러 발생</NewsListBlock>
    }

    console.log("response: ",response);
    const {articles} = response.data;

    return (
        <NewsListBlock>
            {articles.map(article => <NewsItem key={article.url} article={article}/>)}
        </NewsListBlock>
    );
};

export default NewsList;