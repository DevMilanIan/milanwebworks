import Link from 'next/link';
import clsx from 'clsx';

type ButtonProps = {
  invert?: boolean;
} & (React.ComponentPropsWithoutRef<typeof Link> | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined }));

export function Button({ invert = false, className, children, ...props }: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert ? 'bg-brand-700 text-brand-50 hover:bg-brand-900' : 'bg-brand-300 text-brand-900 hover:bg-brand-50'
  );

  let inner = <span className="relative top-px">{children}</span>;

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    );
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  );
}
