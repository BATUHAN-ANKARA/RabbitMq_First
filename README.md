# Email Kuyruk Sistemi

Bu proje, Node.js, Express ve RabbitMQ kullanarak basit bir email kuyruk sistemi örneğini göstermektedir. API sunucusu, RabbitMQ kuyruğuna mesajlar yayınlayan ve kuyruktan mesajları işleyen bir tüketici içerir.

## Proje Yapısı

    ├── app.js
    ├── consumer.js
    ├── mq
    │ ├── publisher.js
    │ └── rabbitmqConnect.js
    └── package.json

### Önkoşullar

Projenin çalışması için aşağıdaki yazılımların yüklü olması gerekmektedir:

- Node.js (sürüm 12 veya üzeri)
- npm veya yarn
- RabbitMQ


### Kurulum

1. Bu projeyi yerel makinenize klonlayın:

    ```bash
    git clone https://github.com/BATUHAN-ANKARA/RabbitMq_First.git
    ```

2. Proje dizinine gidin:

    ```bash
    cd email-queue-system
    ```

3. Gerekli bağımlılıkları yükleyin:

    ```bash
    npm install
    ```

   veya

    ```bash
    yarn install
    ```
4. RabbitMQ'nun çalıştığından emin olun. Resmi RabbitMQ Docker görüntüsünü kullanabilirsiniz:

    ```bash
    docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management

    ```

5. Uygulamayı başlatın:

    ```bash
    npm start
    ```

   veya

    ```bash
    yarn start
    ```

6. Tarayıcınızda `http://localhost:3000` adresine gidin ve uygulamayı görüntüleyin. Postman ile isteklerinizi gönderin.


## Katkıda Bulunma

1. Fork yapın (https://github.com/BATUHAN-ANKARA/RabbitMq_First/fork)
2. Yeni bir dal oluşturun (`git checkout -b feature/xyz`)
3. Değişikliklerinizi yapın
4. Değişikliklerinizi kaydedin (`git commit -am 'Add some xyz'`)
5. Dalınıza itme yapın (`git push origin feature/xyz`)
6. Bir Pull Request açın
