

const Steps = () => {
  return (
    <section id="steps" className="py-10 font-montserrat max-w-[1200px] mx-auto">
        <div className="flex justify-center items-baseline gap-5 w-full">
                <p className="uppercase font-bold text-4xl leading-[1.22] text-red">
                    Этапы работы
                </p>
                <div className="border-b-2 border-red border-solid flex-1"></div>
            </div>
          <div className="flex justify-center items-start gap-[140px] mt-8">
 <div className="relative flex  gap-4 flex-col items-center text-center w-[196px]">


  <div className="flex items-center justify-center border-2 border-darktext rounded-full w-[120px] h-[120px]  bg-whitebcg z-10">
    <p className=" font-bold text-4xl text-darktext">
      1
    </p>
  </div>


  <span
    className="
      absolute
      top-[60px]
      left-[calc(100%+20px)]
      w-[100px]
      border-t-2 border-darktext
    "
  />


  <h3 className="font-bold text-lg text-darktext">
    Консультация
  </h3>
  <p className="font-normal text-base text-darktext">
    Подбираем лучшее решение Вашей проблемы
  </p>

</div>
<div className="relative flex  gap-4  flex-col items-center text-center w-[196px]">


  <div className="flex items-center justify-center border-2 border-darktext rounded-full w-[120px] h-[120px]  bg-whitebcg z-10">
    <p className="font-bold text-4xl text-darktext">
      2
    </p>
  </div>

  <span
    className="
      absolute
      top-[60px]
      left-[calc(100%+20px)]
      w-[100px]
      border-t-2 border-darktext
    "
  />


  <h3 className=" font-bold text-lg text-darktext">
    Диагностика
  </h3>
  <p className=" font-normal text-base text-darktext">
 Проводим осмотр 
и определяем точный объем и стоимость работ
  </p>

          </div>
          <div className="relative flex  gap-4  flex-col items-center text-center w-[196px]">


  <div className="flex items-center justify-center border-2 border-darktext rounded-full w-[120px] h-[120px]  bg-whitebcg z-10">
    <p className="font-bold text-4xl text-darktext">
      3
    </p>
  </div>

  
  <span
    className="
      absolute
      top-[60px]
      left-[calc(100%+20px)]
      w-[100px]
      border-t-2 border-darktext
    "
  />

  <h3 className="font-bold text-lg text-darktext">
    Ремонт
  </h3>
  <p className="font-normal text-base text-darktext">
    Выполняем работы согласно плану, соблюдая стандарты качества
  </p>

          </div>
          <div className="relative flex  gap-4  flex-col items-center text-center w-[196px]">

  <div className="flex items-center justify-center border-2 border-darktext rounded-full w-[120px] h-[120px]  bg-whitebcg z-10">
    <p className="font-bold text-4xl text-darktext">
      4
    </p>
  </div>

  
  <h3 className="font-bold text-lg text-darktext">
    Выдача авто
  </h3>
  <p className="font-normal text-base text-darktext">
    Передаем вам готовый результат и детальный отчет о выполненных работах
  </p>

</div></div>
         
    </section>
  );
};

export default Steps;