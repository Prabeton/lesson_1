const Student = ({
  name,
  subject,
  description = "Anonymous",
  children,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <h2>{name}</h2>
      <h3>{subject}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Student;
