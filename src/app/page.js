import Image from "next/image";
import FormLeft from "@/components/FormLeft";
import Cards from "@/components/Cards";
export default function Home() {
  return (
    <div className="flex items-center justify-start">
      {/* <FormLeft></FormLeft> */}
      {/* <FormRight></FormRight> */}
      <Cards></Cards>
    </div>
  );
}
