interface StatItemProps {
  value: number | string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-20 h-12">
      <span className="font-bold text-shadow-gray-500 text-xl">{value}</span>
      <span className="font-medium text-gray-200 text-xs">{label}</span>
    </div>
  );
};

export default StatItem;
