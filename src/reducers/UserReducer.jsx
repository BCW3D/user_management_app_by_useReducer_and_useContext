export const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      const deletedUsers = [...state.users].filter(
        (user) => user.id !== action.payload
      );

      return {
        ...state,
        users: deletedUsers,
      };

    case "ADD_USER":
      const newUsers = [...state.users, action.payload];

      return {
        ...state,
        users: newUsers,
      };

    case "EDIT_USER":
      const editUser = [...state.users].filter(
        (user) => user.id === action.payload
      );
      console.log(editUser);
      return {
        ...state,
        isEdit: true,
        editUser: { id: editUser[0].id, name: editUser[0].name },
      };

    case "EDITED_USER":
      const userData = [...state.users];
      const foundIndex = userData.findIndex(
        (user) => user.id === action.payload.id
      );

      console.log(foundIndex);

      userData.forEach((user, i, array) => {
        if (foundIndex === i) {
          array[i] = action.payload;
        }
      });

      return {
        ...state,
        users: userData,
        isEdit: false,
      };

    default:
      break;
  }
};
