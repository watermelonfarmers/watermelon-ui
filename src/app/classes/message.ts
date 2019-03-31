import { User } from './user';

export interface Message {
    messageId: number;
    channelId: number;
    created: string;
    message: string;
    user: User;
}