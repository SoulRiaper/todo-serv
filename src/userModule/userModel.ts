import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ToDo } from "../toDoModule/toDoModel";
import { Folder } from "../toDoModule/folderModel";


@Entity()
export class User {   

      @PrimaryGeneratedColumn({
            name: "user_id"
      })    
      id: number

      @Column({
            nullable: false,
            unique: true
      })
      username: string

      @Column({
            nullable: false
      })
      password: string

      @Column({
            nullable: false
      })
      createdAt: Date

      @Column()
      updatedAt?: Date
      
      @OneToMany(() => Folder, (folder)=> folder.user)
      folders: Folder[]

      @OneToMany(() => ToDo, (todo)=> todo.user)
      todos: ToDo[]
}