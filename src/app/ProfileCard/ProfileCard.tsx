"use client";

import { useState } from "react";
import { UsersRound, Mail, Check } from "lucide-react";
import Avatar from "../components/Avatar";
import ProfileStats from "./ProfileStats";
import Button from "../components/Button";

const ProfileCard = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(980);

  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
    setFollowers((prev) => (isFollowing ? prev - 1 : prev + 1));
  };

  return (
    <section className="relative bg-white w-full max-w-[400px] h-[535px] rounded-3xl overflow-hidden mx-auto my-10">
      <div className="bg-gray-300 w-full h-[140px] rounded-t-3xl" />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col rounded-3xl z-40">
        {/* Foto de perfil */}
        <div className="absolute top-[85px] left-1/2 -translate-x-1/2">
          <div className="relative w-28 h-28 rounded-full bg-purple-100 p-1">
            <Avatar src="/foto-perfil.png" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full space-y-7 pt-35">
          {/* Nome e cargo */}
          <div className="text-center space-y-2">
            <h2 className="font-bold text-gray-500 text-2xl">Ana Silva</h2>
            <p className="text-gray-100 font-medium text-xs">
              Desenvolvedora Full Stack
            </p>
          </div>

          {/* Estatísticas */}
          <ProfileStats followers={followers} />

          {/* Botões */}
          <div className="flex justify-between items-center w-4/5">
            <Button
              text={isFollowing ? "Seguindo" : "Seguir"}
              icon={isFollowing ? Check : UsersRound}
              variant={isFollowing ? "success" : "follow"}
              onClick={handleFollow}
            />

            <Button text="Mensagem" icon={Mail} variant="default" />
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
    </section>
  );
};

export default ProfileCard;
