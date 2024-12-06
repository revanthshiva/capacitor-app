import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor-app',
  webDir: 'build',
  server:{
    url:'http://172.20.10.2:3000',
    cleartext:true
  }
};

export default config;
