import { Folder } from "../toDoModule/folderModel"
import { ToDo } from "../toDoModule/toDoModel"
import { User } from "../userModule/userModel"


export class UserDTO{
      
      id: number

      username: string
      
      password: string


      createdAt: Date

      updatedAt?: Date
      
      folders: Folder[]

      todos: ToDo[]

      constructor(user: User){
            this.id = user.id
            this.username = user.username
            this.createdAt = user.createdAt
            this.updatedAt = user.updatedAt
            this.folders = user.folders
            this.todos = user.todos


      }
}