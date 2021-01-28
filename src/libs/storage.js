import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  static instance = new Storage();

  store = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (err) {
      console.log('store err', err);
      return false;
    }
  };

  get = async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      console.log('error get storage', err);
      throw Error(err);
    }
  };

  multiGet = async (keys) => {
    try {
      return AsyncStorage.multiGet(keys);
    } catch (err) {
      console.log('store multiGet error', err);
      throw Error(err);
    }
  };

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (err) {
      console.log('store getAllKeys error', err);
      throw Error(err);
    }
  };

  remove = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (err) {
      console.log('error remove element', err);
      return false;
    }
  };
}

export default Storage;
