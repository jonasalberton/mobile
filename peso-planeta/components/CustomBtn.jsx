import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function CustomBtn(props) {

  return (
    <TouchableOpacity disabled={props.disabled} style={{...styles.btn}} onPress={props.onPress}>
      <Text style={{color: props.disabled ? 'grey': 'black'}}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '45%',
    backgroundColor: 'lightgrey',
    padding: 10,
    alignItems: 'center'
  }
});
