export function getUser() {
  const userStringify = localStorage.getItem("user");
  if (!userStringify) return null;
  return JSON.parse(userStringify);
}
export function getIdentityId() {
  const user=getUser();
  if(user==null) return null;
  return user.IdentityId;
}
export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  return token;
}
