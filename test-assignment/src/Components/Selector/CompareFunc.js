import { options } from "./SelectorOptions";

export const compareUsers = (usersArray, followingUsersArray, option) => {
  const filtered = [];
  if (option === options[2].value) {
    for (let i = 0; i < usersArray.length; i += 1) {
      if (followingUsersArray.includes(usersArray[i].id)) {
        filtered.push(usersArray[i]);
      }
    }
  }
  if (option === options[1].value) {
    for (let i = 0; i < usersArray.length; i += 1) {
      if (!followingUsersArray.includes(usersArray[i].id)) {
        filtered.push(usersArray[i]);
      }
    }
  }

  return filtered;
};
