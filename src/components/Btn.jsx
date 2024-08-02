const Btn = (props) => {
  const { color, onClick } = props;
  return (
    <button
      style={{ backgroundColor: color, padding: '20px', color: 'white' }}
      onClick={onClick}
    >
      Click me {color}
    </button>
  );
};
export default Btn;
