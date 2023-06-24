import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Url extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public original_url: string

    @column()
    public code: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime
  
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}