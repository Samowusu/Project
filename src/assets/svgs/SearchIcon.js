import React from "react";

function SearchIcon({ width = 20, height = 21, color = "white" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.76131 18.125C5.05298 18.125 1.21965 14.2917 1.21965 9.58333C1.21965 4.875 5.05298 1.04167 9.76131 1.04167C14.4696 1.04167 18.303 4.875 18.303 9.58333C18.303 14.2917 14.4696 18.125 9.76131 18.125ZM9.76131 2.29167C5.73631 2.29167 2.46965 5.56667 2.46965 9.58333C2.46965 13.6 5.73631 16.875 9.76131 16.875C13.7863 16.875 17.053 13.6 17.053 9.58333C17.053 5.56667 13.7863 2.29167 9.76131 2.29167Z"
        fill={color}
      />
      <path
        d="M18.5113 18.9583C18.353 18.9583 18.1946 18.9 18.0696 18.775L16.403 17.1083C16.1613 16.8667 16.1613 16.4667 16.403 16.225C16.6446 15.9833 17.0447 15.9833 17.2863 16.225L18.953 17.8917C19.1947 18.1333 19.1947 18.5333 18.953 18.775C18.828 18.9 18.6697 18.9583 18.5113 18.9583Z"
        fill={color}
      />
    </svg>
  );
}

export default SearchIcon;
