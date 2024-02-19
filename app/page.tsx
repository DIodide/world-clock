import NavigationBar from "@/components/NavigationBar";
import Image from "next/image";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";

export default function Page() {
  return (
    <main>
      <div className="flex-auto">
        <div className="min-w-50" id="panel1">
          <LeftPanel/>
        </div>
        <div className="min-w-50" id="panel2">
          <RightPanel/>
        </div>
      </div>
    </main>
  );
}
