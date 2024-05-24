const amqp = require("amqplib");

const rabbitmqConnect = async () => {
  const connection = await amqp.connect({
    username: "guest",
    password: "guest",
  });
  return connection;
};

module.exports = rabbitmqConnect;
