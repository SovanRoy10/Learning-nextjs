"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

const features = [
    {
        title: "Why Should You Learn C?",
        description: "C provides a strong foundation in programming, essential for systems programming and game development.",
        slug: "c-programming-fundamentals",
    },
    {
        title: "Why Should You Learn Data Structures and Algorithms?",
        description: "Enhance problem-solving skills, crucial for technical interviews and software development.",
        slug: "data-structures-algorithms",
    },
    {
        title: "Why Should You Learn SQL?",
        description: "SQL is vital for managing databases, key in data analysis and backend development.",
        slug: "sql-for-beginners",
    },
    {
        title: "Why Should You Learn Core Java?",
        description: "Java is versatile and widely used, essential for building robust, scalable software.",
        slug: "core-java-fundamentals",
    },
    {
        title: "Why Should You Learn Java Enterprise Edition (Full Stack Java)?",
        description: "Java EE is crucial for developing large-scale applications, ensuring robust security and scalability.",
        slug: "java-enterprise-edition",
    },
    {
        title: "Why Should You Learn Python?",
        description: "Python is versatile and beginner-friendly, widely used in web development, data science, and more.",
        slug: "python-programming",
    },
];

export default function Mission() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 p-24 bg-gray-900">
    

      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect
          items={features.map((feature) => ({
            title: feature.title,
            description: feature.description,
            link: `/mission/${feature.slug}`,
          }))}
        />
      </div>
    </div>
  );
}
