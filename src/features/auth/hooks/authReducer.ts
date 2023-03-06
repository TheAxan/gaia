export const authReducer = (prevState: any,
                            action: { type: string; token?: string | null }) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  };
};

export const authReducerInitialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};