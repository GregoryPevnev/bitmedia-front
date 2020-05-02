import client from "./client";

const DEFAULT_PAGE = 1;

export const loadUsers = async page => {
  try {
    const { data } = await client.get("/users", {
      params: {
        page: page || DEFAULT_PAGE,
      }
    });

    return {
      users: data.users,
      page: data.page,
      pages: data.pages,
    };
  } catch (e) {
    throw { message: "Could not load users" };
  }
};

export const loadUser = async userId => {
  try {
    const { data } = await client.get(`/users/${userId}`);

    if (!data.user)
      throw { message: "User not found" };

    return new Promise((res) => {
      setTimeout(() => {
        res(data.user);
      }, 3000);
    });
  } catch (e) {
    if (e.message) throw e;

    if (e.response.status === 404)
      throw { message: "User not found" };

    throw { message: "Could not load user" };
  }
};
