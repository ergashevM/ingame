const WhyChooseUs = () => {
  return (
    <div className="w-full max-w-1600 lg:px-40 mx-auto py-10 px-5 bg-[#0F0F0F] text-white">
      <h1 className="text-white font-semibold text-[40px] sm:text-4xl text-center mb-4">
        Почему стоит выбрать нас?
      </h1>
      <div className="w-[120px] h-[2px] bg-pink-600 mx-auto mt-2 mb-10"></div>
      <p className="mb-4 text-[#B2B2B2]">
        Компания была основана в 2009 году. Мы — официальный партнер таких
        известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам
        также удалось реализовать несколько успешных совместных проектов с
        такими известными игровыми компаниями как Wargaming, UbiSoft, Electronic
        Arts, Bethesda и Mail.Games. <br /> Главный офис и производственный
        центр расположены в Москве. Шоурум с компьютерами и периферией находятся
        в Москве. Мы осуществляем доставку компьютеров по всей России и миру.
        Наша компания работает как с частными, так и с юридическими лицами.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-5 bg-[#1A1A1A]">
          <h2 className="text-white text-xl mb-2">Первый пункт</h2>
          <p className="text-[#B2B2B2]">
            Описание первого пункта. Здесь вы можете добавить информацию о
            преимуществах.
          </p>
        </div>
        <div className="p-5 bg-[#1A1A1A]">
          <h2 className="text-white text-xl mb-2">Второй пункт</h2>
          <p className="text-[#B2B2B2]">
            Описание второго пункта. Здесь вы можете добавить информацию о
            преимуществах.
          </p>
        </div>
        <div className="p-5 bg-[#1A1A1A]">
          <h2 className="text-white text-xl mb-2">Третий пункт</h2>
          <p className="text-[#B2B2B2]">
            Описание третьего пункта. Здесь вы можете добавить информацию о
            преимуществах.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
