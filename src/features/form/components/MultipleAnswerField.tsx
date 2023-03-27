import { useEffect, useState } from "react";
import { FlatList, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

import { fetchQuestion } from "@features/form/api/question";
import { styles } from "@styles/styles";
import { MinusPlusButtons } from "@features/form/components/MinusPlusButtons";

const NumberMultipleField = () => {
  const [field, setField] = useState('0');
    
  return (
    <View style={styles.numberField}>
      <View style={styles.numberInput}>
        <MinusPlusButtons target={field} setTarget={setField}/>
        <View style={styles.boxInput}>
          <TextInput
            placeholder={''}
            value={field}
            textAlign='center'
            keyboardType='numeric'
            onChangeText={(textChange) => setField(textChange)}
            // commas and dots mess stuff up
          />
        </View>
      </View>
    </View>
  );
};


const SubQuestions = ({prompt, hint, questionType}: any) => (
  <View style={styles.subQuestions}>
    <SubAnswerField questionType={questionType}/>
    <Text>{prompt}</Text>
  </View>
);

const SubAnswerField = ({prompt, hint, questionType}: any) => {
  switch (questionType) {
    case 'number_multiple':
      return <NumberMultipleField/>
    default:
      return <Text>Unhandled question questionType {prompt}</Text>
  };
};

export const MultipleAnswerField = ({childrenIds}: any) => {
  let [content, setContent] = useState([])
  
  useEffect(() => {
    const bootstrapAsync = async () => {
      let output = [];
      for (const i in childrenIds) {
        output.push(await fetchQuestion(childrenIds[i]));
      };
      setContent(output);
    };
    bootstrapAsync();    
  }, []);
  
  return <FlatList 
    scrollEnabled={false}
    data={content}
    renderItem={({item}) => <SubQuestions
      prompt={item['prompt_fr']} 
      hint={item['hint_fr']}
      questionType={item['question_type']}
    />}
  />
};
