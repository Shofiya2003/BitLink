import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import URLshortnerService from 'App/Services/URLshortnerService'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
    this.app.container.singleton('Bitlink/URLShortnerService',()=>{
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
