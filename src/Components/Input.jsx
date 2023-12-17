export default function Input({
  id = '',
  type = '',
  label = '',
  required = false,
  disabled = false,
  value = '',
  small = '',
  min = '',
  onChange = () => {},
}) {
  return (
    <>
      {/*      <!-- Input field --> */}
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          placeholder={label}
          className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-yellow-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 "
          required={required}
          disabled={disabled}
          value={value}
          min={min}
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className="absolute -top-2 left-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-yellow-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          {label}
        </label>
        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>{small}</span>
        </small>
      </div>
    </>
  );
}
