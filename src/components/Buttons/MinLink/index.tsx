import Link from 'next/link';
import { A } from './styles';

const MinLink = ({ children, href, dataTestId = 'link' }) => (
  <Link href={href}>
    <A data-testid={dataTestId}>{children}</A>
  </Link>
);

export default MinLink;
