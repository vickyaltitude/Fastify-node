import { FastifyInstance } from "fastify";
import { userInsertHandler } from "./user.controller";

async function userRoute(server: FastifyInstance) {
  server.get("/", userInsertHandler);
}

export default userRoute;
