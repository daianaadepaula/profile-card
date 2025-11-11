import StatItem from "./StatItem";

interface ProfileStatsProps {
  followers?: number;
  following?: number;
  projects?: number;
}

const ProfileStats = ({
  followers,
  following = 180,
  projects = 42,
}: ProfileStatsProps) => {
    const stats = [
      { value: followers, label: "Seguidores" },
      { value: following, label: "Seguindo" },
      { value: projects, label: "Projetos" },
    ];

  return (
    <div className="flex justify-center items-center w-[75%] gap-2 sm:gap-6 md:gap-8">
      {stats.map((stat) => (
        <StatItem key={stat.label} value={stat.value ?? 0} label={stat.label} />
      ))}
    </div>
  );
};

export default ProfileStats;
