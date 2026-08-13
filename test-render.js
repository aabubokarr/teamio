import React from 'react';
import { renderToString } from 'react-dom/server';
import { ProfileSwitcher } from './src/components/modules/profile-switcher.tsx';

try {
  console.log(renderToString(<ProfileSwitcher />));
} catch (e) {
  console.error(e);
}
