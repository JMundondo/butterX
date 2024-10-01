import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AutoResponseService } from "./autoResponse.service";
import { AutoResponseControllerBase } from "./base/autoResponse.controller.base";

@swagger.ApiTags("autoResponses")
@common.Controller("autoResponses")
export class AutoResponseController extends AutoResponseControllerBase {
  constructor(
    protected readonly service: AutoResponseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
