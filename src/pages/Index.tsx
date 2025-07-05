import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const newProducts = [
    {
      id: 1,
      name: "Коралловый кардиган",
      price: "4 599 ₽",
      image:
        "https://v3.fal.media/files/zebra/QAmLlkWC1qMeCgKzxhBud_output.png",
      colors: ["coral", "mint", "lavender"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Мятная рубашка",
      price: "3 299 ₽",
      image:
        "https://v3.fal.media/files/zebra/QAmLlkWC1qMeCgKzxhBud_output.png",
      colors: ["mint", "sunny", "coral"],
      sizes: ["XS", "S", "M", "L"],
    },
    {
      id: 3,
      name: "Солнечное платье",
      price: "5 999 ₽",
      image:
        "https://v3.fal.media/files/zebra/QAmLlkWC1qMeCgKzxhBud_output.png",
      colors: ["sunny", "lavender", "mint"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
  ];

  const brands = [
    {
      name: "MODERN STYLE",
      description: "Современные решения",
      icon: "Sparkles",
    },
    { name: "URBAN CHIC", description: "Городской стиль", icon: "Building" },
    { name: "NATURE WEAR", description: "Природная красота", icon: "Leaf" },
    {
      name: "CREATIVE STUDIO",
      description: "Творческий подход",
      icon: "Palette",
    },
  ];

  const blogPosts = [
    {
      title: "Тренды весны 2024",
      description: "Какие цвета и стили будут актуальны в новом сезоне",
      date: "15 марта 2024",
      category: "Тренды",
    },
    {
      title: "Как выбрать идеальный размер",
      description: "Подробное руководство по размерным сеткам",
      date: "10 марта 2024",
      category: "Гайд",
    },
    {
      title: "Экологичная мода",
      description: "Sustainable fashion в современном мире",
      date: "5 марта 2024",
      category: "Экология",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-coral to-mint rounded-full flex items-center justify-center">
                <Icon name="Shirt" className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-coral to-mint bg-clip-text text-transparent">
                51 SHOP
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                Главная
              </a>
              <a
                href="#new"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                Новинки
              </a>
              <a
                href="#brands"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                Бренды
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                Блог
              </a>
              <a
                href="#support"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                Поддержка
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Search" className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Heart" className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingBag" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-coral via-mint to-lavender bg-clip-text text-transparent">
            ТВОРЧЕСКАЯ
            <br />
            МОДА
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Выражайте свою индивидуальность через одежду. Каждая вещь — это
            история, каждый образ — это искусство.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-coral hover:bg-coral/90 text-white px-8 py-3 rounded-full"
            >
              Смотреть коллекцию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-mint text-mint hover:bg-mint/10 px-8 py-3 rounded-full"
            >
              О нас
            </Button>
          </div>
        </div>
      </section>

      {/* New Products Section */}
      <section id="new" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-800">Новинки</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Свежие поступления от лучших дизайнеров. Будьте первыми, кто
              оценит новые творения.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Button
                    size="sm"
                    className="absolute top-4 right-4 bg-white/80 text-gray-800 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Icon name="Heart" className="w-4 h-4" />
                  </Button>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-coral/10 text-coral"
                    >
                      {product.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {product.colors.map((color) => (
                        <div
                          key={color}
                          className={`w-4 h-4 rounded-full border-2 border-white shadow-sm`}
                          style={{
                            backgroundColor:
                              color === "coral"
                                ? "#FF6B6B"
                                : color === "mint"
                                  ? "#45B7D1"
                                  : color === "lavender"
                                    ? "#96CEB4"
                                    : "#FFAA7A",
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Icon name="Ruler" className="w-4 h-4" />
                      <span>{product.sizes.join(", ")}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-mint hover:bg-mint/90 text-white">
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-800">
              Наши бренды
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Партнеры, которые разделяют нашу философию творчества и качества.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-lavender to-sunny rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={brand.icon} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-800">
                  {brand.name}
                </h4>
                <p className="text-gray-600 text-sm">{brand.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-800">Блог</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Читайте о последних тенденциях моды, советы по стилю и истории
              наших коллекций.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-coral via-mint to-lavender"></div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-sunny/10 text-sunny"
                    >
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="text-coral hover:text-coral/80"
                  >
                    Читать далее
                    <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-gray-800">Поддержка</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Чат поддержки</h4>
              <p className="text-gray-600 mb-4">Онлайн-консультации 24/7</p>
              <Button
                variant="outline"
                className="border-coral text-coral hover:bg-coral/10"
              >
                Начать чат
              </Button>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Горячая линия</h4>
              <p className="text-gray-600 mb-4">+7 (800) 555-51-51</p>
              <Button
                variant="outline"
                className="border-mint text-mint hover:bg-mint/10"
              >
                Позвонить
              </Button>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-gray-600 mb-4">support@51shop.ru</p>
              <Button
                variant="outline"
                className="border-lavender text-lavender hover:bg-lavender/10"
              >
                Написать
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-coral to-mint rounded-full flex items-center justify-center">
                  <Icon name="Shirt" className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">51 SHOP</span>
              </div>
              <p className="text-gray-400">
                Творческая мода для тех, кто не боится выделяться из толпы.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Новинки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Женская одежда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Мужская одежда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Аксессуары
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Помощь</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Размерная сетка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Instagram" className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Facebook" className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Twitter" className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 51 SHOP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
