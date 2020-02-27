export default function reducer(state, action) {
  // console.log(state);
  console.log(action);
  switch (action.type) {
    case "form":
      return { ...state, [action.field]: action.value };
    case "getName":
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
