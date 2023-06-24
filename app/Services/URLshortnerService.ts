import hash from "hash-it";
export default class URLshortnerService{
    public shortenURL(url:String):number{
        const code = hash(url)
        return code
    }
}