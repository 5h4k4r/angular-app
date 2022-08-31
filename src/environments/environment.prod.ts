import { AppConfig } from 'src/app/interfaces/app-config';

export const environment: AppConfig = {
  production: true,
  apiUrl: window["env"]["apiUrl"] || "default"
};
