import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="flex justify-center items-center text-3xl ">HI ALL </p>
      <div>
        <p>
          Available routes are: /footer1, /footer2, /header1,/header2,
          /contact1, /contact2, /pricing1
        </p>
      </div>
    </div>
  );
}
