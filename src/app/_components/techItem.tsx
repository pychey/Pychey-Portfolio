import { TechProps } from "@/types/techItem";

const TechItem = ({ icon, hoverColor, label, width, height }: TechProps) => {
  return (
    <div className={`group ${width} ${height} border flex flex-col gap-2 justify-center items-center rounded-md`}>
      <div className={`${hoverColor} duration-300`}>
        {icon}
      </div>
      {label && (
        <p className={`hidden sm:block text-xs text-muted-foreground`}>
          {label}
        </p>
      )}
    </div>
  );
}

export default TechItem;