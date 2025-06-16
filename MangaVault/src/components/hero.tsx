import { Logo } from "./Logo"

export const Hero = () => {
  return (
    <div className="flex justify-center items-center bg-[url('/src/assets/narutobg.jpg')] bg-cover bg-center h-screen w-full">
        <Logo />
      <div className="text-center space-y-4">
        <h1 className="font-bold text-5xl">MangaVault</h1>
        <h2 className="text-2xl">Not every panel makes history. These did.</h2>
      </div>
    </div>
  );
};
