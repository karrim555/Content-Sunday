
import React from 'react';

interface AppLogoProps {
  size?: number;
}

const AppLogo: React.FC<AppLogoProps> = ({ size = 40 }) => (
  <svg
    width={size * 2}
    height={size}
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60Z"
      className="text-yellow-500"
      fill="currentColor"
    />
    <path
      d="M90 60C73.4315 60 60 46.5685 60 30C60 13.4315 73.4315 0 90 0C106.569 0 120 13.4315 120 30C120 46.5685 106.569 60 90 60Z"
      className="text-gray-800"
      fill="currentColor"
    />
  </svg>
);

export default AppLogo;
