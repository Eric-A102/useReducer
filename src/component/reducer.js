export default function reducer(state, action) {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case "form":
      return {
        ...state,
        user: { ...state.user, [action.field]: action.value }
      };
    case "getName":
      return {
        ...state,
        fullNames: action.fullName,
        user: { ...state.user, firstName: "", lastName: "" }
      };
    case "form1":
      return {
        ...state,
        [action.field]: action.value
      };
    case "getName1":
      return {
        ...state,
        fullNames: action.fullName,
        firstName: "",
        lastName: ""
      };
    default:
      throw new Error();
  }
}
