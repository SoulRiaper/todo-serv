import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../userModule/userModel"
import { ToDo } from "./toDoModel"




@Entity()
export class Folder {   

      @PrimaryGeneratedColumn({
            name: "folder_id"
      })    
      id: number

      @Column({
            nullable: false
      })
      name: string

      @Column({
            nullable: true
      })
      description?: string

      @Column({
            nullable: false
      })
      createdAt: Date

      @Column()
      updatedAt?: Date

      @OneToMany(() => ToDo, (todo) => todo.folder)
      todos: ToDo[]

      @ManyToOne(() => User, (user) =>user.folders)
      user: User
      
}