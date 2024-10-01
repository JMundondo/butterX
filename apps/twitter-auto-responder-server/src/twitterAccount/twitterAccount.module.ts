import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TwitterAccountModuleBase } from "./base/twitterAccount.module.base";
import { TwitterAccountService } from "./twitterAccount.service";
import { TwitterAccountController } from "./twitterAccount.controller";
import { TwitterAccountResolver } from "./twitterAccount.resolver";

@Module({
  imports: [TwitterAccountModuleBase, forwardRef(() => AuthModule)],
  controllers: [TwitterAccountController],
  providers: [TwitterAccountService, TwitterAccountResolver],
  exports: [TwitterAccountService],
})
export class TwitterAccountModule {}
