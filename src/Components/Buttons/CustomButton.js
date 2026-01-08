import Loader from './Loader';

const VARIANT_CLASSES = {
  primary: 'bg-blue-600 hover:bg-blue-700',
  secondary: 'bg-gray-600 hover:bg-gray-700',
  danger: 'bg-red-600 hover:bg-red-700',
  success: 'bg-green-600 hover:bg-green-700',
  info: 'bg-purple-600 hover:bg-purple-700',
  save: 'bg-indigo-600 hover:bg-indigo-700',
};

const SIZE_CLASSES = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export default function CustomButton({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        flex items-center justify-center gap-2
        rounded-md font-medium transition text-white
        ${VARIANT_CLASSES[variant]}
        ${SIZE_CLASSES[size]}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}
