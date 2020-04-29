import client from "./client";

export const loadStats = async (userId, from, to) => {
  try {
    const { data } = await client.get(`/users/${userId}/stats`, {
      params: {
        from,
        to,
      }
    });

    return data.stats || [];
  } catch (e) {
    if (e.response.status === 404)
      throw { message: "User not found" };

    throw { message: "Could not load statistic" };
  }
};
