"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Content } from "next/font/google";

const programmingSchoolContent = [
  {
    title: "Why Choose Us for C Programming Fundamentals?",
    description:
      "At adhayayana, we lay a strong foundation in C programming. Our hands-on approach ensures you understand essential concepts, perfect for systems programming and game development.",
  },
  {
    title: "Why Choose Us for Data Structures and Algorithms?",
    description:
      "Master efficient programming with adhayayana. Our expert-led course enhances your problem-solving skills, preparing you for technical interviews and software development.",
  },
  {
    title: "Why Choose Us for SQL for Beginners?",
    description:
      "Unlock data management skills at adhayayana. Our SQL course is practical and career-focused, opening doors to data analysis and backend development roles.",
  },
  {
    title: "Why Choose Us for Core Java Fundamentals?",
    description:
      "Learn Java at adhayayana. Our comprehensive course covers everything from basics to advanced concepts, essential for building robust software.",
  },
  {
    title: "Why Choose Us for Java Enterprise Edition (Full Stack Java)?",
    description:
      "Excel in full stack Java development with adhayayana. Our detailed curriculum prepares you to build scalable and secure enterprise applications.",
  },
  {
    title: "Why Choose Us for Python Programming?",
    description:
      "Experience Python at adhayayana. Our course covers basic to advanced topics, opening up career opportunities in web development, data science, and more.",
  },
];

export default function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={programmingSchoolContent} />
    </div>
  );
}
