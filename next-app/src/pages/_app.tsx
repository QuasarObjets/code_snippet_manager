// File: /mi-app-codigo/next-app/src/pages/_app.tsx

import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;

// Este archivo es el punto de entrada de la aplicación Next.js y se utiliza para envolver todos los componentes con proveedores y configuraciones globales. Aquí se importa el archivo de estilos globales y se define el componente `MyApp` que recibe las propiedades de la aplicación y renderiza el componente principal de cada página.