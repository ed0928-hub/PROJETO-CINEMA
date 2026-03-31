import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Star, 
  ChevronRight, 
  ShoppingBag, 
  Film, 
  Zap, 
  Heart, 
  Package, 
  Truck, 
  CheckCircle2,
  Instagram,
  Twitter,
  Facebook,
  Plus,
  Minus,
  X,
  Menu
} from 'lucide-react';

// --- Types ---
interface Product {
  id: number;
  name: string;
  genre: string;
  description: string;
  price: string;
  image: string;
  color: string;
}

// --- Data ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "NOIR VELVET",
    genre: "Suspense / Mistério",
    description: "Um blend profundo de frutas negras com um toque defumado. Enigmático e sofisticado.",
    price: "R$ 89,90",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
    color: "from-purple-900 to-black"
  },
  {
    id: 2,
    name: "NEON RUSH",
    genre: "Sci-Fi / Ação",
    description: "Cítrico elétrico com notas de gengibre e brilho comestível. Uma explosão de energia futurista.",
    price: "R$ 74,90",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600",
    color: "from-cyan-600 to-blue-900"
  },
  {
    id: 3,
    name: "GOLDEN ERA",
    genre: "Clássico / Romance",
    description: "Notas de mel, baunilha e especiarias douradas. Elegância atemporal em cada gole.",
    price: "R$ 98,00",
    image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600",
    color: "from-yellow-600 to-orange-900"
  }
];

const TESTIMONIALS = [
  { name: "Lucas M.", text: "Parece que estou bebendo uma cena do Tarantino. Sensacional!", stars: 5 },
  { name: "Ana Clara", text: "O Neon Rush é a bebida mais linda que já vi. Perfeita pro Insta!", stars: 5 },
  { name: "Ricardo G.", text: "Experiência completa. A embalagem é um pôster de filme!", stars: 4 }
];

