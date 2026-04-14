import Image from "next/image"

export default function Info() {
  return (
    <div className="flex flex-col md:flex-row items-center text-center md:items-center md:text-left">
      <Image
        src="/profile.jpeg"
        width={100}
        height={100}
        alt="Ojas Goyal"
        className="rounded-full mb-2.5 mt-2.5 md:mr-2.5"
      />

      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-[24px] leading-tight font-medium font-display">Ojas Goyal</h1>

        <p className="text-[16px] text-gray-600 md:ml-0.5">Software Developer</p>
        <p className="text-sm text-slate-800 leading-6 font-serif">building thoughtful products.</p>
      </div>
    </div>
  );
}
