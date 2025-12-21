import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);

    try {
      const data = await searchUsers({ username, location, minRepos, page: 1 });
      setUsers(data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      const moreUsers = await searchUsers({ username, location, minRepos, page: nextPage });
      setUsers([...users, ...moreUsers]);
      setPage(nextPage);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-50 p-6 rounded shadow">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}
      {loading && <p className="mt-4">Loading...</p>}

      <div className="mt-6">
        {users.length === 0 && !loading && !error && <p className="text-gray-500">No users found.</p>}

        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded mb-3 flex justify-between items-center bg-white shadow-sm"
          >
            <div>
              <img src={user.avatar_url} alt={user.login} width="60" className="rounded-full mb-2" />
              <p className="font-bold text-lg">{user.name || user.login}</p>
              <p>Location: {user.location || "N/A"}</p>
              <p>Repos: {user.public_repos || "N/A"}</p>
            </div>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              View Profile
            </a>
          </div>
        ))}

        {users.length > 0 && (
          <button
            onClick={handleLoadMore}
            className="mt-4 bg-gray-200 p-2 rounded hover:bg-gray-300 transition"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Search;
