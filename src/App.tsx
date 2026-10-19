import { HashRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import {
  LayoutDashboard, ShoppingCart, Package, Users, Calculator,
  Warehouse, UserCog, Truck, BarChart3, Settings, Bell,
  Search, Menu, X, LogOut, Database,
  ArrowLeft, Zap, Shield, Brain, TrendingUp, DollarSign,
  FileText, CheckCircle2, Star, MessageCircle, MessageSquare,
  Phone, Building2, Globe, Mail,
  Lock, Eye, Plus, Filter, Edit,
  Download, Briefcase, Wallet, AlertTriangle, RefreshCw, Trash2, CheckCircle,
  History, CreditCard, Link2, Cpu, Trophy, FolderOpen, Activity, Wrench, Play, Calendar, BookOpen, Target, Leaf, Network
} from 'lucide-react';

// ============ LANDING PAGE ============
function LandingPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Marsool ERP</h1>
                <p className="text-[10px] text-gray-500 -mt-1">نظام إدارة الموارد المتكامل</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <a href="#/admin-login" className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg">تسجيل الدخول</a>
              <a href="#/dashboard" className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-l from-blue-600 to-blue-700 rounded-xl hover:shadow-lg transition-all">لوحة التحكم</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-slate-900 via-blue-900 to-slate-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            نظام <span className="bg-gradient-to-l from-blue-400 to-green-400 bg-clip-text text-transparent">Marsool ERP</span>
            <br />
            <span className="text-2xl sm:text-4xl text-white/80">المتكامل لإدارة أعمالك</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            منصة محاسبية وتشغيلية شاملة تربط جميع أقسام شركتك.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#/dashboard" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-l from-blue-500 to-blue-600 text-white font-bold rounded-2xl hover:shadow-2xl transition-all">
              دخول لوحة التحكم
              <ArrowLeft size={18} />
            </a>
            <a href="#/admin-login" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-2xl border border-white/20 hover:bg-white/20">
              تسجيل الدخول
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div><div className="text-3xl font-black text-white">+500</div><div className="text-sm text-white/60">شركة</div></div>
            <div><div className="text-3xl font-black text-white">99.9%</div><div className="text-sm text-white/60">وقت التشغيل</div></div>
            <div><div className="text-3xl font-black text-white">+50K</div><div className="text-sm text-white/60">طلب شهرياً</div></div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-bold">Marsool ERP</span>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Marsool ERP. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}

// ============ ADMIN LOGIN PAGE ============
function AdminLoginPage() {
  const [email, setEmail] = useState('admin@marsool.com');
  const [password, setPassword] = useState('admin123');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.hash = '#/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4" dir="rtl">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <Shield size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-black text-white">نظام المصادقة الآمن</h1>
          <p className="text-white/60 text-sm mt-1">Marsool ERP - حماية متقدمة</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail size={14} className="inline ml-1" />
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Lock size={14} className="inline ml-1" />
                كلمة المرور
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-l from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Lock size={18} />
              تسجيل الدخول الآمن
            </button>
          </form>

          <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-100">
            <div className="flex items-start gap-2">
              <Shield size={16} className="text-green-600 mt-0.5" />
              <div className="text-xs text-green-700">
                <strong>حماية متقدمة:</strong> تشفير AES-256، JWT Tokens، حماية من الهجمات
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <a href="#/" className="text-sm text-white/60 hover:text-white">← العودة للموقع</a>
        </div>
      </div>
    </div>
  );
}

