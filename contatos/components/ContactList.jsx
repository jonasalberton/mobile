import { ScrollView, Text, View } from "react-native";

export function ContactList({contacts}) {
  return (
    <ScrollView>
      {contacts.map((contact, index) => 
        <View key={index} style={{borderBottomWidth: 2, borderBottomColor: 'lightgrey', padding: 10}}>
          <Text>{contact.nome}</Text>
          <Text>{contact.email}</Text>
          <Text>{contact.telefone}</Text>
        </View>)}
    </ScrollView>
  )
}