interface Props {
  onInputChange: (value: string) => void;
}
export const Input = (props: Props) => {
  return (
    <input
      type="number"
      onChange={(e) => props.onInputChange(e.target.value)}
    />
  );
};
