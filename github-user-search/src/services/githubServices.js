import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users";

export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await axios.get(
    `${GITHUB_API_URL}?q=${encodeURIComponent(query)}&per_page=10&page=${page}`
  );

  // Get extra details (location and public_repos) for each user
  const usersWithDetails = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return { ...user, ...userDetails.data };
    })
  );

  return usersWithDetails;
};
