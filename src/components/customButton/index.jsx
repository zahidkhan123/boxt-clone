export const CustomButton = ({ text, onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {text}
    </button>
  );
};
