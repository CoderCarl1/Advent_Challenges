export default function Row({ children, ...rest }) {
  return (
    <div data-flexrow {...rest}>
      {children}
    </div>
  );
}
