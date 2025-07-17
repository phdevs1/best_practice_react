import { useRef } from "react";

export const FocustInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (!inputRef.current) {
        console.error("Input reference is not set");
        return;
    }
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Focus Input Example</h1>
      <input type="text" ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}