import { Request, Response, Router, response } from 'express';
import MemberController from './controllers/MemberController';

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
    return response.json({
        message: "teste na raiz"
    })
})

routes.post("/members", MemberController.create)
routes.get("/members/:id", MemberController.findById)
routes.get("/members", MemberController.findAll)
routes.get("/members/name/:name", MemberController.findAllByName)
routes.delete("/members/:id", MemberController.deleteById)

export default routes;