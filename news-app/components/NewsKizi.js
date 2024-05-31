import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

// 親要素から値を受け取るには、引数を使う
const NewsKizi = ({ imageurl, title, subtext }) => {
    return (
        <View style={styles.box}>
            <View style={styles.moziBox}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.subText}>{subtext}</Text>
            </View>

            <View style={styles.gazoBox}>
                <Image style={{ width: 100, height: 100 }} source={{ url: imageurl }} />
            </View>
        </View>

    );
};

export default NewsKizi;

const styles = StyleSheet.create({
    box: {
        height: 100,
        width: '100%',
        borderColor: 'lightblue',
        borderWidth: 1,
        flexDirection: 'row',
    },

    moziBox: {
        flex: 1,
        backgroundColor: 'steelblue',
        padding: 16,
        justifyContent: 'space-between',
    },

    gazoBox: {
        width: 100,
        backgroundColor: 'powderblue',
    },

    text: {
        fontSize: 16,
    },

    subText: {
        fontSize: 12,
        color: 'red',
    },
});