export const multiAnswerReducer = (answers: any,
                                   action: { type: string; id: number; value: any }) => {
  switch (action.type) {
    case 'UPDATE': {
      return answers.map((id: number) => {
        if (id == action.id) {
          return action.value;
        } else {
          return id;
        }
      });
    };
  };
};

export const multiAnswerReducerInitialState = () => {
  let answer = {}
  return answer
};
