import Image from "next/image";
import circleDottedShape from '@/assets/svg/circle_dotted_shape.svg';

const PlayButton = () => {
  return (
    <div className="relative rounded-[10px] border-[3px] border-[#FFC758] bg-[#AE6C0A] px-4 py-1.5 overflow-hidden flex items-center justify-center">
      {/* SVG with gradient shadow in the top-right corner */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="78"
        height="77"
        viewBox="0 0 78 77"
        className="absolute -top-6 -right-6 pointer-events-none"
      >
        <defs>
          <filter id="blurEffect" x="-30%" y="-30%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="16.5" result="blur" />
          </filter>
        </defs>
        <circle cx="78" cy="-1" r="45" fill="#FFC758" filter="url(#blurEffect)" />
      </svg>

      {/* Circle dotted image at left-center */}
      <Image 
        src={circleDottedShape} 
        height={100} 
        width={100} 
        alt="circle"
        className="absolute -left-10 top-1/2 transform -translate-y-1/2 pointer-events-none"
      />

      {/* Play Button Text */}
      <h1 className="text-white text-center font-bold text-[25px] relative z-10">
        Play
      </h1>
    </div>
  );
};

export default PlayButton;
