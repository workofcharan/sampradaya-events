import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useCustomerAuth } from '../context/CustomerAuthContext';
import { MandalaLogo } from '../components/common/MandalaLogo';
import { FestiveDivider } from '../components/common/FestiveDivider';
import {
  User,
  Mail,
  Phone,
  Lock,
  ArrowRight,
  Sparkles,
  KeyRound,
  CheckCircle2,
} from 'lucide-react';

export const CustomerAuthPage: React.FC = () => {
  const { login, register, isAuthenticated } = useCustomerAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('priya.sharma@example.com');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [password, setPassword] = useState('customer123');

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // If already authenticated, redirect
  const destination = (location.state as any)?.from || '/book-slot';
  if (isAuthenticated) {
    navigate(destination, { replace: true });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        if (!name || !phone) {
          setError('Please provide your full name and phone number.');
          setIsLoading(false);
          return;
        }
        await register(name, email, phone, password);
      }
      navigate(destination, { replace: true });
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please check your details.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFillDemo = () => {
    setMode('login');
    setEmail('priya.sharma@example.com');
    setPassword('customer123');
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center p-4 sm:p-8 relative">
      {/* Background theme texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden flex items-center justify-center">
        <img
          src="/assets/instagram/sampradaya_lakeside_pink_mandap.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#DFB15B] relative overflow-hidden">
          {/* Ornaments */}
          <div className="corner-ornament-tl" />
          <div className="corner-ornament-tr" />
          <div className="corner-ornament-bl" />
          <div className="corner-ornament-br" />

          {/* Header */}
          <div className="text-center space-y-2">
            <MandalaLogo size="md" className="justify-center" />
            <h2 className="text-2xl font-serif font-bold text-[#3B2314] mt-2">
              {mode === 'login' ? 'Customer Sign In' : 'Create Guest Account'}
            </h2>
            <p className="text-xs text-[#8D6E63] font-serif italic">
              Access real-time slot bookings and personal celebration dossiers
            </p>
          </div>

          <FestiveDivider className="my-4" />

          {/* Mode Switcher Tabs */}
          <div className="grid grid-cols-2 gap-2 bg-[#FBF4E6] p-1 rounded-xl mb-5 border border-[#DFB15B]/30">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError('');
              }}
              className={`py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                mode === 'login'
                  ? 'bg-[#3B2314] text-white shadow'
                  : 'text-[#5C3820] hover:text-[#3B2314]'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setError('');
              }}
              className={`py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                mode === 'signup'
                  ? 'bg-[#3B2314] text-white shadow'
                  : 'text-[#5C3820] hover:text-[#3B2314]'
              }`}
            >
              New Guest
            </button>
          </div>

          {error && (
            <div className="p-3 mb-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3820] mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8D6E63] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Diya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#DFB15B]/60 text-xs focus:outline-none focus:ring-2 focus:ring-[#C0392B] bg-white text-[#3B2314]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3820] mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8D6E63] absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#DFB15B]/60 text-xs focus:outline-none focus:ring-2 focus:ring-[#C0392B] bg-white text-[#3B2314]"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3820] mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#8D6E63] absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#DFB15B]/60 text-xs focus:outline-none focus:ring-2 focus:ring-[#C0392B] bg-white text-[#3B2314]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3820] mb-1">
                Password *
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#8D6E63] absolute left-3 top-2.5" />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#DFB15B]/60 text-xs focus:outline-none focus:ring-2 focus:ring-[#C0392B] bg-white text-[#3B2314]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#C0392B] via-[#D35400] to-[#E8833A] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2"
            >
              <span>{isLoading ? 'Processing...' : mode === 'login' ? 'Sign In & Continue' : 'Create Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick 1-Click Demo Box */}
          <div className="mt-6 pt-4 border-t border-[#F5EBD7] text-center space-y-1.5">
            <button
              type="button"
              onClick={handleFillDemo}
              className="text-[11px] text-[#C0392B] hover:underline font-semibold flex items-center justify-center gap-1 mx-auto"
            >
              <KeyRound className="w-3.5 h-3.5 text-[#F4B63F]" />
              Click to prefill Demo Customer Credentials
            </button>
            <p className="text-[10px] text-[#8D6E63]">
              Demo User: <span className="font-mono text-[#3B2314]">priya.sharma@example.com</span> / <span className="font-mono text-[#3B2314]">customer123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
