const PaymentAndDelivery = () => {
  return (
    <div id="delivery" className="w-full max-w-1600 lg:px-40 mx-auto py-10 px-5 bg-[#1A1A1A] text-white">
      <h1 className="text-white font-semibold text-[40px] sm:text-4xl text-center mb-4">
        Оплата и Доставка
      </h1>
      <div className="w-[120px] h-[2px] bg-pink-600 mx-auto mt-2 mb-10"></div>
      <p className="mb-4 text-[#B2B2B2]">
        Мы предлагаем различные способы оплаты: наличные, банковские карты и
        электронные кошельки. Наша цель — сделать процесс покупки максимально
        удобным для вас. <br />
        Доставка осуществляется по всей Узбекистану с помощью надежных
        курьерских служб. Мы гарантируем быструю и безопасную доставку вашего
        заказа.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
        <div className="p-5 bg-[#0F0F0F]">
          <h2 className="text-white text-xl mb-2">Способы оплаты</h2>
          <p className="text-[#B2B2B2]">
            Мы принимаем наличные, банковские карты и электронные платежи, чтобы
            обеспечить вам максимальное удобство.
          </p>
        </div>
        <div className="p-5 bg-[#0F0F0F]">
          <h2 className="text-white text-xl mb-2">
            Доставка по всему Узбекистану
          </h2>
          <p className="text-[#B2B2B2]">
            Мы работаем с надежными курьерскими службами для быстрой доставки
            ваших заказов.
          </p>
        </div>
        <div className="p-5 bg-[#0F0F0F]">
          <h2 className="text-white text-xl mb-2">Поддержка клиентов</h2>
          <p className="text-[#B2B2B2]">
            Наша команда поддержки всегда готова ответить на ваши вопросы и
            помочь с оформлением заказа.
          </p>
        </div>
      </div>
      <p className="text-[#B2B2B2]">
        Мы стремимся обеспечить высокий уровень сервиса и удовлетворенность
        наших клиентов. Если у вас есть вопросы о процессе оплаты или доставки,
        не стесняйтесь обращаться к нам за помощью.
      </p>
    </div>
  );
};

export default PaymentAndDelivery;
