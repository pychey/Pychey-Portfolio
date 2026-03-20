import { IconProps } from '@/types/icon-prop';

const FlutterIcon = ({
  size = 24,
  color = 'currentColor',
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill={color} d="M5.9 15.375L2.5 12l11-11h6.775zM13.5 23l-5.925-5.925L13.5 11.15h6.775l-5.925 5.925L20.275 23z"/>
    </svg>
  );
};

export default FlutterIcon;
