export default function Input({ name, label, register, required }) {
  return (
    <label>
      {label || name}
      {/* <input name={label} ref={register({ required })} /> */}
      <input name={name} />
    </label>
  );
}
