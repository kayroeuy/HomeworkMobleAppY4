import React from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import ValidationComponent from 'react-native-form-validator';

export default class MyForm extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = { emailAddress: "example@gmail.com" };
    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton() {

    const isValid = this.validate({
      emailAddress: { email: true }
    });

    this.setState({ isValid });
  }

  render() {
      return (
        <View>
          <TextInput onChangeText={(email) => this.setState({ emailAddress: email })} value={this.state.emailAddress} />

          <TouchableHighlight onPress={this._onPressButton}>
            <Text>Submit</Text>
          </TouchableHighlight>

          {this.isFieldInError('emailAddress') && this.getErrorsInField('emailAddress').map(errorMessage => <Text>{errorMessage}</Text>) }

          <Text>
            {this.getErrorMessages()}
          </Text>
        </View>
      );
  }
}