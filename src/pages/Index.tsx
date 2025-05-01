
import { useCallback } from "react";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import FeatureItem from "@/components/FeatureItem";
import GoogleMap from "@/components/GoogleMap";

const services = [
  {
    id: 1,
    title: "Замена катализатора",
    description: "Замена неисправного катализатора на новый или установка пламегасителя.",
    price: "от 5000 ₽",
    image: "https://cdn.poehali.dev/files/9e173c43-f350-485c-ba3b-78f392f3356c.png"
  },
  {
    id: 2,
    title: "Ремонт глушителя",
    description: "Восстановление или замена поврежденных глушителей для восстановления оптимальной работы.",
    price: "от 1000 ₽",
    image: "https://cdn.poehali.dev/files/8e7a42b2-8ee3-4446-9724-ec67ca4d06c9.jpg"
  },
  {
    id: 3,
    title: "Устранение прорывов выхлопных газов (течей)",
    description: "Диагностика и устранение утечек в выхлопной системе для предотвращения попадания выхлопных газов в салон.",
    price: "от 1500 ₽",
    image: "https://cdn.poehali.dev/files/0881b669-9bcd-4449-b690-4392258236d3.jpg"
  },
  {
    id: 4,
    title: "Тюнинг выхлопной системы",
    description: "Установка спортивных глушителей и модификация системы для улучшения звука и производительности.",
    price: "от 7000 ₽",
    image: "https://cdn.poehali.dev/files/cd34a4f0-81b7-4b0e-9943-0641b431c122.jpg"
  },
  {
    id: 5,
    title: "Диагностика",
    description: "Профессиональная диагностика выхлопной системы для выявления проблем и оценки стоимости ремонта.",
    price: "от 500 ₽",
    image: "https://cdn.poehali.dev/files/c7f90cb8-9a02-4303-af3a-55c46627c073.jpg"
  }
];

const features = [
  { id: 1, title: "Опыт работы более 7 лет", icon: "Clock" },
  { id: 2, title: "Качество материалов и работ", icon: "CheckCircle" },
  { id: 3, title: "Индивидуальный подход к каждому клиенту", icon: "User" },
  { id: 4, title: "Гарантия на выполненные работы", icon: "Shield" },
  { id: 5, title: "Быстрое выполнение", icon: "Zap" },
  { id: 6, title: "Постоянные клиенты и положительные отзывы", icon: "Star" }
];

const Index = () => {
  const handleCall = useCallback(() => {
    window.location.href = "tel:+79966215396";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Герой секция с затемненным фоном */}
      <header className="relative flex flex-col items-center justify-center py-10 min-h-[70vh] text-center px-4">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img 
            src="https://cdn.poehali.dev/files/e2cc3333-027a-486f-b100-d9a5790c1ad2.jpeg" 
            alt="Фон ремонт выхлопных систем" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-primary text-7xl sm:text-8xl font-bold mb-6">ДРАЙВ</h1>
          <p className="text-white text-xl sm:text-2xl mb-8">Ремонт выхлопных систем в Тольятти с 7-летним опытом</p>
          <Button 
            onClick={handleCall} 
            className="text-lg px-8 py-6 bg-primary text-white hover:bg-primary/90 rounded-md"
          >
            <Icon name="Phone" size={24} />
            Позвонить
          </Button>
        </div>
      </header>

      {/* Секция услуг */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                title={service.title}
                description={service.description}
                price={service.price}
                image={service.image}
                onCallClick={handleCall}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Почему выбирают нас?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureItem 
                key={feature.id}
                title={feature.title}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Секция контактов */}
      <section className="py-16 px-4 bg-white" id="contacts">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Адрес</h3>
                <p className="text-foreground">г. Тольятти, ул. Офицерская, 26</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Телефоны</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="tel:+79966215396" className="text-foreground hover:text-primary transition-colors">
                      +7 996 621 53 96
                    </a>
                  </li>
                  <li>
                    <a href="tel:740877" className="text-foreground hover:text-primary transition-colors">
                      740877
                    </a>
                  </li>
                  <li>
                    <a href="tel:+79277703126" className="text-foreground hover:text-primary transition-colors">
                      +7 927 770 31 26
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Электронная почта</h3>
                <a href="mailto:alexpro63@mail.ru" className="text-foreground hover:text-primary transition-colors">
                  alexpro63@mail.ru
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Telegram</h3>
                <a 
                  href="https://t.me/alexander_prodrive" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center text-foreground hover:text-primary transition-colors"
                >
                  <Icon name="Send" className="mr-2" />
                  @alexander_prodrive
                </a>
              </div>
            </div>
            
            <div className="h-[400px] border border-gray-200 rounded-lg overflow-hidden">
              <GoogleMap address="г. Тольятти, ул. Офицерская, 26" />
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Драйв — ремонт выхлопных систем в Тольятти</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
