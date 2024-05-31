import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, } from 'react-native';
import NewsKizi from './components/NewsKizi';
import Constants from 'expo-constants';
import axios from 'axios';

const URI = 'https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=d87a6604d4c5490f831b302f7bdb3f0a';

export default function App() {

  const [news, setNews] = useState([]);

  useEffect(() => { getNews(); }, [])

  const getNews = async () => {
    const response = await axios.get(URI);
    setNews(response.data.articles);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <NewsKizi
            imageurl={item.urlToImage}
            title={item.title}
            subtext={item.publishedAt}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});