## state 
コンポーネントの仕組みを管理する
- カウントの初期値が0→ ボタンを押すたびに1増やすというstateが設定

## useEffect
画面が反映された後に実行される関数

出力(レンダリング)→ useEffect → state -> ニュース情報を取得(API) -> 画面に表示

## React Navigation
画面遷移用のライブラリ
[React Navigation公式ページ](https://reactnavigation.org/)
[React Navigationインストール方法](https://reactnavigation.org/docs/5.x/getting-started/)
[React Navigationサンプルコード](https://reactnavigation.org/docs/5.x/hello-react-navigation/)

#### 必要コマンド
1. ページの切り替えに必要
```
npm install @react-navigation/native@^5.x
```

2. Expoで必要なライブラリ
```
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

3. 左右にスライドさせた画面遷移にする
```
npm install @react-navigation/stack@^5.x
```

## 画面をタップしたときの処理を書きたいとき…
#### TouchableOpacity
反映したい画面の子要素に書く

## WebView
[WebView公式ページ](https://docs.expo.dev/versions/latest/sdk/webview/)
自分のスマホアプリの中でWebブラウザを表示させる