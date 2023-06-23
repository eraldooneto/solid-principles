import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        const id = request.headers;

        try {
            this.listAllUsersUseCase.execute(id);
            return response.status(200).send();
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { ListAllUsersController };
