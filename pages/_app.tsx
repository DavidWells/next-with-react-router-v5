import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  )
}

function SafeHydrate({ children }) {
	// Must be a div, can't be a fragment 😑🤦‍♂️
  return (
    <div suppressHydrationWarning>
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

export default App;
