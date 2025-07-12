import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Phone, Mail, MapPin, ChevronRight, Bell, Users, Building, FileText, Shield, Heart, GraduationCap, Clock, Star, Zap, Globe, Award, TrendingUp, Calendar, MessageCircle, Eye, Download, Home, Car, Briefcase, Baby, TreePine, Droplets, Wheat, CloudRain, IndianRupee, CreditCard, AlertCircle, CheckCircle, User, Stethoscope, BookOpen, Tractor, Sun, Thermometer } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeService, setActiveService] = useState(0);
  const [weatherData, setWeatherData] = useState({ temp: 28, condition: 'Sunny', humidity: 65 });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const serviceTimer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(serviceTimer);
  }, []);

  const services = [
    { 
      icon: FileText, 
      title: 'Document Services', 
      description: 'Birth/Death certificates, Ration cards, Identity documents',
      color: 'from-emerald-500 to-teal-600',
      stats: '2,500+ documents issued',
      time: 'Same day processing'
    },
    { 
      icon: IndianRupee, 
      title: 'Pension Schemes', 
      description: 'Old age pension, Widow pension, Disability benefits',
      color: 'from-blue-500 to-indigo-600',
      stats: '1,200+ beneficiaries',
      time: 'Monthly disbursement'
    },
    { 
      icon: Home, 
      title: 'Housing Schemes', 
      description: 'PM Awas Yojana, Rural housing assistance',
      color: 'from-orange-500 to-red-600',
      stats: '800+ houses sanctioned',
      time: '30 days approval'
    },
    { 
      icon: Wheat, 
      title: 'Agricultural Services', 
      description: 'Crop insurance, Soil testing, Fertilizer subsidies',
      color: 'from-green-500 to-emerald-600',
      stats: '3,500+ farmers registered',
      time: 'Seasonal support'
    },
    { 
      icon: GraduationCap, 
      title: 'Education Services', 
      description: 'Scholarships, School admissions, Skill development',
      color: 'from-purple-500 to-indigo-600',
      stats: '2,800+ students enrolled',
      time: 'Year-round enrollment'
    },
    { 
      icon: Heart, 
      title: 'Health Services', 
      description: 'Medical camps, Vaccination, Health insurance',
      color: 'from-pink-500 to-rose-600',
      stats: '5,000+ patients treated',
      time: '24/7 emergency care'
    }
  ];

  const quickServices = [
    { icon: FileText, title: 'Birth Certificate', color: 'bg-blue-500' },
    { icon: CreditCard, title: 'Ration Card', color: 'bg-green-500' },
    { icon: IndianRupee, title: 'Pension Status', color: 'bg-purple-500' },
    { icon: AlertCircle, title: 'File Grievance', color: 'bg-red-500' },
    { icon: Wheat, title: 'Crop Insurance', color: 'bg-yellow-500' },
    { icon: Stethoscope, title: 'Health Appointment', color: 'bg-pink-500' }
  ];

  const schemes = [
    {
      title: 'PM-KISAN Samman Nidhi',
      description: '₹6,000 annual income support to farmer families',
      beneficiaries: '2,100',
      status: 'Active'
    },
    {
      title: 'Mahatma Gandhi NREGA',
      description: '100 days guaranteed employment in rural areas',
      beneficiaries: '1,800',
      status: 'Active'
    },
    {
      title: 'Pradhan Mantri Awas Yojana',
      description: 'Housing for all in rural areas',
      beneficiaries: '650',
      status: 'Active'
    },
    {
      title: 'Ayushman Bharat',
      description: 'Health insurance coverage up to ₹5 lakh',
      beneficiaries: '4,200',
      status: 'Active'
    }
  ];

  const cropPrices = [
    { crop: 'Wheat', price: '₹2,150/quintal', change: '+2.5%', trend: 'up' },
    { crop: 'Rice', price: '₹1,950/quintal', change: '+1.8%', trend: 'up' },
    { crop: 'Sugarcane', price: '₹350/quintal', change: '-0.5%', trend: 'down' },
    { crop: 'Cotton', price: '₹5,800/quintal', change: '+3.2%', trend: 'up' }
  ];

  const villageStats = [
    { label: 'Population', value: '12,450', trend: '+1.2%' },
    { label: 'Services Today', value: '89', trend: '+15.3%' },
    { label: 'Active Schemes', value: '24', trend: '+8.7%' },
    { label: 'Satisfaction', value: '4.7/5', trend: '+2.1%' }
  ];

  const news = [
    {
      title: 'New Primary Health Center Inaugurated',
      date: 'March 18, 2025',
      summary: 'Modern healthcare facility with 24/7 emergency services now operational.',
      category: 'Health'
    },
    {
      title: 'Digital Literacy Program Launched',
      date: 'March 15, 2025',
      summary: 'Free computer training for villagers aged 18-60 years.',
      category: 'Education'
    },
    {
      title: 'Kharif Season Crop Insurance Registration Open',
      date: 'March 12, 2025',
      summary: 'Farmers can register for crop insurance until March 31st.',
      category: 'Agriculture'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
      {/* Quick Action Buttons */}
      <div className="fixed right-6 bottom-6 z-50 space-y-3">
        <button className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group">
          <MessageCircle className="w-5 h-5" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Help Chat
          </span>
        </button>
        <button className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group">
          <Phone className="w-5 h-5" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call Support
          </span>
        </button>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg shadow-xl sticky top-0 z-40 border-b border-green-100">
        <div className="bg-gradient-to-r from-green-800 via-blue-800 to-orange-800 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <span className="flex items-center hover:text-green-200 transition-colors">
                  <Clock className="w-4 h-4 mr-1" /> 
                  {currentTime.toLocaleTimeString()}
                </span>
                <span className="flex items-center hover:text-green-200 transition-colors">
                  <Phone className="w-4 h-4 mr-1" /> 
                  1800-123-4567
                </span>
                <span className="flex items-center hover:text-green-200 transition-colors">
                  <Sun className="w-4 h-4 mr-1" /> 
                  {weatherData.temp}°C {weatherData.condition}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs">All Services Online</span>
                </div>
                <a href="#" className="hover:text-green-200 transition-colors">हिंदी</a>
                <a href="#" className="hover:text-green-200 transition-colors">Help</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <TreePine className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
                  Gram Seva
                </h1>
                <p className="text-lg text-gray-600 font-medium">Village Services Portal</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105">Services</a>
              <a href="#schemes" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105">Schemes</a>
              <a href="#farmers" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105">Farmers</a>
              <a href="#news" className="text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105">News</a>
              <div className="flex items-center bg-gray-50 rounded-full p-1">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="bg-transparent px-4 py-2 w-64 focus:outline-none text-gray-700 placeholder-gray-500"
                />
                <button className="bg-gradient-to-r from-green-600 to-orange-600 text-white p-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </nav>
            
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Services</a>
              <a href="#schemes" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Schemes</a>
              <a href="#farmers" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Farmers</a>
              <a href="#news" className="block py-2 text-gray-700 hover:text-green-600 font-medium">News</a>
              <div className="pt-2">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-600 to-orange-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Gram Seva
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto leading-relaxed">
              Your digital gateway to government services. Empowering rural communities with technology since 2020.
            </p>
            
            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {villageStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-green-200">{stat.label}</div>
                  <div className="text-xs text-yellow-300 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.trend}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Access Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105">
                Track Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Quick Access Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast-track your most common requests with our streamlined online portal
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {quickServices.map((service, index) => (
              <div key={index} className="group text-center">
                <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl cursor-pointer`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors cursor-pointer">
                  {service.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Government Services</h3>
            <p className="text-xl text-gray-600">Comprehensive services for all your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  activeService === index ? 'ring-4 ring-green-400 ring-opacity-50' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
                <div className="relative p-8 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    {activeService === index && (
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                  <p className="text-white/90 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 mr-2" />
                      {service.stats}
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {service.time}
                    </div>
                  </div>
                  
                  <button className="w-full bg-white/20 backdrop-blur-lg text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    Apply Now <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes */}
      <section className="py-20 bg-white" id="schemes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Active Government Schemes</h3>
            <p className="text-xl text-gray-600">Benefit from various government initiatives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schemes.map((scheme, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-xl border border-green-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {scheme.status}
                    </span>
                    <span className="text-gray-500 text-sm">{scheme.beneficiaries} beneficiaries</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors cursor-pointer">
                    {scheme.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{scheme.description}</p>
                  <div className="flex space-x-3">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center">
                      Apply Now <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                    <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer's Corner */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50" id="farmers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Farmer's Corner</h3>
            <p className="text-xl text-gray-600">Essential information for our farming community</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Weather & Crop Prices */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CloudRain className="w-6 h-6 mr-3 text-blue-600" />
                  Today's Weather
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">{weatherData.temp}°C</p>
                    <p className="text-gray-600">{weatherData.condition}</p>
                  </div>
                  <div className="text-center">
                    <Droplets className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">{weatherData.humidity}%</p>
                    <p className="text-gray-600">Humidity</p>
                  </div>
                  <div className="text-center">
                    <Thermometer className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">15°C</p>
                    <p className="text-gray-600">Min Temp</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <IndianRupee className="w-6 h-6 mr-3 text-green-600" />
                  Market Prices
                </h4>
                <div className="space-y-4">
                  {cropPrices.map((crop, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Wheat className="w-5 h-5 text-yellow-600 mr-3" />
                        <span className="font-semibold text-gray-900">{crop.crop}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{crop.price}</p>
                        <p className={`text-sm ${crop.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {crop.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Agricultural Services */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Tractor className="w-6 h-6 mr-3 text-green-600" />
                Agricultural Services
              </h4>
              <div className="space-y-4">
                <div className="p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                  <h5 className="font-semibold text-gray-900 mb-2">Soil Testing</h5>
                  <p className="text-gray-600 text-sm">Free soil analysis and fertilizer recommendations</p>
                  <button className="mt-2 text-green-600 font-medium text-sm">Book Test →</button>
                </div>
                <div className="p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                  <h5 className="font-semibold text-gray-900 mb-2">Crop Insurance</h5>
                  <p className="text-gray-600 text-sm">Protect your crops against natural calamities</p>
                  <button className="mt-2 text-blue-600 font-medium text-sm">Apply Now →</button>
                </div>
                <div className="p-4 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer">
                  <h5 className="font-semibold text-gray-900 mb-2">Fertilizer Subsidy</h5>
                  <p className="text-gray-600 text-sm">Get subsidized fertilizers for better yield</p>
                  <button className="mt-2 text-orange-600 font-medium text-sm">Check Eligibility →</button>
                </div>
                <div className="p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer">
                  <h5 className="font-semibold text-gray-900 mb-2">Agricultural Loans</h5>
                  <p className="text-gray-600 text-sm">Low-interest loans for farming equipment</p>
                  <button className="mt-2 text-purple-600 font-medium text-sm">Apply →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="py-20 bg-white" id="news">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Village News & Updates</h3>
            <p className="text-xl text-gray-600">Stay informed about local developments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors cursor-pointer">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  <button className="text-green-600 font-semibold hover:text-green-800 transition-colors flex items-center">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Payments */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Digital Payments</h3>
            <p className="text-xl text-gray-600">Pay your bills and fees online securely</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Tax Payments</h4>
              <p className="text-gray-600 mb-4">Pay property tax, water tax, and other municipal taxes</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Pay Now
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Utility Bills</h4>
              <p className="text-gray-600 mb-4">Pay electricity, water, and other utility bills</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Pay Bills
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Service Fees</h4>
              <p className="text-gray-600 mb-4">Pay for certificates, licenses, and other services</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Pay Fees
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 via-blue-800 to-orange-800 text-white relative overflow-hidden" id="contact">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Contact & Support</h3>
            <p className="text-xl text-green-200">We're here to help you 24/7</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Helpline</h4>
              <p className="text-green-200 mb-4">24/7 multilingual support</p>
              <p className="text-white font-semibold">1800-123-4567</p>
              <p className="text-green-200">Toll-free nationwide</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Email Support</h4>
              <p className="text-green-200 mb-4">Quick responses guaranteed</p>
              <p className="text-white font-semibold">support@gramseva.gov.in</p>
              <p className="text-green-200">Response time: {'< 4 hours'}</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Village Office</h4>
              <p className="text-green-200 mb-4">In-person assistance available</p>
              <p className="text-white font-semibold">Main Road, Village Center</p>
              <p className="text-green-200">Mon-Sat: 9 AM - 5 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl">Gram Seva</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Empowering rural communities through digital governance and accessible public services.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                  <span className="text-xs font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                  <span className="text-xs font-bold">w</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-lg">Quick Services</h5>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" />Birth Certificate</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" />Ration Card</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" />Pension Status</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" />Grievance Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-lg">Schemes</h5>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" />PM-KISAN</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" />MGNREGA</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" />Awas Yojana</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" />Ayushman Bharat</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-lg">Resources</h5>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" />Download Forms</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" />Track Application</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" />User Guide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2" />FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm mb-4 md:mb-0">
                © 2025 Gram Seva Portal. All rights reserved. | Privacy Policy | Terms of Service | Accessibility
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-400">Serving</span>
                <span className="bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                  12,450 villagers
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;