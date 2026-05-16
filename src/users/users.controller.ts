import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe, HttpException, HttpStatus, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { CreateUserDto } from './create-user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {

  }


  // ///a simple route to return  a dictionary
  // @Get()
  // getUsers() {
  //   return {
  //     username: 'mike',
  //     email: 'anson@AnalyserNode.com',
  //   };
  // }






  // //Handling routes 
  // @Get('posts')
  // getUsersPosts() {
  //   return [
  //     {
  //       username: 'anson',
  //       email: 'anson@gmail',
  //       posts: ['post1', 'post2'],
  //     },
  //   ];
  // }


  // @Get('posts/comments')
  // getUsersPostsComments() {
  //   return {
  //     posts: 'post title',
  //     comments: ['comment1', 'comment2'],
  //   };
  // }


  //Post requests

  @Post()
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send('User Created');
  }


  //Route Params

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return id;
  }

  //Querry Params
  // @Get()
  // getUsers(@Query('role') role: string) {
  //   return { role };
  // }
  // @Get()
  // getUsers(@Query('sortBy') sortBy: string) {
  //     console.log(sortBy);
  //     return {
  //         username: 'anson',
  //         email: 'anson@anson.com'
  //     };
  // }



  // @Get()
  // getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
  //     console.log(sortDesc);
  //     return {
  //         username: 'anson mike',
  //         email: 'anson@anson.com'
  //     };
  // }

  //

  // @Post()
  // createUser(@Body() userData: CreateUseDTO) {
  //     console.log(userData)
  //     return {}
  // }
  // @Post()
  // @UsePipes(new ValidationPipe())
  // createUser(@Body() userData: CreateUserDto) {
  //     console.log(userData);
  //     return {};
  // }

  // @Get(':id')
  // getUserById(@Param('id', ParseIntPipe) id: number) {
  //     console.log(id);
  //     return id;
  // }

  // @Get(':id/:postId')
  // getNestedParams(@Param('id') id: string, @Param('postId') postId: string) {
  //     return { id, postId };
  // }
  @Get()
  fetchAllUsers() {
    return this.userService.fetchUsers()
  }
  // @Post()
  // @UsePipes(new ValidationPipe())
  // createUser(@Body() userData: CreateUserDto) {
  //   this.userService.createUser(userData);
  //   return `User has been created`;
  // }

  // @Get(':id')
  // getUserById(@Param('id', ParseIntPipe) id: number) {
  //   const user = this.userService.fetchUserById(id);
  //   if (!user) {
  //     throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
  //   }
  //   return user;
  // }
}

@Controller('items')
export class ItemsController {
  @Get(':id')
  getItem(@Param('id', ParseIntPipe) id: number) {
    return { itemId: id };
  }
}
