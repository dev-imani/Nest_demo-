import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ItemsController, UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersMiddleware } from './users.middleware';
import { AnothermiddlewareMiddleware } from './anothermiddleware.middleware';


@Module({
    imports: [],
    controllers: [UsersController, ItemsController],
    providers: [UsersService],
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AnothermiddlewareMiddleware).forRoutes(UsersController)
            .apply(UsersMiddleware)
            .forRoutes({
                path: 'users',
                method: RequestMethod.GET
            })
    }
}

