# 🚀 react-gtm-ts

This is a library to facilitate the implementation of Google Tag Manager.

# Installation

```sh
npm install react-gtm-ts
or
yarn add react-gtm-ts
```

# Usage

Add ReactTagManager.init passing GTM code in app or \_app (nextjs):

```ts
import { ReactTagManager } from 'react-gtm-ts';

import { NextPageWithLayout } from '@Core/types/next';
import type { AppProps } from 'next/app';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  ReactTagManager.init('GTM-NGV448C');

  return <Component {...pageProps} />;
}

export default MyApp;
```

Now just use the ReactTagManager.action for the actions passing the event and the variables (optional)

```ts
import { ReactTagManager } from 'react-gtm-ts';

import { NextPageWithLayout } from '@Core/types/next';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          ReactTagManager.action({
            event: 'click_all_button',
            clickText: 'login',
          });
        }}
      >
        login
      </button>
    </div>
  );
};

export default Home;
```

# Learn More

To learn more about Google Tag Manager, take a look at the following resource [documentation](https://developers.google.com/tag-manager/devguide?hl=pt-br).
