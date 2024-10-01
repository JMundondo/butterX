import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubscriptionModuleBase } from "./base/subscription.module.base";
import { SubscriptionService } from "./subscription.service";
import { SubscriptionController } from "./subscription.controller";
import { SubscriptionResolver } from "./subscription.resolver";

@Module({
  imports: [SubscriptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubscriptionController],
  providers: [SubscriptionService, SubscriptionResolver],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
