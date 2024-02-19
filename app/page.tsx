import NavigationBar from "@/components/NavigationBar";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className="flex-auto">
        <div className="min-w-50" id="panel1">
          Put left panel component here.
        </div>
        <div className="min-w-50" id="panel2">
          Put right panel here.
        </div>
      </div>
    </main>
  );
}
