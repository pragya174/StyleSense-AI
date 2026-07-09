function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-pink-600 hover:bg-pink-700 text-white",

    secondary:
      "border border-slate-700 hover:bg-slate-800 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;