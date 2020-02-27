export default function reducer(state, action) {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case "message":
      return { ...state, message: action.payload };
    case "getMessages":
      return { ...state, messages: action.payload };
    default:
      throw new Error();
  }
}
