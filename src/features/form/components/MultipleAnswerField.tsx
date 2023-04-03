import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { fetchQuestion } from "@features/form/api/question";
import { styles } from "@styles/styles";
import { NumberMultipleField } from "@features/form/components/NumberMultipleField";


const SubQuestions = ({prompt, hint, questionType}: any) => (
  <View style={styles.centerRow}>
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
  let [content, setContent] = useState([{'prompt_fr':'', 'hint_fr':'', 'question_type':''}])
  
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
