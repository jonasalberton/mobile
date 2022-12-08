import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { CustomBtn } from "./components/CustomBtn";

const options = [
  {
    value: "mercurio",
    label: "Mercúrio",
    gravidade: 0.37,
  },
  {
    value: "venos",
    label: "Venus",
    gravidade: 0.88,
  },
  {
    value: "marte",
    label: "Marte",
    gravidade: 0.38,
  },
  {
    value: "jupiter",
    label: "Júpiter",
    gravidade: 2.64,
  },
  {
    value: "saturno",
    label: "Saturno",
    gravidade: 1.15,
  },
  {
    value: "urano",
    label: "Urano",
    gravidade: 1.17,
  },
];

export default function App() {
  const [form, setForm] = useState({
    peso: "",
    result: '',
    checked: options[0],
    isValid: false,
  });

  const handleTextInputChanged = (field, text) => {
    setForm((current) => {
      const newState = { ...current, [field]: text };
      return { ...newState, isValid: isFormValid(newState) };
    });
  };

  const handleSetRadioButton = (value) => {
    setForm({ ...form, checked: value });
  };

  const calcular = () => {
    const result = Number((form.peso / 10) * form.checked.gravidade).toFixed(2)
    setForm({...form, result: result + 'Kg'})
  };

  const cleanForm = () => {
    setForm({
      ...form,
      peso: "",
      result: ""
    });
  };

  const isFormValid = (current) => {
    return current.peso.trim().length > 0;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "white" }}>Peso por planeta</Text>
      </View>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Informe o peso em quilos na terra"
          value={form.peso}
          keyboardType="numeric"
          onChangeText={(text) => handleTextInputChanged("peso", text)}
        />

        <Text style={{ marginTop: 20 }}>Selecione o planeta:</Text>

        {options.map((option, index) => (
          <View key={index}>
            <RadioButton
              value={option.value}
              status={
                form.checked.value === option.value ? "checked" : "unchecked"
              }
              onPress={() => handleSetRadioButton(option)}
            ></RadioButton>
            <Text style={{ position: "absolute", left: 50, top: 5 }}>
              {option.label}
            </Text>
          </View>
        ))}

        <View style={{ ...styles.row, marginTop: 20 }}>
          <CustomBtn disabled={!form.isValid} onPress={calcular} text="Calcular" />
          <CustomBtn onPress={cleanForm} text="Limpar" />
        </View>

        <View style={styles.result}>
          <Text style={{fontSize: 50, color: 'red'}}>{form.result}</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "green",
    height: 100,
    paddingLeft: 20,
    justifyContent: "center",
    marginBottom: 10,
  },
  card: {
    padding: 20,
    width: "100%",
  },
  input: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: { position: "absolute", left: 50, top: 5 },
  result: {
    marginTop: 50,
    alignItems: "center",
  },
});
