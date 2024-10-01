import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutoResponseServiceBase } from "./base/autoResponse.service.base";

@Injectable()
export class AutoResponseService extends AutoResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
