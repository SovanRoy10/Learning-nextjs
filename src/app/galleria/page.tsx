import Image from "next/image";
import { galleria } from "@/data/data";

export default function Galleria() {
  return (
    <div>
      <h1 className="text-center mt-24 text-4xl font-bold p-10">
        Latest Activities
      </h1>
      <div className="grid grid-cols-3 p-10 gap-6">
        {galleria.map((photo, index) => {
          return (
            <Image
              src={photo.link}
              key={index}
              alt={`Photo ${index + 1}`}
              height={500}
              width={500}
              quality={90}
              className={
                photo.posi === "1"
                  ? "w-[300px] border-[10px] border-slate-200 rounded-lg"
                  : "w-[400px] border-[10px] border-slate-200 rounded-lg"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
