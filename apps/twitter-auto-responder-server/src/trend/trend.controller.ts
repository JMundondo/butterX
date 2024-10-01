import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TrendService } from "./trend.service";
import { TrendControllerBase } from "./base/trend.controller.base";

@swagger.ApiTags("trends")
@common.Controller("trends")
export class TrendController extends TrendControllerBase {
  constructor(
    protected readonly service: TrendService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
