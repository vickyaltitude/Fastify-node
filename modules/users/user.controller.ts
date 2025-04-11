import { FastifyReply, FastifyRequest } from "fastify";

export async function userInsertHandler(
  req: FastifyRequest,
  rep: FastifyReply
) {
  return { msg: "ok" };
}
