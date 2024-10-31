import React from "react";
import Card from "./Card";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 mt-16">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to the Education App
      </h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-xl">
        Explore a wide range of educational resources to enhance your learning
        experience.
      </p>
      <p className="text-lg text-gray-700 mb-12 text-justify">
        Welcome to SemSmashers, your all-in-one web application designed to
        empower MAKAUT students in their academic journey! SemSmashers combines
        essential resources like the MAKAUT Organizer for efficient scheduling,
        a comprehensive collection of Previous Year Questions (PYQ) for
        effective exam preparation, and easy access to syllabi, all in one
        user-friendly platform. Our goal is to simplify your study experience,
        helping you smash your semester goals with confidence and ease. Join us
        and take your academic success to the next level!
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        <Card
          title="Makaut Organizer"
          description="The MAKAUT Organizer is a tool for MAKAUT students to manage their schedules, track assignments, and stay updated with university notifications—all in one place. It helps streamline academic tasks and keeps students organized."
        />
        <Card
          title="PYQ"
          description="PYQ offers past exam papers to help students prepare effectively by familiarizing them with question patterns and key topics."
        />
        <Card
          title="Syllabus"
          description="The syllabus outlines course topics and objectives, guiding students on what to study and how to prepare."
        />
      </div>
    </div>
  );
}

export default Home;
