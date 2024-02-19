import NavigationBar from "@/components/NavigationBar";
import Image from "next/image";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";

export default function Page() {
  return (
    <main>
      <div className="flex flex-wrap min-h-screen text-white">
        <LeftPanel className="min-w-[29.5vw]  bg-gray-700" id="panel1" />
        <RightPanel className="min-w-[69vw]  bg-gray-400" id="panel2" />
      </div>
    </main>
  );
}
