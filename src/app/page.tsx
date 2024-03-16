import Herosection from "@/components/Herosection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
    </main>
  );
}
