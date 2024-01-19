import Categories from "@/components/Categories";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-10 xl:px-40">
      <div>
        <Categories />
      </div>
    </main>
  );
}
