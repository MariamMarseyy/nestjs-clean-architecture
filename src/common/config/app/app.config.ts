import { ConfigService, registerAs } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

export interface I_AppConfig {
  nodeEnv: string;
  name: string;
  workingDirectory: string;
  frontendDomain: string;
  adminPanelDomain: string;
  backendDomain: string;
  port: number;
  apiPrefix: string;
  fallbackLanguage: string;
  headerLanguage: string;
}

export const setupAppConfig = (app: NestExpressApplication) => {
  const configService = app.get(ConfigService);

  app.setGlobalPrefix(configService.get('app.apiPrefix'));
};

export default registerAs(
  'app',
  (): I_AppConfig => ({
    nodeEnv: process.env.NODE_ENV,
    name: process.env.APP_NAME,
    workingDirectory: process.env.PWD || process.cwd(),
    frontendDomain: process.env.FRONTEND_DOMAIN,
    adminPanelDomain: process.env.FRONTEND_ADMIN_PANEL_DOMAIN,
    backendDomain: process.env.BACKEND_DOMAIN,
    port: parseInt(process.env.APP_PORT || process.env.PORT, 10) || 3001,
    apiPrefix: process.env.API_PREFIX || 'api',
    fallbackLanguage: process.env.APP_FALLBACK_LANGUAGE || 'en',
    headerLanguage: process.env.APP_HEADER_LANGUAGE || 'x-custom-lang',
  }),
);
