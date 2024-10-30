export const fetchUsers = async () => {
  const response = await fetch("/api/users");
  const data = await response.json();
  console.log(data);
  return data;
};
