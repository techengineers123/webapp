import React from "react";
import Card from "./Card";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to the Education App
      </h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-xl">
        Explore a wide range of educational resources to enhance your learning
        experience.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Mathematics"
          description="Discover resources for learning and mastering Mathematics concepts, from basic to advanced levels."
        />
        <Card
          title="Science"
          description="Dive into the world of Science with detailed explanations, experiments, and interactive content."
        />
        <Card
          title="History"
          description="Learn about historical events, figures, and milestones that shaped the world we live in today."
        />
        <Card
          title="Language Arts"
          description="Improve your language skills with reading, writing, and communication resources."
        />
        <Card
          title="Computer Science"
          description="Explore programming, algorithms, and computer science fundamentals for all levels."
        />
        <Card
          title="Computer Science"
          description="Explore programming, algorithms, and computer science fundamentals for all levels."
        />
      </div>
    </div>
  );
}

export default Home;
