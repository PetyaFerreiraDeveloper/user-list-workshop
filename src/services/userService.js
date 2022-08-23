const baseUrl = "http://localhost:3005/api/users";

export const getAll = async () => {
  const res = await fetch(baseUrl);
  if(res.ok) {
    const result = await res.json();
    return result.users;
  } else {
    throw new Error('unable to get users')
  }
};

export const getOne = async (userId) => {
  const res = await fetch(`${baseUrl}/${userId}`);
  if(res.ok) {
    const result = await res.json();
    return result.user;
  } else {
    throw new Error('unable to get user information')
  }
};

export const create = async (userData) => {
  const res = await fetch(baseUrl, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if(res.ok) {
    const result = await res.json();
    return result.user;
  } else {
    throw new Error('unable to create user')
  }
 
};

export const edit = async (userData, userId) => {
  const res = await fetch(`${baseUrl}/${userId}`, {
    method: 'put',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(userData)
  });
  if(res.ok) {
    const result = await res.json();
    return result.user;
  } else {
    throw new Error('unable to edit user')
  }
}