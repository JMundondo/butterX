import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TwitterAccountServiceBase } from "./base/twitterAccount.service.base";

@Injectable()
export class TwitterAccountService extends TwitterAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
