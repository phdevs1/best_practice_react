import "./Button2.css";
interface Props {
  label: string;
  parentMethod: () => void;
}

export const Button2 = ({label, parentMethod}: Props) => {
  return (
    <button className="custom-button2" onClick={parentMethod}>
      {label}
    </button>
  );
}