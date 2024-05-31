import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, } from 'react-native';
import NewsKizi from '../components/NewsKizi';
import Constants from 'expo-constants';
import axios from 'axios';

const URI = 'https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=d87a6604d4c5490f831b302f7bdb3f0a';

export default function NewsScreen({ navigation }) {

    const [news, setNews] = useState([]);

    useEffect(() => { getNews(); }, [])

    const getNews = async () => {
        const response = await axios.get(URI);
        setNews(response.data.articles);
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={news}
                renderItem={({ item }) => (
                    <NewsKizi
                        imageurl={item.urlToImage}
                        title={item.title}
                        subtext={item.publishedAt}
                        //onPress={() => navigation.navigate('詳細ページ', { articles: item })}
                        //　何処に飛ぶのかを第一引数でname属性で指定する
                        onPress={() => alert('詳細ページに遷移します')}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});