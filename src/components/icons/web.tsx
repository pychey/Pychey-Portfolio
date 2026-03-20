import { IconProps } from '@/types/icon-prop';

const WebIcon = ({
  size = 48,
  color = 'currentColor',
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
    >
      <g fill="none" stroke={color} strokeWidth="3">
        <path
          strokeLinejoin="round"
          d="M3 24a21 21 0 1 0 42 0a21 21 0 1 0-42 0"
        />
        <path
          strokeLinejoin="round"
          d="M15 24a9 21 0 1 1 18 0a9 21 0 1 1-18 0"
        />
        <path strokeLinecap="round" d="M4.5 31h39m-39-14h39" />
      </g>
    </svg>
  );
};

export default WebIcon;
