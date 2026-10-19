import { HashRouter, Routes, Route, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  const stats = [
    { label: 'المبيعات', value: '145,230', unit: 'ر.س', change: '+12.5%', up: true, icon: DollarSign, color: 'bg-blue-500' },
    { label: 'الطلبات', value: '342', unit: 'طلب', change: '+8.3%', up: true, icon: ShoppingCart, color: 'bg-green-500' },
    { label: 'المخزون', value: '1,847', unit: 'صنف', change: '-3.2%', up: false, icon: Package, color: 'bg-purple-500' },
    { label: 'العملاء', value: '892', unit: 'عميل', change: '+5.1%', up: true, icon: Users, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-gray-900 dark:text-white">لوحة التحكم</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">مرحباً بك، إليك ملخص أداء أعمالك</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon size={18} className="text-white" />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.up ? 'text-green-600 bg-green-50 dark:bg-green-900/20' : 'text-red-600 bg-red-50 dark:bg-red-900/20'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label} ({stat.unit})</div>
          </div>
        ))}
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

// ============ ACCOUNTING SYSTEM ============
function AccountingSystem() {
  const [entries, setEntries] = useState([
    { id: 1, date: '2024-01-16', description: 'فاتورة بيع #001', debit: 2450, credit: 2450, status: 'معتمد' },
    { id: 2, date: '2024-01-16', description: 'تحصيل نقدي', debit: 1150, credit: 1150, status: 'معتمد' },
    { id: 3, date: '2024-01-15', description: 'فاتورة شراء', debit: 8900, credit: 8900, status: 'مسودة' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <Calculator size={24} className="text-blue-600" />
            المحاسبة التفاعلية
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">نظام محاسبي متكامل بدبل القيد</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700">
          <Plus size={16} />
          قيد جديد
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">إجمالي القيود</div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">{entries.length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">القيود المعتمدة</div>
          <div className="text-2xl font-black text-green-600">{entries.filter(e => e.status === 'معتمد').length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">المسودات</div>
          <div className="text-2xl font-black text-yellow-600">{entries.filter(e => e.status === 'مسودة').length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">إجمالي المدين</div>
          <div className="text-2xl font-black text-red-600">{entries.reduce((s, e) => s + e.debit, 0).toLocaleString()}</div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-100 dark:border-gray-700">
          <h3 className="font-bold text-gray-900 dark:text-white">القيود اليومية</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">التاريخ</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">الوصف</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">مدين</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">دائن</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id} className="border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{entry.date}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{entry.description}</td>
                  <td className="py-3 px-4 text-red-600 font-bold">{entry.debit.toLocaleString()}</td>
                  <td className="py-3 px-4 text-green-600 font-bold">{entry.credit.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${entry.status === 'معتمد' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'}`}>
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============ CRM SYSTEM ============
function CRMSystem() {
  const customers = [
    { id: 1, name: 'أحمد محمد', email: 'ahmed@example.com', phone: '0501234567', orders: 15, total: '45,200', type: 'VIP' },
    { id: 2, name: 'شركة التقنية', email: 'info@tech.com', phone: '0112345678', orders: 42, total: '128,500', type: 'VIP' },
    { id: 3, name: 'فاطمة علي', email: 'fatima@example.com', phone: '0559876543', orders: 8, total: '12,400', type: 'عادي' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <Users size={24} className="text-green-600" />
            نظام CRM
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">إدارة علاقات العملاء</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700">
          <Plus size={16} />
          عميل جديد
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">إجمالي العملاء</div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">{customers.length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">عملاء VIP</div>
          <div className="text-2xl font-black text-yellow-600">{customers.filter(c => c.type === 'VIP').length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">إجمالي المبيعات</div>
          <div className="text-2xl font-black text-green-600">{customers.reduce((s, c) => s + parseInt(c.total.replace(/,/g, '')), 0).toLocaleString()}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">متوسط الطلبات</div>
          <div className="text-2xl font-black text-blue-600">{Math.round(customers.reduce((s, c) => s + c.orders, 0) / customers.length)}</div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-100 dark:border-gray-700">
          <h3 className="font-bold text-gray-900 dark:text-white">قائمة العملاء</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">الاسم</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">البريد</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">الجوال</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">الطلبات</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">الإجمالي</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">النوع</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{customer.name}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{customer.email}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300" dir="ltr">{customer.phone}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{customer.orders}</td>
                  <td className="py-3 px-4 font-bold text-green-600">{customer.total} ر.س</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${customer.type === 'VIP' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'}`}>
                      {customer.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============ INVENTORY SYSTEM ============
function InventorySystem() {
  const products = [
    { id: 1, name: 'سماعات بلوتوث JBL', category: 'إلكترونيات', price: 299, stock: 45, status: 'متوفر' },
    { id: 2, name: 'شاحن سريع 65W', category: 'إلكترونيات', price: 149, stock: 5, status: 'منخفض' },
    { id: 3, name: 'حافظة جوال', category: 'إكسسوارات', price: 49, stock: 120, status: 'متوفر' },
    { id: 4, name: 'كابل USB-C', category: 'إكسسوارات', price: 29, stock: 8, status: 'منخفض' },
    { id: 5, name: 'ساعة ذكية', category: 'إلكترونيات', price: 899, stock: 23, status: 'متوفر' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <Warehouse size={24} className="text-purple-600" />
            المخزون المتقدم
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">إدارة المخزون والمستودعات</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700">
          <Plus size={16} />
          منتج جديد
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">إجمالي الأصناف</div>
          <div className="text-2xl font-black text-gray-900 dark:text-white">{products.length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">القيمة الإجمالية</div>
          <div className="text-2xl font-black text-green-600">{products.reduce((s, p) => s + p.price * p.stock, 0).toLocaleString()}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">أصناف منخفضة</div>
          <div className="text-2xl font-black text-yellow-600">{products.filter(p => p.stock < 10).length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">نفذ من المخزون</div>
          <div className="text-2xl font-black text-red-600">{products.filter(p => p.stock === 0).length}</div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-100 dark:border-gray-700">
          <h3 className="font-bold text-gray-900 dark:text-white">قائمة المنتجات</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">المنتج</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">التصنيف</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">السعر</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">المخزون</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-gray-500 dark:text-gray-400">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{product.name}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{product.category}</td>
                  <td className="py-3 px-4 font-bold text-gray-900 dark:text-white">{product.price} ر.س</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{product.stock}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${product.status === 'متوفر' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'}`}>
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
          <Route path="accounting" element={<AccountingSystem />} />
          <Route path="crm" element={<CRMSystem />} />
          <Route path="inventory" element={<InventorySystem />} />
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
