import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, child => {
    // Determine if this child is the selected one
    const isChecked = selected === child.props.value;

    // Clone the child element with additional props
    return React.cloneElement(child, {
      checked: isChecked,
      onChange: () => onChange(child.props.value)
    });
  });

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  return (
    <div className="RadioOption">
      <input 
        id={value} 
        type="radio" 
        name="radioGroup" // name should be same for all options
        checked={checked} 
        onChange={onChange} 
        value={value}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
