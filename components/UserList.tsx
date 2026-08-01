"use client";
import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
  email: string;
}
export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
    try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    setUsers(data);
  } catch (err) {
    setError("Failed to load users.");
  } finally {
    setLoading(false);
  }
        const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    setUsers(data);
    console.log(data);
  
    }
  fetchUsers();
  }, []);

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-8">
          API Users
        </h2>
      </div>
      {loading && (
  <p className="mb-6 text-blue-400">
    Loading users...
  </p>
)}

{error && (
  <p className="mb-6 text-red-500">
    {error}
  </p>
)}
      <div className="space-y-4">
        
  {users.map((user) => (
    <div
      key={user.id}
      className="rounded-lg border border-slate-700 bg-slate-800 p-4"
    >
      <h3 className="text-xl font-semibold">{user.name}</h3>
      <p className="text-slate-400">{user.email}</p>
    </div>
  ))}
</div>
    </section>  
  );
}