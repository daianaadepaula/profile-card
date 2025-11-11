interface StatItemProps {
  value: number | string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-20 h-10 sm:h-12">
      <span className="font-bold text-shadow-gray-500 text-lg sm:text-xl md:text-2xl">
        {value}
      </span>
      <span className="font-medium text-gray-200 text-xs sm:text-sm md:text-base">
        {label}
      </span>
    </div>
  );
};

export default StatItem;
