const amqp = require("amqplib");
const rabbitmqConnect = require("./rabbitmqConnect");

const queueName = "email";

const publisher = async (data) => {
  try {
    const connection = await rabbitmqConnect();
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName);
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
    console.log("Email sent");
  } catch (error) {
    console.log("Error:", error);
  }
};

module.exports = publisher;