import Image from "next/image";
import ManWithPC from "@/assets/manWithPC.svg";

const AboutService = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-10 py-12 bg-[#1A1A1A] text-white">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:px-20">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={ManWithPC}
            alt="man"
            width={592}
            height={353}
            className="w-full max-w-[592px] h-auto max-h-[353px] object-cover"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
            О сервисе{" "}
            <span className="font-[family-name:var(--font-orbitron)]">
              Ingame
            </span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
            Мы занимаемся компьютерами более 13 лет и уже наизусть выучили их
            устройства. Наши специалисты с многолетним опытом проведут
            комплексную диагностику вашего ПК на высшем уровне: почистят,
            исправят неполадки в работе комплектующих и программ, устранят
            вирусы и ненужные файлы, проведут специальные тесты и предоставят
            вам лист отчета по окончании обслуживания.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-center">
            <div>
              <div className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white">
                2324
              </div>
              <div className="text-sm text-gray-400">проведенных ТО</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white">
                1 год
              </div>
              <div className="text-sm text-gray-400">гарантия на работы</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white">
                23
              </div>
              <div className="text-sm text-gray-400">специалистов</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
