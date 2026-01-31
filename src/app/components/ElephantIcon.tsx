export function ElephantIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        {/* Saffron color - top */}
        <path
          d="M12 3C8 3 5 5 4 7C3.5 7.8 3.2 8.5 3 9.3C2.8 10 3 10.5 3 11H21C21 10.5 21.2 10 21 9.3C20.8 8.5 20.5 7.8 20 7C19 5 16 3 12 3Z"
          fill="#FF9933"
        />
        {/* White color - middle */}
        <path
          d="M3 11H21V13H3V11Z"
          fill="#FFFFFF"
          stroke="#666666"
          strokeWidth="0.3"
        />
        {/* Green color - bottom */}
        <path
          d="M3 13C3 13.5 3 14 3.2 14.5C3.5 15.5 4 16.5 5 17.5C6 18.5 7.5 19.5 9 20C10 20.3 11 20.5 12 20.5C13 20.5 14 20.3 15 20C16.5 19.5 18 18.5 19 17.5C20 16.5 20.5 15.5 20.8 14.5C21 14 21 13.5 21 13H3Z"
          fill="#138808"
        />
        {/* Trunk */}
        <path
          d="M12 13C11.5 13 11 13.2 11 13.5V18C11 18.5 11.2 19 11.5 19.3C11.8 19.6 12.2 19.6 12.5 19.3C12.8 19 13 18.5 13 18V13.5C13 13.2 12.5 13 12 13Z"
          fill="#FF9933"
        />
        {/* Eyes */}
        <circle cx="9" cy="8" r="1" fill="#000000" />
        <circle cx="15" cy="8" r="1" fill="#000000" />
        {/* Ears */}
        <path
          d="M4 8C3.5 8 3 8.5 3 9C3 10 3.5 11 4 11C4.5 11 5 10.5 5 10C5 9 4.5 8 4 8Z"
          fill="#FF9933"
        />
        <path
          d="M20 8C20.5 8 21 8.5 21 9C21 10 20.5 11 20 11C19.5 11 19 10.5 19 10C19 9 19.5 8 20 8Z"
          fill="#FF9933"
        />
      </g>
    </svg>
  );
}
