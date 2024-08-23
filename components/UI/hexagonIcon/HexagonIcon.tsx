import "./style.css";

function HexagonIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="hex_icon relative">
      <a
        href="https:www.linkedin.com/in/đức-mạnh-trịnh-93ba221b4"
        target="_blank"
        className="absolute z-10 rotate-[-30deg] top-4 left-1"
      >
        {children}
      </a>
    </div>
  );
}

export default HexagonIcon;
