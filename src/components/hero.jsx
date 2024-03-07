import { Bell } from "../assets/svg/svg";

export const Hero = () => {
  return (
    <>
      <main className="bg-[#171717] h-screen w-screen">
        <div className="flex justify-between p-4">
          <div className="flex items-center gap-2">
            <button className="bg-white font-bold px-2 py-1 rounded-2xl">
              Descubre premium
            </button>
            <button className="bg-black text-white font-bold px-3 py-2 rounded-3xl">
              Instalar app
            </button>
            <button className="bg-black p-1 rounded-2xl">
              <Bell />
            </button>
          </div>
        </div>
        <img
          className="rounded-lg p-2 md:w-[20%] w-[30%]"
          src="https://mp3teca.co/-/images/26004_1400_20230825004731-300x300.jpg"
          alt=""
        />
      </main>
    </>
  );
};
