const tokenKey = "token" as string;
const userKey = "user" as string;

export function saveToken(token : string) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export function saveUser(user : string) {
  saveToStorage(userKey, user);
}

export function getUserName() {
  const user = getFromStorage(userKey);

  if (user) {
    return user.username;
  }
  return null;
}

function saveToStorage(key : string, value: string) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key: string) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }
  return JSON.parse(value);
}

export function clearStorage() {
  localStorage.clear();
}
