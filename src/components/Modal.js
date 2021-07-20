import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { Labels } from '../others';
import { Styles } from '../styles';

const ErrorModal = ({ onPress, visible, msgError }) => (
  <Modal animationType="slide" visible={visible} transparent>
    <View style={Styles.containerErrorModal}>
      <View style={Styles.boxErrorModal}>
        <View style={Styles.boxButtonErrorModal}>
          <Text style={Styles.textErrorModal}>{Labels.error}</Text>
          <TouchableOpacity onPress={onPress} style={Styles.touchErrorModal}>
            <Text style={Styles.xErrorModal}>{Labels.x}</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.boxTextErrorModal}>
          <Text style={Styles.texterrorErrorModal}>{msgError}</Text>
        </View>
      </View>
    </View>
  </Modal>
);

export { ErrorModal };
