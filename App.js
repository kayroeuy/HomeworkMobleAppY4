import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';

const App = () => {

  const fruits = [
    {label: 'Apples', value: 'appls'},
    {label: 'Oranges', value: 'orngs'},
    {label: 'Pears', value: 'pears'},
    {label: 'Mango', value: 'Mango'},
    {label: 'Grap', value: 'grap'},
  ];
  
  const [selectedFruits, setSelcteFruits] = useState ('');

  const onSelectionsChange = selectedFruits => {
    setSelcteFruits (selectedFruits);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tile}>
        <Text style={styles.text}>
          Choose your favorite fruit...
        </Text>
      </View>
      <View>
        <SelectMultiple
          items={fruits}
          selectedItems={selectedFruits}
          onSelectionsChange={onSelectionsChange}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tile:{
    justifyContent:'center',
    alignSelf:'center',
  },
  text:{
    fontWeight:'bold',
    fontSize:22,
    paddingVertical:20,
  }
});
