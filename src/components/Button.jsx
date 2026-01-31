function Button(props) {
  const { children, onClick, className } = props;
  return (
    <button
      onClick={onClick}
      className={`bg-[#FF8906] cursor-pointer rounded-md py-4 w-full ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;