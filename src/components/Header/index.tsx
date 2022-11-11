import Image from 'next/future/image';
import Link from 'next/link';

import logoImg from '../../assets/logo.svg';
import { Cart } from '../Cart';

import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="logo da ignite shop" />
      </Link>
      

      <Cart />
    </HeaderContainer>
  )
}