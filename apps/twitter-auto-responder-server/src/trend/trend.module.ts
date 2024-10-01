import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TrendModuleBase } from "./base/trend.module.base";
import { TrendService } from "./trend.service";
import { TrendController } from "./trend.controller";
import { TrendResolver } from "./trend.resolver";

@Module({
  imports: [TrendModuleBase, forwardRef(() => AuthModule)],
  controllers: [TrendController],
  providers: [TrendService, TrendResolver],
  exports: [TrendService],
})
export class TrendModule {}
