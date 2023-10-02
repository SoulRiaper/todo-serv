import { Repository } from "typeorm";
import { User } from "./userModel";
import { UserDTO } from "../projDTO/UserDTO";
import { InvalidInputError } from "../projErrors";


export class UserService{

      repo: Repository<User>

      constructor(userRepository: Repository<User>){
            this.repo = userRepository
      }
      
      public createUser = async ( userDTO : UserDTO ): Promise<User> => {
            if (this.isDtoValid(userDTO)){
                  const newUser = new User()
                  newUser.username = userDTO.username
                  newUser.password = userDTO.password
                  newUser.createdAt = new Date(Date.now())
                  await this.repo.save(newUser)
                  return newUser
            } else {
                  throw new InvalidInputError()
            }
      }

      public getUserInfoById = async ( id : number ): Promise<User | null> => {
            return await this.repo.findOne({
                  where: {
                        id: id
                  },
                  relations: {
                        todos: true,
                        folders: true
                  }
            })
      }

      public addUserToDo = async ( userId: number,  toDoDto: ToDoDto) => {
            
      }
      

      public isDtoValid = (userDTO:UserDTO): boolean => {
            return userDTO.username !== undefined 
      }
}