const amqp = require("amqplib");
const rabbitmqConnect = require("./rabbitmqConnect");

const queueName = "email";

const onConsumeData = async () => {
  const connection = await rabbitmqConnect();
  const channel = await connection.createChannel();
  await channel.assertQueue(queueName);
  console.log("Waiting for messages in %s", queueName);
  channel.consume(queueName, (data) => {
    console.log(JSON.parse(data.content.toString()));
    channel.ack(data);
  });
};

onConsumeData();
