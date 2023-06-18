import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext"

export default class Home {
    public async handle(ctx:HttpContextContract){
        return {msg:"we are logically blessed"}
    }
}