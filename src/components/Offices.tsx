import clsx from 'clsx';

function Office({ name, children, invert = false }: { name: string; children: React.ReactNode; invert?: boolean }) {
  return (
    <address className={clsx('text-sm not-italic', invert ? 'text-brand-400' : 'text-brand-300')}>
      <strong className={invert ? 'text-brand-400' : 'text-brand-50'}>{name}</strong>
      <br />
      {children}
    </address>
  );
}

export function Offices({ invert = false, ...props }: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="United States" invert={invert}>
          Clare County, MI
          <br />
        </Office>
      </li>
    </ul>
  );
}
