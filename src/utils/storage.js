import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async () => {
  try {
    await AsyncStorage.setItem('card', "true");
  } catch (e) {
    console.log(e)
  }
};


export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('card');

    console.log("=>",jsonValue)

    return jsonValue
  } catch (e) {
    return "false"
  }
};



