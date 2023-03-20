import { Text, View, FlatList, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "@styles/styles";
import { fetchQuestions } from "@features/scroll/api/questions"


type ItemProps = {prompt: string, hint: string};

const Item = ({prompt, hint}: ItemProps) => {
  const [field, setField] = useState('')
  return <View style={styles.item}>
    <Text style={styles.question}>{prompt}</Text>
    <Text style={styles.hint}>{hint}</Text>
    <View style={styles.boxInput}>
      <TextInput
        placeholder={''}
        textAlign='center'
        onChangeText={(field) => setField(field)}
      />
    </View>
  </View>
};

export const ScrollTab = () => {
  const [questions, setQuestions] = useState([])
  
  useEffect(() => {
    const bootstrapAsync = async () => {
      setQuestions(await fetchQuestions())
    };
    bootstrapAsync();    
  }, []);

  return <FlatList
    data={questions}
    renderItem={({item}) => <Item prompt={item['prompt_fr']} hint={item['prompt_hint_fr']} />}
  />
};