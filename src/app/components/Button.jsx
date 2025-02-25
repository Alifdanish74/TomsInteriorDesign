"use client";
import { useRouter } from "next/navigation";

const Button = ({ text, redirect }) => {
  const router = useRouter();

  const handleClick = () => {
    if (redirect) {
      router.push(redirect);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-[#7C877F] text-white rounded-lg hover:bg-gray-600 transition"
    >
      {text}
    </button>
  );
};

export default Button;