const FAQ_ITEMS = [
  { q: "As bebidas contêm álcool?", a: "Temos opções com e sem álcool. Verifique a descrição de cada 'filme' em nosso catálogo." },
  { q: "Qual o prazo de entrega?", a: "Enviamos para todo o Brasil. O prazo médio é de 3 a 7 dias úteis, dependendo da sua região." },
  { q: "Como é a embalagem?", a: "Nossas embalagens são colecionáveis, inspiradas em latas de rolo de filme e pôsteres clássicos." },
  { q: "Posso montar um kit personalizado?", a: "Sim! Temos a opção 'Diretor's Cut' onde você escolhe suas 3 bebidas favoritas." }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cinema-black/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-cinema-red flex items-center justify-center rounded-sm rotate-3">
            <Film className="text-white w-6 h-6 -rotate-3" />
          </div>
          <span className="font-display text-2xl tracking-tighter">DR CINEMA</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-heading text-sm uppercase tracking-widest font-medium">
          <a href="#experiencia" className="hover:text-cinema-red transition-colors">Experiência</a>
          <a href="#produtos" className="hover:text-cinema-red transition-colors">Catálogo</a>
          <a href="#sobre" className="hover:text-cinema-red transition-colors">Sobre</a>
          <button className="bg-cinema-red px-6 py-2 rounded-full hover:bg-white hover:text-cinema-red transition-all duration-300 transform hover:scale-105">
            Comprar Agora
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-cinema-black z-[60] flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-6 right-6" onClick={() => setMobileMenuOpen(false)}>
              <X className="w-10 h-10" />
            </button>
            <a href="#experiencia" onClick={() => setMobileMenuOpen(false)} className="font-display text-4xl">Experiência</a>
            <a href="#produtos" onClick={() => setMobileMenuOpen(false)} className="font-display text-4xl">Catálogo</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="font-display text-4xl">Sobre</a>
            <button className="bg-cinema-red px-10 py-4 rounded-full font-display text-2xl mt-4">
              Comprar Agora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-black/60 via-cinema-black/40 to-cinema-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover scale-110"
          alt="Cinematic Background"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-cinema-red/20 text-cinema-red border border-cinema-red/30 px-4 py-1 rounded-full text-xs font-heading tracking-[0.3em] uppercase mb-6 backdrop-blur-sm">
            A Estreia do Ano
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter mb-6 glitch-text">
            TRANSFORME CADA GOLE EM UMA <span className="text-cinema-red">CENA</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Unimos o universo do cinema com experiências sensoriais através de bebidas exclusivas. Sinta a emoção do grande ecrã em seu paladar.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-cinema-red text-white font-heading font-bold px-10 py-5 rounded-sm flex items-center justify-center gap-2 hover:bg-white hover:text-cinema-red transition-all duration-300 group">
              EXPERIMENTAR AGORA
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white font-heading font-bold px-10 py-5 rounded-sm flex items-center justify-center gap-2 transition-all duration-300">
              <Play className="w-5 h-5 fill-current" />
              VER TRAILER
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-20 bg-cinema-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          <div>
            <h3 className="font-display text-4xl md:text-5xl text-cinema-red">+10K</h3>
            <p className="text-white/50 text-xs uppercase tracking-widest mt-2">Espectadores Satisfeitos</p>
          </div>
          <div>
            <h3 className="font-display text-4xl md:text-5xl text-cinema-red">4.9/5</h3>
            <p className="text-white/50 text-xs uppercase tracking-widest mt-2">Crítica Especializada</p>
          </div>
          <div>
            <h3 className="font-display text-4xl md:text-5xl text-cinema-red">100%</h3>
            <p className="text-white/50 text-xs uppercase tracking-widest mt-2">Imersão Sensorial</p>
          </div>
          <div>
            <h3 className="font-display text-4xl md:text-5xl text-cinema-red">24H</h3>
            <p className="text-white/50 text-xs uppercase tracking-widest mt-2">Suporte ao Diretor</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-cinema-red/50 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className={`w-4 h-4 ${idx < t.stars ? 'text-cinema-gold fill-cinema-gold' : 'text-white/20'}`} />
                ))}
              </div>
              <p className="italic text-white/80 mb-6">"{t.text}"</p>
              <p className="font-heading font-bold text-cinema-red uppercase tracking-tighter">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white/5 rounded-sm overflow-hidden border border-white/10"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-40 mix-blend-multiply`} />
        <div className="absolute top-4 left-4">
          <span className="bg-cinema-black/80 backdrop-blur-md text-[10px] font-heading font-bold tracking-widest px-3 py-1 rounded-full border border-white/10">
            {product.genre}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-3xl mb-2 tracking-tight">{product.name}</h3>
        <p className="text-white/60 text-sm mb-6 line-clamp-2 font-light">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-cinema-red">{product.price}</span>
          <button className="bg-white text-cinema-black p-3 rounded-full hover:bg-cinema-red hover:text-white transition-all duration-300">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-24 bg-cinema-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cinema-red/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-cinema-red font-heading font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Nosso Elenco</span>
            <h2 className="font-display text-5xl md:text-7xl leading-none">ESCOLHA SEU <span className="text-cinema-red italic">GÊNERO</span></h2>
          </div>
          <button className="text-white/60 hover:text-white flex items-center gap-2 font-heading uppercase tracking-widest text-xs transition-colors">
            Ver catálogo completo <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* Best Seller Highlight */}
        <div className="mt-24 bg-gradient-to-r from-cinema-red/20 to-transparent p-1 rounded-sm border border-cinema-red/30">
          <div className="bg-cinema-black p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 aspect-video rounded-sm overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800" 
                alt="Best Seller" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-cinema-black/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-cinema-gold fill-cinema-gold" />
                <span className="text-cinema-gold font-heading font-bold text-xs tracking-widest uppercase">O Favorito da Academia</span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl mb-4">DIRETOR'S CUT: KIT EXCLUSIVO</h3>
              <p className="text-white/70 mb-8 font-light leading-relaxed">
                A experiência definitiva. Um kit com as 3 bebidas principais, um copo de cristal personalizado e acesso a uma playlist exclusiva sincronizada com cada sabor.
              </p>
              <div className="flex items-center gap-6">
                <span className="font-heading text-3xl font-bold">R$ 249,00</span>
                <button className="bg-cinema-red px-8 py-4 rounded-sm font-heading font-bold hover:bg-white hover:text-cinema-red transition-all">
                  GARANTIR MEU KIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-24 bg-white text-cinema-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-8">UMA JORNADA <span className="text-cinema-red">SENSORIAL</span></h2>
            <p className="text-lg mb-10 font-light leading-relaxed text-black/70">
              Não é apenas uma bebida. É o roteiro de uma noite inesquecível. Cada ingrediente foi selecionado para evocar as mesmas emoções de uma cena clássica.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-cinema-red/10 flex items-center justify-center rounded-full shrink-0">
                  <Zap className="text-cinema-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-2">Impacto Imediato</h4>
                  <p className="text-sm text-black/60">Sabores que explodem como um clímax de ação, despertando todos os seus sentidos.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-cinema-red/10 flex items-center justify-center rounded-full shrink-0">
                  <Heart className="text-cinema-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-2">Conexão Emocional</h4>
                  <p className="text-sm text-black/60">Notas aromáticas que trazem nostalgia e conforto, como aquele drama que toca o coração.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-cinema-red/10 flex items-center justify-center rounded-full shrink-0">
                  <Film className="text-cinema-red w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-2">Visual de Oscar</h4>
                  <p className="text-sm text-black/60">Cores vibrantes e texturas únicas que tornam cada drink uma obra de arte instagramável.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-cinema-black rounded-sm overflow-hidden rotate-3 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" 
                alt="Sensory Experience" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-cinema-red p-6 -rotate-6 shadow-xl hidden md:block">
              <p className="font-display text-white text-2xl leading-tight">"O CINEMA NUNCA TEVE UM SABOR TÃO BOM."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-24 bg-cinema-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-5xl md:text-6xl mb-16">COMO VIVER ESSA <span className="text-cinema-red">CENA</span></h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-3xl font-display text-cinema-red">01</div>
            <h4 className="font-heading font-bold text-xl mb-4">ESCOLHA SEU FILME</h4>
            <p className="text-white/50 text-sm font-light">Navegue por nosso catálogo e escolha o gênero que mais combina com seu mood hoje.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-3xl font-display text-cinema-red">02</div>
            <h4 className="font-heading font-bold text-xl mb-4">RECEBA O ROTEIRO</h4>
            <p className="text-white/50 text-sm font-light">Entregamos em sua casa com embalagem temática e um QR Code para a trilha sonora perfeita.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-3xl font-display text-cinema-red">03</div>
            <h4 className="font-heading font-bold text-xl mb-4">VIVA A EXPERIÊNCIA</h4>
            <p className="text-white/50 text-sm font-light">Prepare seu drink, dê o play e deixe-se levar por uma imersão cinematográfica completa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-cinema-black">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-5xl text-center mb-16 underline decoration-cinema-red decoration-4 underline-offset-8">FAQ</h2>
        
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border border-white/10 rounded-sm overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="font-heading font-bold uppercase tracking-tight">{item.q}</span>
                {openIndex === i ? <Minus className="w-5 h-5 text-cinema-red" /> : <Plus className="w-5 h-5" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-white/60 font-light border-t border-white/5">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-cinema-black pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Film className="text-cinema-red w-8 h-8" />
              <span className="font-display text-3xl tracking-tighter">DR CINEMA</span>
            </div>
            <p className="text-white/50 max-w-sm mb-8 font-light">
              Redefinindo a forma como você consome entretenimento. Bebidas que contam histórias, sabores que criam memórias.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-cinema-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-cinema-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-cinema-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-heading font-bold uppercase tracking-widest text-xs mb-6 text-cinema-red">Navegação</h5>
            <ul className="space-y-4 text-white/60 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#produtos" className="hover:text-white transition-colors">Catálogo</a></li>
              <li><a href="#experiencia" className="hover:text-white transition-colors">Experiência</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Minha Conta</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-heading font-bold uppercase tracking-widest text-xs mb-6 text-cinema-red">Suporte</h5>
            <ul className="space-y-4 text-white/60 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Envio e Prazos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[10px] uppercase tracking-[0.2em]">
          <p>© 2026 DR CINEMA. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-cinema-red relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-6xl md:text-8xl mb-8 leading-none italic">O PRÓXIMO CAPÍTULO É SEU.</h2>
        <p className="text-xl md:text-2xl mb-12 font-heading font-medium tracking-tight">
          Não assista apenas. Sinta. Saboreie. Viva.
        </p>
        <button className="bg-cinema-black text-white font-display text-3xl px-12 py-6 rounded-sm hover:scale-105 transition-transform shadow-2xl">
          GARANTIR MINHA EXPERIÊNCIA
        </button>
        <p className="mt-8 text-sm opacity-70 font-heading uppercase tracking-widest">
          Estoque limitado para a primeira temporada.
        </p>
      </div>
    </section>
  );
};

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
      <button className="w-full bg-cinema-red text-white font-heading font-bold py-4 rounded-full shadow-2xl flex items-center justify-center gap-2">
        <ShoppingBag className="w-5 h-5" />
        COMPRAR AGORA
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="relative">
      <div className="vhs-grain fixed inset-0 z-[100] pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ExperienceSection />
        <ProductsSection />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
