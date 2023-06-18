import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { IocContract } from '@adonisjs/fold'
import URLshortnerService from 'App/Services/URLshortnerService'

export default class AppProvider {
  constructor(protected $container: IocContract) {}

  public register() {
    // Register your own bindings
    this.$container.singleton('Bitlink/URLShortnerService',()=>{
      return new URLshortnerService()
    })
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
