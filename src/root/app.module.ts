import { Module } from '@nestjs/common';
import { AuthModule } from "../auth/auth.module";
import { SignUpModule } from "../signup/signup.module";
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { RouterModule } from '@nestjs/core';
import { TodoModule } from 'src/todo/todo.module';

@Module({
  imports: [AuthModule, SignUpModule, TodoModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'gosha',
    password: 'MyPasswd',
    database: 'todo_react_nest',
    entities: [],
    synchronize: true,
    autoLoadEntities: true
    }),

    RouterModule.register([
      {
        path: "/api/signup",
        module: SignUpModule
      },
      {
        path: "/api/auth",
        module: AuthModule
      },
      {
        path: "/api/todo",
        module: TodoModule
      }
    ])
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
