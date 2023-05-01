export const multiAnswerReducer = (
  answers: any,
  action: { type: string; id: number; value: any }
) => {
  switch (action.type) {
    case "UPDATE": {
      for (const id in answers) {
        if (parseFloat(id) == action.id) {
          answers[id] = action.value;
        }
      }
      return answers;
    }
    case "ADD": {
      answers[action.id] = action.value;
      return answers;
    }
  }
};
