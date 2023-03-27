import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import { fetchQuestions } from "@features/form/api/questions"
import { FormItem } from "@features/form/components/FormItem";


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
    renderItem={({item}) => <FormItem 
      prompt={item['prompt_fr']} 
      hint={item['hint_fr']} 
      questionType={item['question_type']}
      children={item['children']}
    />}
  />
};