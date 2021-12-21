import { Server } from "./server";

export interface CustomResponse {
    timestamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    devMessage: string;
    data: {servers?: Server[], server?: Server}
}