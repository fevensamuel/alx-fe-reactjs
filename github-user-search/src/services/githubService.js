import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = username || "";

  if (location) {
    query += ` location:${location}`;
  }

  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  const apiUrl = `${BASE_URL}${query}&per_page=10&page=${page}`;

  const response = await axios.get(apiUrl);

  const usersWithDetails = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return {
        ...user,
        location: userDetails.data.location,
        public_repos: userDetails.data.public_repos,
      };
    })
  );

  return usersWithDetails;
};
