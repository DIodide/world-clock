import NavigationBar from "@/components/NavigationBar";
import Image from "next/image";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";

export default function Page() {
  return (
    <main>
      <div className="flex-auto flex-wrap">
        <LeftPanel className="min-w-[30vw] bg-red-300" id="panel1" />
        <RightPanel className="min-w-[70vw] bg-blue-300" id="panel2" />
      </div>
    </main>
  );
}
