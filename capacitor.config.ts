import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "check",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.120.24:3000",
    cleartext: true,
  },
};

export default config;
