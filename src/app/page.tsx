import Image from "next/image";
import { UsersRound, Mail } from "lucide-react";

const Page = () => {
  return (
    <main className="relative bg-white w-[400px] h-[535px] rounded-3xl overflow-hidden">
      <div className="bg-gray-300 w-[400px] h-[140px] rounded-t-3xl" />
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

        <div className="flex flex-col justify-center items-center w-full space-y-5 pt-32">
          {/* Nome e cargo */}
          <div className="text-center mt-4">
            <h2 className="text-weight-bold text-gray-500 text-2xl">
              Ana Silva
            </h2>
            <p className="text-gray-100 text-weight-medium text-xs">
              Desenvolvedora Full Stack
            </p>
          </div>

          {/* Estatísticas */}
          <div className="flex justify-between items-center w-3/5">
            <div className="flex flex-col justify-center items-center w-20 h-12">
              <span className="text-weight-bold text-shadow-gray-500 text-xl">
                980
              </span>
              <span className="text-weight-medium text-gray-200 text-xs">
                Seguidores
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-20 h-12">
              <span className="text-weight-bold text-shadow-gray-500 text-xl">
                180
              </span>
              <span className="text-weight-medium text-gray-200 text-xs">
                Seguindo
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-20 h-12">
              <span className="text-weight-bold text-shadow-gray-500 text-xl">
                42
              </span>
              <span className="text-weight-medium text-gray-200 text-xs">
                Projetos
              </span>
            </div>
          </div>

          {/* Botões */}
          <div className="flex justify-between items-center w-4/5">
            <button
              className="flex justify-center items-center w-[150px] h-12 rounded-xl shadow-lg shadow-green/30"
              style={{ background: "var(--gradient-follow)" }}
            >
              <UsersRound className="text-white" size={24} />
              <span className="text-weight-semibold text-white text-xs ml-4">
                Seguir
              </span>
            </button>
            <button
              className="flex justify-center items-center w-[150px] h-12 rounded-xl"
              style={{ background: "var(--color-gray-600)" }}
            >
              <Mail className="text-gray-400" size={24} />
              <span className="text-weight-semibold text-gray-400 text-xs ml-4">
                Mensagem
              </span>
            </button>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center items-center w-4/5">
            <p className="text-weight-normal text-xs text-gray-100">
              Apaixonada por criar experiências digitais incríveis.
            </p>
            <p className="text-weight-normal text-xs text-gray-100">
              Especialista em React e Node.js.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
