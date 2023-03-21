import { Text, View, FlatList, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "@styles/styles";
import { fetchQuestions } from "@features/scroll/api/questions"


type ItemProps = {prompt: string, hint: string, type: string};
type AnswerFieldProps = {type: string}

const AnswerField = (type: AnswerFieldProps) => {
  switch (type.type) {
    case 'number':
      return <NumberAnswerField/>
    default:
      return <Text>Unhandled question type</Text>
  }
};

const NumberAnswerField = () => {
  const [field, setField] = useState('');
  
  return (
    <View style={styles.numberInput}>
      <View style={styles.boxInput}>
        <TextInput
          placeholder={''}
          textAlign='center'
          onChangeText={(field) => setField(field)}
        />
      </View>
      <TouchableOpacity onPress={() => ''} style={styles.squareButton}>
        <Text style={styles.white}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const Item = ({prompt, hint, type}: ItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.question}>{prompt}</Text>
      <Text style={styles.hint}>{hint}</Text>
      <AnswerField type={type}/>
    </View>
  );
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
    renderItem={({item}) => <Item 
      prompt={item['prompt_fr']} hint={item['hint_fr']} type={item['type']}
    />}
  />
};