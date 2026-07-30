"use client";

import { useState } from "react";

export default function StateDemo() {
  const [count, setCount] = useState(100);

  return (
    <section className="bg-slate-800 py-10 text-center">
      <h2 className="mb-4 text-3xl font-bold">React State Demo</h2>

      <p className="mb-6 text-xl">Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
      >
        Increase Count
      </button>
    </section>
  );
}