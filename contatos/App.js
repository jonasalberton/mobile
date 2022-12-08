import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ContactList } from './components/ContactList';
import { CustomBtn } from './components/CustomBtn';

export default function App() {
  const [contatos, setContatos] = useState([])
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', 'isValid': false})

  const handleTextInputChanged = (field, text) => {
    setForm((current) => {
      const newState = {...current, [field]: text}
      return {...newState, isValid: isFormValid(newState)}
    })

  }

  const save = () => {
    setContatos((current) => {
      return [...current, { nome: form.nome, email: form.email, telefone: form.telefone}]
    })
  }

  const cleanForm = () => {
    setForm({
      email: '',
      nome: '',
      telefone: ''
    })
  }

  const isFormValid = (current) => {
    return current.nome.trim().length > 0 && current.telefone.trim().length > 0 && current.email.trim().length > 0
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: 'white'}}>Gerenciador de contatos</Text>
      </View>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Nome" value={form.nome} onChangeText={(text) => handleTextInputChanged('nome', text)} />
        <View style={styles.row}>
          <TextInput style={{...styles.input, width: '45%'}} placeholder="E-mail" value={form.email} onChangeText={(text) => handleTextInputChanged('email', text)}/>
          <TextInput style={{...styles.input, width: '45%'}} placeholder="Telefone" value={form.telefone} onChangeText={(text) => handleTextInputChanged('telefone', text)}/>
        </View>
        <View style={{...styles.row, marginTop: 20}}>
          <CustomBtn disabled={!form.isValid} onPress={save} text="Salvar"/>
          <CustomBtn onPress={cleanForm} text="Cancelar"/>
        </View>
      </View>
      <ContactList contacts={contatos}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'green',
    height: 100,
    paddingLeft: 20,
    justifyContent: 'center',
    marginBottom: 10
  },
  card: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'green',
    borderWidth: 2,
    width: '100%',
  },
  input: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    padding: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
