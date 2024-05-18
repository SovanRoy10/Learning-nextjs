"use client";

import { HoverEffect } from "./ui/card-hover-effect";


const features = [
  {
      title: 'Friendly Support',
      description: 'Our instructors provide support like an elder brother, ensuring you feel comfortable and encouraged throughout your learning journey.',
  },
  {
      title: 'Personalized Instruction',
      description: 'We adapt our teaching methods to your individual needs, ensuring you receive the most effective and personalized learning experience.',
  },
  {
      title: 'Live Feedback & Engagement',
      description: 'Receive immediate feedback during live sessions, enhancing your understanding and helping you master concepts quickly.',
  },
  {
      title: 'Cutting-Edge Curriculum',
      description: 'Our curriculum is continuously updated to include the latest trends and technologies, ensuring you learn the most current and effective methods.',
  },
  {
      title: 'Continuous Learning Opportunities',
      description: 'With our expansive resource library and dynamic course offerings, you’ll always find new opportunities for growth and advancement.',
  },
  {
      title: 'Industry Expert Instructors',
      description: 'Learn from industry experts with real-world experience, providing you with insights and knowledge that are directly applicable to your career.',
  },
];

export default function UpcomingWebinars() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 p-12 bg-gray-900">
      <div className="text-center">

        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance Your Coding Journey
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect
          items={features.map((feature) => ({
            title: feature.title,
            description: feature.description,
            link: "/",
          }))}
        />
      </div>
    </div>
  );
}
