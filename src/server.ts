import Fastify from "fastify";
import userRoute from "../modules/users/user.route";

const server = Fastify();

server.get("/healthcheck", async function (req, res) {
  return { status: 200 };
});

async function main() {
  server.register(userRoute, { prefix: "api/user" });
  try {
    server.listen(3000);
    console.log("Server is ready at PORT 3000");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

main();
