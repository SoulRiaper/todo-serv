import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../userModule/userModel"
import { Folder } from "./folderModel"


@Entity()
export class ToDo {   

      @PrimaryGeneratedColumn({
            name: "todo_id"
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
            nullable: false,
            name: 'is_done'
      })
      isDone?: string

      @Column({
            nullable: true,
      })
      notification?: Date

      @Column({
            nullable: false
      })
      createdAt: Date

      @Column()
      updatedAt?: Date

      @ManyToOne(() => User, (user) => user.todos)
      user: User

      @ManyToOne(() => Folder, (folder) =>folder.todos)
      folder: Folder

}