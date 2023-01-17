import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
    
    private messages = [
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

    create(message: {id: number, text: string}) {
        this.messages.push(message);
    }
}
