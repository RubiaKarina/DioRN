import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/98122346?v=4';

const urlToMyGithub = 'https://github.com/RubiaKarina';

const App = () => {
  const handlePressGoTogithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('link aprovado');
      console.log('Carregando link...');
      await Linking.openURL(urlToMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image style={style.avatar} source={{uri: imageProfileGithub}} />

        <Text style={[style.defaultText, style.name]}>Rúbia Karina</Text>
        <Text style={[style.defaultText, style.nickname]}>RubiaKarina</Text>
        <Text style={[style.defaultText, style.description]}>
          Estudante de Análise e Desenvolvimento de Sistemas - PUC Minas
        </Text>
        <Pressable onPress={handlePressGoTogithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 16,
    color: colorDarkFontGithub,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
