"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const codingSchoolTestimonials = [
  {
    quote:
      "I had recently learned C and currently learning Java from here, by my learning experience I can undoubtedly state that this place can easily standout beside any other big institutes. Coding is a journey which requires inspiration and for those that two legends are there 😌...",
    name: "Priti Mondal",
    title: "3rd year Engineering Student",
  },
  {
    quote:
      "Quality of coaching is incredible.The environment between teacher & student is very friendly. I didn't studied enough just attended all the classes n the tests that they provides n got 80% on exam.I'm really thankful to all the teachers 🙏.",
    name: "Shruti bhattacharya",
    title: "School Student",
  },
  {
    quote:
      "Best training institute for developing one's coding skills. I have done my Core Java and SQL Training from here which was indeed very helpful. Currently I’m working at TCS. Also the faculty here is very friendly, you will feel like you are at home. Thank You Samik Sir and Pramit Sir for your guidance and support !!",
    name: "SOUPARNA GHOSH",
    title: "Currently in TCS",
  },
  {
    quote:
      "If you are thinking to build up your career in computer science field, then Adhyayana is the best choice. Currently I am learning Java and I also learnt C and DSA from here. Teachers are very helpful.They give more attention to weak students.Very much satisfied.",
    name: "Susmita Bera",
    title: "3rd year BCA student",
  },
  {
    quote:
      "I started my career with Samik da. He helped me a a lot during preparation of my interview. He taught us JAVA with some real time examples, which is quite easy to remember. Currently I am working at TCS as a team lead. I have been reusing those examples during KT sessions. Thank you Samik da😊",
    name: "Abhishek Nath",
    title: "Currently in TCS",
  },
];

export default function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={codingSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
