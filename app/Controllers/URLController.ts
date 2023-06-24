import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext"
import ShortnerService from "@ioc:Bitlink/URLShortnerService"
import Url from '../Models/Url'

export default class URL {
    public async shortenURL({request}:HttpContextContract){
        const url:string = request.body().url
        const urlEntry = await Url.findBy('original_url',url)
        if(urlEntry){
            return {status:"ok",short_url:`http://localhost:3333/${urlEntry?.code}`}
        }
        const shortenedCode = ShortnerService.shortenURL(url)
        await Url.create({
            original_url:url,
            code:shortenedCode
        })
        return {status:"ok",short_url:`http://localhost:3333/${shortenedCode}`}
    }

    public async redirectUrl({request,response}:HttpContextContract){
        const code : number = request.param('short_code')
        const url = await Url.findBy('code',code)
        console.log(url)
        response.redirect(url?.original_url || '/')
    }
}