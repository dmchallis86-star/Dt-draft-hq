import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'uk.co.dt.drafthq',
  appName: 'D&T Draft HQ',
  webDir: '.',
  server: {
    androidScheme: 'https'
  }
};

export default config;
