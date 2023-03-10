import { Controller, Get, Param, Post, Body, Put, Delete, NotFoundException} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './Message';


@Controller('messages')
export class MessagesController {

    constructor(private messagesService: MessagesService) {}

    @Get()
    findAll() {
        return this.messagesService.findAll()
    }

    @Get(':id')
    findById(@Param() params) {
        return this.messagesService.findById(+params.id).catch((e) => {
            throw new NotFoundException(e.message);
            
        });
    }

    @Post()
    create(@Body() message: Message) {
        return this.messagesService.create(message)
    }

    @Put(':id')
    update(@Param() params, @Body() message: Message) {
        return this.messagesService.update(+params.id, message).catch((e) => {
            throw new NotFoundException(e.message);
        });
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.messagesService.delete(+params.id)
    }
}
