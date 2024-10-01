/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  TwitterAccount as PrismaTwitterAccount,
  AutoResponse as PrismaAutoResponse,
} from "@prisma/client";

export class TwitterAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TwitterAccountCountArgs, "select">
  ): Promise<number> {
    return this.prisma.twitterAccount.count(args);
  }

  async twitterAccounts(
    args: Prisma.TwitterAccountFindManyArgs
  ): Promise<PrismaTwitterAccount[]> {
    return this.prisma.twitterAccount.findMany(args);
  }
  async twitterAccount(
    args: Prisma.TwitterAccountFindUniqueArgs
  ): Promise<PrismaTwitterAccount | null> {
    return this.prisma.twitterAccount.findUnique(args);
  }
  async createTwitterAccount(
    args: Prisma.TwitterAccountCreateArgs
  ): Promise<PrismaTwitterAccount> {
    return this.prisma.twitterAccount.create(args);
  }
  async updateTwitterAccount(
    args: Prisma.TwitterAccountUpdateArgs
  ): Promise<PrismaTwitterAccount> {
    return this.prisma.twitterAccount.update(args);
  }
  async deleteTwitterAccount(
    args: Prisma.TwitterAccountDeleteArgs
  ): Promise<PrismaTwitterAccount> {
    return this.prisma.twitterAccount.delete(args);
  }

  async findAutoResponses(
    parentId: string,
    args: Prisma.AutoResponseFindManyArgs
  ): Promise<PrismaAutoResponse[]> {
    return this.prisma.twitterAccount
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .autoResponses(args);
  }
}
