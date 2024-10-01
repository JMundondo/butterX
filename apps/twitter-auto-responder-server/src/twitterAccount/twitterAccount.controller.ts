import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TwitterAccountService } from "./twitterAccount.service";
import { TwitterAccountControllerBase } from "./base/twitterAccount.controller.base";

@swagger.ApiTags("twitterAccounts")
@common.Controller("twitterAccounts")
export class TwitterAccountController extends TwitterAccountControllerBase {
  constructor(
    protected readonly service: TwitterAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
