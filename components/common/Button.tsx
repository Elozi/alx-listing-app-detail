export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button = ({ label, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      {label}
    </button>
  );
};

export default Button;

