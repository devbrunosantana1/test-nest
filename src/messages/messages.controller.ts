import { Controller, Get, Param, Post, Body} from '@nestjs/common';
import { MessagesService } from './messages.service';


@Controller('messages')
export class MessagesController {

    constructor(private messagesService: MessagesService) {}

    @Get()
    findAll() {
        return this.messagesService.findAll()
    }

    @Get(':id')
    findById(@Param() params) {
        return this.messagesService.findById(+params.id);
    }

    @Post()
    create(@Body() body:any) {
        return this.messagesService.create(body)
    }
}
