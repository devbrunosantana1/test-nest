import { Injectable } from '@nestjs/common';
import { Message } from './Message';

@Injectable()
export class MessagesService {
    
    private messages: Message[] = [
        {
            id:1,
            text:"Primeira mensagem"
        },
        {
            id:2,
            text:"Segunda mensagem"
        }
    ]

    findAll() {
        return this.messages;
    }

    findById(id: number) {
        return this.messages.find((messages) => messages.id === id);
    }

    create(message: Message) {
        this.messages.push(message);
    }

    update(id: number, message: Message) {
        const index = this.messages.findIndex((message) => message.id === id);
        this.messages[index] = message;
        /* throw new Error('Method not implemented.'); */
    }

    delete(id: number) {
        const index = this.messages.findIndex((message) => message.id === id);
        delete this.messages[index];
        /* throw new Error('Method not implemented.'); */
    }
}
