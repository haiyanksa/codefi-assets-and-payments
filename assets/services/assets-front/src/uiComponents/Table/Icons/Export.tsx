import React from 'react';

interface ExportProps {
  /** Arrow color */
  color?: string;
}
export const Export: React.FC<ExportProps> = ({ color }) => {
  const defaultColor = color ?? '#777C8C';
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z"
        fill={defaultColor}
      />
    </svg>
  );
};