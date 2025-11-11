"use client";

import { useEffect, useState } from "react";
import { UsersRound, Mail, Check } from "lucide-react";
import Avatar from "../components/Avatar";
import ProfileStats from "./ProfileStats";
import Button from "../components/Button";

const ProfileCard = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(980);

  useEffect(() => {
    const storedFollow = localStorage.getItem("isFollowing");
    const storedFollowers = localStorage.getItem("followers");

    if (storedFollow) setIsFollowing(storedFollow === "true");
    if (storedFollowers) setFollowers(Number(storedFollowers));
  }, []);

  const handleFollow = () => {
    const newFollow = !isFollowing;
    const newFollowers = newFollow ? followers + 1 : followers - 1;

    setIsFollowing(newFollow);
    setFollowers(newFollowers);

    localStorage.setItem("isFollowing", String(newFollow));
    localStorage.setItem("followers", String(newFollowers));
  };

  return (
    <section className="relative bg-white w-[85%] sm:w-[380px] md:w-[445px] h-[450px] sm:h-[500px] md:h-[535px] rounded-3xl overflow-hidden mx-auto my-10">
      <div className="bg-gray-300 w-full h-[120px] sm:h-[130px] md:h-[145px] rounded-t-3xl" />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col rounded-3xl z-40 p-0.5 sm:p-2 md:p-3">
        <div className="absolute flex flex-col justify-center items-center w-full h-full space-y-4.5 sm:space-y-5 md:space-y-6 p-0.5 sm:p-3 md:p-4">
          {/* Foto de perfil */}
          <div className="pt-8 sm:pt-10 md:pt-14 left-1/2">
            <div className="relative w-28 h-28 md:w-30 md:h-30 rounded-full bg-purple-100 p-1">
              <Avatar src="/foto-perfil.png" />
            </div>
          </div>

          {/* Nome e cargo */}
          <div className="text-center">
            <h2 className="font-bold text-gray-500 text-lg sm:text-xl md:text-2xl">
              Ana Silva
            </h2>
            <p className="text-gray-100 text-xs sm:text-sm md:text-base">
              Desenvolvedora Full Stack
            </p>
          </div>

          {/* Estatísticas */}
          <ProfileStats followers={followers} />

          {/* Botões */}
          <div className="flex justify-center items-center w-full px-3 gap-8 sm:gap-10 md:gap-14">
            <Button
              text={isFollowing ? "Seguindo" : "Seguir"}
              icon={isFollowing ? Check : UsersRound}
              variant={isFollowing ? "success" : "follow"}
              ariaLabel={isFollowing ? "Deixar de seguir" : "Seguir perfil"}
              ariaPressed={isFollowing}
              onClick={handleFollow}
            />

            <Button text="Mensagem" icon={Mail} variant="default" />
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center items-center space-y-1 sm:space-y-2">
            <p className="font-normal text-xs sm:text-sm md:text-base text-gray-100 text-center">
              Apaixonada por criar experiências digitais incríveis.
            </p>
            <p className="font-normal text-xs sm:text-sm md:text-base text-gray-100 text-center">
              Especialista em React e Node.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
