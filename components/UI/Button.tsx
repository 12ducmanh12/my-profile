function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="px-5 py-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg drop-shadow-2xl"
      style={{ filter: "drop-shadow(0rem 1rem 0.7rem #115e59)" }}
    >
      {children}
    </button>
  );
}

export default Button;
