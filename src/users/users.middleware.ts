import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {
    console.log("Example Middleware")
    const { authorization } = req.headers;

    if (!authorization) {
      throw new HttpException('No authorization token', HttpStatus.FORBIDDEN);
    }

    if (authorization === 'valid-token') {
      next();
    } else {
      throw new HttpException('Invalid authorization token', HttpStatus.FORBIDDEN);
    }
  }
}
