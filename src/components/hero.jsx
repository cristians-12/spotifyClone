export const Hero = () => {
  return (
    <>
      <main className="bg-[#171717] h-screen w-screen">
        <div className="flex justify-between p-4">
          <button className="bg-white font-bold px-2 py-1 rounded-2xl">
            Descubre premium
          </button>
          <button className="bg-black text-white font-bold px-2 py-1 rounded-2xl">Instalar app</button>
        </div>
        <img className="rounded-lg p-2 md:w-[20%] w-[30%]" src="https://mp3teca.co/-/images/26004_1400_20230825004731-300x300.jpg" alt="" />
      </main>
    </>
  );
};
