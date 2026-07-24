type ButtonProps = React.ComponentProps<"button">;

export function Button({ children, ...props }: ButtonProps) {
  return <button className="btn-carousel z-10" {...props }>{children}</button>;
}
