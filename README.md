<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
  <a href="https://opencollective.com/nest#sponsor"  target="blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Description

Nest framework TypeScript starter repository.

---

## 🌐 What NestJS Is

NestJS is a progressive Node.js framework for building efficient, scalable server-side applications.

It’s built on top of Express (and optionally Fastify), meaning you can use familiar middleware and packages like passport for authentication without relearning everything.

It’s TypeScript-first, so you get strong typing, decorators, and modern language features out of the box.

## 🔗 Relationship to Express

Express is the most widely used Node.js web framework, but it’s minimalistic—you have to wire up routing, middleware, and structure yourself.

NestJS takes Express (or Fastify) and adds a structured architecture inspired by Angular: modules, controllers, services, dependency injection.

This makes NestJS more suitable for large-scale applications where maintainability and testability matter.

## 💡 Why It’s Useful

- Consistency: Provides a clear, opinionated way to organize code (modules, controllers, providers).
- Scalability: Built to handle enterprise-level apps, microservices, and GraphQL APIs.
- Compatibility: Since it sits on Express, existing Node.js libraries integrate easily.
- Developer Experience: CLI scaffolding, decorators, and TypeScript make development faster and less error-prone.

## 🔧 What the CLI Is

The NestJS CLI (@nestjs/cli) is a command-line tool that helps you scaffold, generate, and manage NestJS projects.

It’s similar to Angular CLI if you’ve used Angular before—it automates repetitive tasks like creating modules, controllers, and services. Without the CLI, you’d have to manually create files and wire them up in app.module.ts.

## 📘 Chapter 1: Install Nest CLI

```bash
npm i -g @nestjs/cli
nest -v   # check version
nest -h   # help menu
```

## 📘 Chapter 2: Create Nest Project

```bash
nest new nestjs-crash-course
# choose npm, yarn, or pnpm as package manager
cd nestjs-crash-course
yarn start:dev   # or npm run start:dev
```

## 📘 Chapter 3: Project File Overview

Generated files include:

- `app.module.ts` (root module)
- `app.controller.ts` (default controller)
- `app.service.ts` (default service)
- `main.ts` (entry point)

## 📘 Chapter 4: main.ts Entry Point

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001); // changed from 3000
}
bootstrap();
```

## 📘 Chapter 5: Generate a Module

```bash
nest generate module users
```

This creates `users/users.module.ts`:

```typescript
import { Module } from '@nestjs/common';

@Module({})
export class UsersModule {}
```

## 📘 Chapter 6: Generate a Controller

```bash
nest generate controller users/controllers/users
```

This creates `users/controllers/users.controller.ts`:

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'anson', email: 'anson@anson.com' };
  }
}
```

## 📘 Chapter 7: Handling Routes

```typescript
@Get('posts')
getUsersPosts() {
  return [
    { username: 'anson', email: 'anson@anson.com', posts: ['post1', 'post2'] }
  ];
}

@Get('posts/comments')
getUsersPostsComments() {
  return { post: 'post1', comments: ['Nice!', 'Great work!'] };
}
```

## 📘 Chapter 8: Post Requests

```typescript
import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Post()
  createUser(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);
    return res.send('User created!');
  }
}
```

## 📘 Chapter 9: Request Bodies & DTOs

```typescript
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;
}
```

Controller usage:

```typescript
import { Body } from '@nestjs/common';

@Post()
createUser(@Body() createUserDto: CreateUserDto) {
  return createUserDto;
}
```

## 📘 Chapter 10: Route Params

```typescript
@Get(':id')
getUser(@Param('id') id: string) {
  return { userId: id };
}
```

## 📘 Chapter 11: Query Params

```typescript
@Get()
getUsers(@Query('role') role: string) {
  return { role };
}
```

## 📘 Chapter 12: Validation Pipe

```typescript
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
```

## 📘 Chapter 13: Services & Providers

```bash
nest generate service users/services/users
```

`users/services/users.service.ts`:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [{ username: 'anson', email: 'anson@anson.com' }];
  }
}
```

Controller:

```typescript
constructor(private readonly usersService: UsersService) {}

@Get()
getUsers() {
  return this.usersService.findAll();
}
```

## 📘 Chapter 14: Middleware

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request... ${req.method} ${req.url}`);
    next();
  }
}
```

## 📘 Chapter 15: Pipes & Transformations

```typescript
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return typeof value === 'string' ? value.toUpperCase() : value;
  }
}
```

Usage:

```typescript
@Get()
getUser(@Query('name', UppercasePipe) name: string) {
  return { name };
}
```

## 📘 Chapter 16: Guards

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return request.headers.authorization === 'secret';
  }
}
```

Usage:

```typescript
@UseGuards(AuthGuard)
@Get('protected')
getProtected() {
  return { message: 'Authorized!' };
}
```# Nest_demo-
