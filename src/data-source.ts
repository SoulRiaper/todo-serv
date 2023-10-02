import { DataSource } from "typeorm"
import { User } from "./userModule/userModel"
import { Folder } from "./toDoModule/folderModel"
import { ToDo } from "./toDoModule/toDoModel"


export const AppDataSource = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "1001",
      database: "postgres",
      synchronize: true,
      logging: false,
      entities: [User, Folder, ToDo],
      subscribers: [],
      migrations: [],
  })