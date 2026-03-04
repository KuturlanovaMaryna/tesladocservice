export default function LeftIcon({ disabled }: { disabled?: boolean }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={disabled ? "opacity-50" : ""}
    >
      <path
        d="M25 8.33325L13.3333 19.9999L25 31.6666"
        stroke={disabled ? "#fff" : "#fff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
