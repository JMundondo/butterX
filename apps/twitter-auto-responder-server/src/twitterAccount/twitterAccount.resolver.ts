import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TwitterAccountResolverBase } from "./base/twitterAccount.resolver.base";
import { TwitterAccount } from "./base/TwitterAccount";
import { TwitterAccountService } from "./twitterAccount.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TwitterAccount)
export class TwitterAccountResolver extends TwitterAccountResolverBase {
  constructor(
    protected readonly service: TwitterAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
