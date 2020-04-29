import client from "./client";

export const loadStats = userId => {
  try {
    const { data } = await client.get(`/users/${userId}`);

    return data.stats || [];
  } catch (e) {
    if (e.response.status === 404)
      throw { message: "User not found" };

    throw { message: "Could not load statistic" };
  }
};
