"use client";

import Image from "next/image";
import { useState } from "react";
import { UsersRound, Mail, Check } from "lucide-react";

const Page = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(980);

  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
    setFollowers((prev) => (isFollowing ? prev - 1 : prev + 1));
  };

  return (
    <main className="relative bg-white w-full max-w-[450px] h-[565px] rounded-3xl overflow-hidden mx-auto my-10">
      <div className="bg-gray-300 w-full h-[140px] rounded-t-3xl" />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col rounded-3xl z-40">
        {/* Foto de perfil */}
        <div className="absolute top-[85px] left-1/2 -translate-x-1/2">
          <div className="relative w-28 h-28 rounded-full bg-purple-100 p-1">
            <div className="rounded-full border-4 border-white overflow-hidden">
              <Image
                src="/foto-perfil.png"
                width={136}
                height={136}
                alt="Foto do perfil"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full space-y-7 pt-30">
          {/* Nome e cargo */}
          <div className="text-center space-y-2">
            <h2 className="font-bold text-gray-500 text-2xl">Ana Silva</h2>
            <p className="text-gray-100 font-medium text-xs">
              Desenvolvedora Full Stack
            </p>
          </div>

          {/* Estatísticas */}
          <div className="flex justify-between items-center w-3/5">
            <div className="flex flex-col justify-center items-center w-20 h-12">
              <span className="font-bold text-shadow-gray-500 text-xl">
                {followers}
              </span>
              <span className="font-medium text-gray-200 text-xs">
                Seguidores
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-20 h-12">
              <span className="font-bold text-shadow-gray-500 text-xl">
                180
              </span>
              <span className="font-medium text-gray-200 text-xs">
                Seguindo
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-20 h-12">
              <span className="font-bold text-shadow-gray-500 text-xl">42</span>
              <span className="font-medium text-gray-200 text-xs">
                Projetos
              </span>
            </div>
          </div>

          {/* Botões */}
          <div className="flex justify-between items-center w-4/5">
            <button
              onClick={handleFollow}
              className={`flex justify-center items-center w-[150px] h-12 rounded-xl shadow-lg shadow-green/30 space-x-3 transition-all duration-200 ease-in-out hover:opacity-80 cursor-pointer`}
              style={{
                background: isFollowing
                  ? "var(--color-green)"
                  : "var(--gradient-follow)",
              }}
            >
              {isFollowing ? (
                <>
                  <Check className="text-white" size={24} />
                  <span className="font-semibold text-white text-[14px]">
                    Seguindo
                  </span>
                </>
              ) : (
                <>
                  <UsersRound className="text-white" size={24} />
                  <span className="font-semibold text-white text-[14px]">
                    Seguir
                  </span>
                </>
              )}
            </button>
            <button
              className="flex justify-center items-center w-[150px] h-12 rounded-xl space-x-3 transition-all duration-200 ease-in-out hover:opacity-80 cursor-pointer"
              style={{ background: "var(--color-gray-600)" }}
            >
              <Mail className="text-gray-400" size={24} />
              <span className="font-semibold text-gray-400 text-[14px]">
                Mensagem
              </span>
            </button>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center items-center w-4/5 space-y-2">
            <p className="font-normal text-xs text-gray-100">
              Apaixonada por criar experiências digitais incríveis.
            </p>
            <p className="font-normal text-xs text-gray-100">
              Especialista em React e Node.js.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;


