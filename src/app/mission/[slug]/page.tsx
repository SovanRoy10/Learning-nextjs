import { missionDetails } from "../../../data/data.js";

type MissionDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default function MissionDetails({ params }: MissionDetailsPageProps) {
  const missionDetail = missionDetails.find(
    (detail) => detail.slug === params.slug
  );

  if (!missionDetail) {
    return (
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Mission not found</h1>
      </main>
    );
  }

  return (
    <main className="p-6 mt-24 text-black">
      <h1 className="text-3xl font-bold mb-6 capitalize text-center text-white">
        {params.slug.replace(/-/g, " ")}
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Why Should I Learn {params.slug.replace(/-/g, " ")}?
        </h2>
        <ul className="space-y-4">
          {missionDetail.why.map((reason, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-gray-50"
            >
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p>{reason.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Why It Will Be Needed for Placements?
        </h2>
        <ul className="space-y-4">
          {missionDetail.placements.map((placement, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-gray-50"
            >
              <h3 className="text-xl font-semibold">{placement.title}</h3>
              <p>{placement.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          What Should I Do After Learning It?
        </h2>
        <ul className="space-y-4">
          {missionDetail.after.map((after, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-gray-50"
            >
              <h3 className="text-xl font-semibold">{after.title}</h3>
              <p>{after.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
