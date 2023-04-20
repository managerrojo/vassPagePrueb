import '@/styles/globals.css';
import '@/components/header/Header.css';
import '@/components/section/seccion.css';
import '@/components/forms/Forms.css';
import '@/components/footer/Footer.css';
import '@/components/menu-se/Menu-se.css';
import '@/components/menu-mobile/Menu-mobile.css';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
