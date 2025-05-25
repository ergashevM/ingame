import React from "react";

const ServiceSteps = () => {
  const steps = [
    {
      id: 1,
      text: "Отправьте заявку на сайте или обратитесь к нам. Мы всегда рады помочь!",
    },
    {
      id: 2,
      text: "Наш менеджер поможет вам оформить заказ и согласует с вами все детали",
    },
    {
      id: 3,
      text: "Привезите свой ПК лично или закажите отправку курьером",
    },
    {
      id: 4,
      text: "Специалисты нашего сервисного центра в течение 24 часов проведут техническое обслуживание",
    },
    {
      id: 5,
      text: "Наш логист свяжется с вами для уточнения удобных даты и времени доставки компьютера",
    },
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-23 py-12 bg-[#0F0F0F] text-white text-center">
      {/* Title */}
      <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
        Этапы оформления ТО
      </h2>

      {/* Underline */}
      <div className="w-[134px] h-[2px] bg-pink-600 mx-auto -mt-2 mb-10"></div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center px-2"
          >
            <div className="w-[68px] h-[68px] border-3 border-[#D3176D] flex items-center justify-center text-2xl font-bold text-[#D3176D] mb-4">
              {step.id}
            </div>
            <p className="text-base font-medium">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSteps;
