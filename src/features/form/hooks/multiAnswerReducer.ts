export const multiAnswerReducer = (
  answers: any,
  action: { type: string; id: number; value: string }
) => {
  switch (action.type) {
    case "change": {
      return {
        ...answers,
        [action.id]: action.value,
      };
    }
  }
};
