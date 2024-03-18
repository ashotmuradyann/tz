import { ConfigModule, ConfigService } from "@nestjs/config";

export const mongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>("MONGODB_URI"),
    connectionFactory: (connection) => {
      return connection;
    },
  }),
  inject: [ConfigService],
};
