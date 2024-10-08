/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AutoResponse } from "./AutoResponse";
import { AutoResponseCountArgs } from "./AutoResponseCountArgs";
import { AutoResponseFindManyArgs } from "./AutoResponseFindManyArgs";
import { AutoResponseFindUniqueArgs } from "./AutoResponseFindUniqueArgs";
import { CreateAutoResponseArgs } from "./CreateAutoResponseArgs";
import { UpdateAutoResponseArgs } from "./UpdateAutoResponseArgs";
import { DeleteAutoResponseArgs } from "./DeleteAutoResponseArgs";
import { Trend } from "../../trend/base/Trend";
import { TwitterAccount } from "../../twitterAccount/base/TwitterAccount";
import { AutoResponseService } from "../autoResponse.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AutoResponse)
export class AutoResponseResolverBase {
  constructor(
    protected readonly service: AutoResponseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AutoResponse",
    action: "read",
    possession: "any",
  })
  async _autoResponsesMeta(
    @graphql.Args() args: AutoResponseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AutoResponse])
  @nestAccessControl.UseRoles({
    resource: "AutoResponse",
    action: "read",
    possession: "any",
  })
  async autoResponses(
    @graphql.Args() args: AutoResponseFindManyArgs
  ): Promise<AutoResponse[]> {
    return this.service.autoResponses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AutoResponse, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AutoResponse",
    action: "read",
    possession: "own",
  })
  async autoResponse(
    @graphql.Args() args: AutoResponseFindUniqueArgs
  ): Promise<AutoResponse | null> {
    const result = await this.service.autoResponse(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AutoResponse)
  @nestAccessControl.UseRoles({
    resource: "AutoResponse",
    action: "create",
    possession: "any",
  })
  async createAutoResponse(
    @graphql.Args() args: CreateAutoResponseArgs
  ): Promise<AutoResponse> {
    return await this.service.createAutoResponse({
      ...args,
      data: {
        ...args.data,

        trend: args.data.trend
          ? {
              connect: args.data.trend,
            }
          : undefined,

        twitterAccount: args.data.twitterAccount
          ? {
              connect: args.data.twitterAccount,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AutoResponse)
  @nestAccessControl.UseRoles({
    resource: "AutoResponse",
    action: "update",
    possession: "any",
  })
  async updateAutoResponse(
    @graphql.Args() args: UpdateAutoResponseArgs
  ): Promise<AutoResponse | null> {
    try {
      return await this.service.updateAutoResponse({
        ...args,
        data: {
          ...args.data,

          trend: args.data.trend
            ? {
                connect: args.data.trend,
              }
            : undefined,

          twitterAccount: args.data.twitterAccount
            ? {
                connect: args.data.twitterAccount,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AutoResponse)
  @nestAccessControl.UseRoles({
    resource: "AutoResponse",
    action: "delete",
    possession: "any",
  })
  async deleteAutoResponse(
    @graphql.Args() args: DeleteAutoResponseArgs
  ): Promise<AutoResponse | null> {
    try {
      return await this.service.deleteAutoResponse(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Trend, {
    nullable: true,
    name: "trend",
  })
  @nestAccessControl.UseRoles({
    resource: "Trend",
    action: "read",
    possession: "any",
  })
  async getTrend(
    @graphql.Parent() parent: AutoResponse
  ): Promise<Trend | null> {
    const result = await this.service.getTrend(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => TwitterAccount, {
    nullable: true,
    name: "twitterAccount",
  })
  @nestAccessControl.UseRoles({
    resource: "TwitterAccount",
    action: "read",
    possession: "any",
  })
  async getTwitterAccount(
    @graphql.Parent() parent: AutoResponse
  ): Promise<TwitterAccount | null> {
    const result = await this.service.getTwitterAccount(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
