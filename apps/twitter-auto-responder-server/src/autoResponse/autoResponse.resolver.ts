import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AutoResponseResolverBase } from "./base/autoResponse.resolver.base";
import { AutoResponse } from "./base/AutoResponse";
import { AutoResponseService } from "./autoResponse.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AutoResponse)
export class AutoResponseResolver extends AutoResponseResolverBase {
  constructor(
    protected readonly service: AutoResponseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