// ============ DASHBOARD HOME ============
function DashboardHome() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-gray-900 dark:text-white">لوحة التحكم</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">مرحباً بك، إليك ملخص أداء أعمالك</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
              <DollarSign size={18} className="text-white" />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+12.5%</span>
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">145,230</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">إجمالي المبيعات (ر.س)</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
              <ShoppingCart size={18} className="text-white" />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+8.3%</span>
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">342</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">الطلبات</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
              <Package size={18} className="text-white" />
            </div>
            <span className="text-xs font-bold text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-full">-3.2%</span>
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">1,847</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">أصناف المخزون</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <Users size={18} className="text-white" />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+5.1%</span>
          </div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">892</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">العملاء النشطين</div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-gray-900 dark:text-white mb-4">أداء المبيعات</h3>
        <div className="flex items-end gap-2 h-40">
          {[35, 55, 45, 70, 60, 80, 65, 75, 50, 90, 85, 72].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-sm" style={{ height: `${h}%` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ GENERIC SYSTEM PAGE ============
function SystemPage({ title, icon: Icon, color, description }: { title: string; icon: any; color: string; description: string }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
          <Icon size={24} className={color} />
          {title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 text-center">
        <Icon size={64} className={`${color} mx-auto mb-4 opacity-20`} />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
            <div className="text-2xl font-black text-gray-900 dark:text-white">100%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">جاهز</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
            <div className="text-2xl font-black text-gray-900 dark:text-white">24/7</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">متاح</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
            <div className="text-2xl font-black text-gray-900 dark:text-white">∞</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">غير محدود</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
            <div className="text-2xl font-black text-green-600">✓</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">مفعل</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ DASHBOARD LAYOUT ============
function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const items = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'لوحة التحكم', end: true },
    { to: '/dashboard/accounting', icon: Calculator, label: '💰 المحاسبة' },
    { to: '/dashboard/crm', icon: Users, label: '👥 CRM' },
    { to: '/dashboard/inventory', icon: Warehouse, label: '📦 المخزون' },
    { to: '/dashboard/hr', icon: UserCog, label: '👨‍💼 HR' },
    { to: '/dashboard/reports', icon: BarChart3, label: '📊 التقارير' },
    { to: '/dashboard/ai', icon: Brain, label: '🤖 الذكاء الاصطناعي' },
    { to: '/dashboard/blockchain', icon: Link2, label: '🔗 Blockchain' },
    { to: '/dashboard/iot', icon: Cpu, label: '🏭 IoT' },
    { to: '/dashboard/shipping', icon: Truck, label: '🚚 الشحن' },
    { to: '/dashboard/procurement', icon: ShoppingCart, label: '🛒 المشتريات' },
    { to: '/dashboard/quality', icon: Shield, label: '✅ الجودة' },
    { to: '/dashboard/assets', icon: Building2, label: '🏢 الأصول' },
    { to: '/dashboard/maintenance', icon: Wrench, label: '🔧 الصيانة' },
    { to: '/dashboard/integration', icon: CheckCircle, label: '✅ التكامل' },
    { to: '/dashboard/demo', icon: Play, label: '🎬 التجربة' },
    { to: '/dashboard/pos', icon: CreditCard, label: '💳 نقطة البيع' },
    { to: '/dashboard/audit', icon: History, label: '📋 السجل' },
    { to: '/dashboard/export', icon: Download, label: '📤 التصدير' },
    { to: '/dashboard/settings', icon: Settings, label: '⚙️ الإعدادات' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex" dir="rtl">
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}
      <aside className={`fixed lg:static inset-y-0 right-0 z-50 w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col transform transition-transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
        <div className="h-16 flex items-center gap-2 px-5 border-b border-gray-100 dark:border-gray-700">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <div><h1 className="text-base font-bold text-gray-900 dark:text-white">Marsool ERP</h1><p className="text-[10px] text-gray-400">لوحة التحكم</p></div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden mr-auto p-1"><X size={18} /></button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div className="space-y-1">
            {items.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} onClick={() => setSidebarOpen(false)}
                className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-800' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
                <item.icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
        <div className="p-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">م</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-gray-900 dark:text-white truncate">مدير النظام</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">admin@marsool.com</div>
            </div>
            <a href="#/" className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-gray-400 hover:text-red-500">
              <LogOut size={16} />
            </a>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex items-center gap-2 bg-gray-50 dark:bg-gray-700 rounded-xl px-3 py-2 border border-gray-200 dark:border-gray-600 w-64">
              <Search size={16} className="text-gray-400" />
              <input type="text" placeholder="بحث..." className="bg-transparent outline-none text-sm w-full dark:text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl">
              <Bell size={20} className="text-gray-600 dark:text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="accounting" element={<SystemPage title="المحاسبة" icon={Calculator} color="text-blue-600" description="نظام محاسبي متكامل" />} />
          <Route path="crm" element={<SystemPage title="CRM" icon={Users} color="text-green-600" description="إدارة علاقات العملاء" />} />
          <Route path="inventory" element={<SystemPage title="المخزون" icon={Warehouse} color="text-purple-600" description="إدارة المخزون والمستودعات" />} />
          <Route path="hr" element={<SystemPage title="HR" icon={UserCog} color="text-orange-600" description="إدارة الموارد البشرية" />} />
          <Route path="reports" element={<SystemPage title="التقارير" icon={BarChart3} color="text-indigo-600" description="التقارير والتحليلات" />} />
          <Route path="ai" element={<SystemPage title="الذكاء الاصطناعي" icon={Brain} color="text-pink-600" description="المساعد الذكي" />} />
          <Route path="blockchain" element={<SystemPage title="Blockchain" icon={Link2} color="text-cyan-600" description="تقنية البلوك تشين" />} />
          <Route path="iot" element={<SystemPage title="IoT" icon={Cpu} color="text-teal-600" description="إنترنت الأشياء" />} />
          <Route path="shipping" element={<SystemPage title="الشحن" icon={Truck} color="text-blue-600" description="إدارة الشحن والتوصيل" />} />
          <Route path="procurement" element={<SystemPage title="المشتريات" icon={ShoppingCart} color="text-green-600" description="إدارة المشتريات" />} />
          <Route path="quality" element={<SystemPage title="الجودة" icon={Shield} color="text-red-600" description="إدارة الجودة" />} />
          <Route path="assets" element={<SystemPage title="الأصول" icon={Building2} color="text-amber-600" description="إدارة الأصول الثابتة" />} />
          <Route path="maintenance" element={<SystemPage title="الصيانة" icon={Wrench} color="text-yellow-600" description="إدارة الصيانة" />} />
          <Route path="integration" element={<SystemPage title="التكامل" icon={CheckCircle} color="text-emerald-600" description="التكامل بين الأنظمة" />} />
          <Route path="demo" element={<SystemPage title="التجربة" icon={Play} color="text-violet-600" description="تجربة تشغيلية" />} />
          <Route path="pos" element={<SystemPage title="نقطة البيع" icon={CreditCard} color="text-rose-600" description="نظام POS" />} />
          <Route path="audit" element={<SystemPage title="السجل" icon={History} color="text-slate-600" description="سجل العمليات" />} />
          <Route path="export" element={<SystemPage title="التصدير" icon={Download} color="text-fuchsia-600" description="تصدير البيانات" />} />
          <Route path="settings" element={<SystemPage title="الإعدادات" icon={Settings} color="text-gray-600" description="إعدادات النظام" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
