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
    <div className="flex justify-between items-center w-3/5">
      {stats.map((stat) => (
        <StatItem key={stat.label} value={stat.value ?? 0} label={stat.label} />
      ))}
    </div>
  );
};

export default ProfileStats;
