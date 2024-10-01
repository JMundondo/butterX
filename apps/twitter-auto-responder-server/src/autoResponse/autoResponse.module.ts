import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AutoResponseModuleBase } from "./base/autoResponse.module.base";
import { AutoResponseService } from "./autoResponse.service";
import { AutoResponseController } from "./autoResponse.controller";
import { AutoResponseResolver } from "./autoResponse.resolver";

@Module({
  imports: [AutoResponseModuleBase, forwardRef(() => AuthModule)],
  controllers: [AutoResponseController],
  providers: [AutoResponseService, AutoResponseResolver],
  exports: [AutoResponseService],
})
export class AutoResponseModule {}
