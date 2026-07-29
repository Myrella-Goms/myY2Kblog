interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  value: string;
  options: Option[];
  onChange?: (value: string) => void;
}
export function Select({ value, options, onChange }: SelectProps) {
  return (
    <select name="songs" className="select-wrapper border hover:border-primary bg-background"
      value={value}
      onChange={(e) => 
        onChange?.(e.target.value)}
    >
      {options.map((option) => (
        <option className="hover:bg-primary cursor-pointer" key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
