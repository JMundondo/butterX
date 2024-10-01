import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrendServiceBase } from "./base/trend.service.base";

@Injectable()
export class TrendService extends TrendServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
