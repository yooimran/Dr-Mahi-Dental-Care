import React, { useState, useEffect } from 'react';

const Home = ({ setCurrentPage }) => {
  const [heroSlide, setHeroSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handlePageChange = (page) => {
    scrollToTop();
    setCurrentPage(page);
  };



  const faqs = [
    {
      question: 'কত দিন পর পর ডেন্টিস্টের কাছে যাওয়া উচিত?',
      answer: 'আমরা প্রতি ৬ মাস অন্তর নিয়মিত চেকআপ ও পরিষ্কারের পরামর্শ দিই। এটি দাঁতের ক্ষয়, মাড়ির রোগ এবং অভ্যন্তরীণ সমস্যা প্রাথমিক পর্যায়ে শনাক্ত করতে সাহায্য করে।',
    },
    {
      question: 'দাঁতের ব্যথায় তাৎক্ষণিক করণীয় কী?',
      answer: 'তাৎক্ষণিক ব্যবস্থা: হালকা গরম লবণ পানিতে কুলকুচি করুন, ব্যথানাশক ওষুধ সেবন করুন। তবে দ্রুত ডেন্টিস্টের কাছে যাওয়া জরুরি। আমাদের ইমার্জেন্সি হটলাইন ০১৭২২২৭ৃ৪৫৫।',
    },
    {
      question: 'রুট ক্যানেল কি খুব ব্যথার?',
      answer: 'আধুনিক প্রযুক্তি ও অ্যানেস্থেসিয়ার কারণে রুট ক্যানেল এখন প্রায় ব্যথাহীন। আমাদের এক্সপার্ট টিম সর্বোচ্চ আরাম নিশ্চিত করে থাকেন। চিকিৎসার পর সামান্য অস্বস্তি হতে পারে যা দ্রুত সেরে যায়।',
    },
    {
      question: 'ডেন্টাল ইমপ্ল্যান্টের খরচ কত?',
      answer: 'ইমপ্ল্যান্টের খরচ নির্ভর করে ব্র্যান্ড, জটিলতা ও অতিরিক্ত চিকিৎসার উপর। আমরা বিভিন্ন বাজেটের জন্য বিকল্প প্রদান করি। বিনামূল্যে পরামর্শের জন্য যোগাযোগ করুন এবং নমনীয় পেমেন্ট প্ল্যান সুবিধা নিন।',
    },
    {
      question: 'দাঁত পরিষ্কার (স্কেলিং) কত দিন পর করাতে হয়?',
      answer: 'সাধারণত ৬ মাস অন্তর স্কেলিং করানো উচিত। তবে ধূমপায়ী বা বেশি টার্টার জমা হওয়ার প্রবণতা থাকলে ৩-৪ মাস অন্তর প্রয়োজন হতে পারে। নিয়মিত স্কেলিং মাড়ির রোগ প্রতিরোধ করে।',
    },
    {
      question: 'সন্তানের প্রথম দাঁত দেখানোর বয়স কত?',
      answer: 'শিশুর প্রথম দাঁত ওঠার পর বা ১ বছর বয়সের মধ্যে প্রথম ডেন্টাল ভিজিট করা উচিত। প্রাথমিক দাঁতের যত্ন স্থায়ী দাঁতের স্বাস্থ্যের জন্য অত্যন্ত গুরুত্বপূর্ণ। আমাদের পেডিয়াট্রিক ডেন্টাল বিশেষজ্ঞ রয়েছেন।',
    },
    {
      question: 'দাঁত সাদা করানোর পদ্ধতি কী?',
      answer: 'আমরা প্রফেশনাল টিথ হোয়াইটেনিং সেবা প্রদান করি যা নিরাপদ ও কার্যকর। হোম হোয়াইটেনিং কিট এবং ইন-অফিস লেজার হোয়াইটেনিং দুটি অপশনই আছে। ফলাফল ৬ মাস থেকে ২ বছর স্থায়ী হয়।',
    },
    {
      question: 'আক্কেল দাঁত কখন ফেলতে হয়?',
      answer: 'আক্কেল দাঁত ফেলার প্রয়োজন হয় যদি: ব্যথা হয়, অন্য দাঁতের ক্ষতি করে, পরিষ্কার করতে অসুবিধা হয়, বা সংক্রমণ হয়। আমাদের ওরাল সার্জারি বিশেষজ্ঞ ব্যথাহীন নিষ্কাশনের নিশ্চয়তা দেন।',
    },
    {
      question: 'গর্ভাবস্থায় ডেন্টাল চিকিৎসা নিরাপদ?',
      answer: 'গর্ভাবস্থায় রুটিন ডেন্টাল কেয়ার নিরাপদ, বিশেষত দ্বিতীয় ত্রৈমাসিকে। জরুরি চিকিৎসা যেকোনো সময় করা যায়। এক্স-রে ও কিছু ওষুধ সীমিত। গর্ভকালীন দাঁতের যত্ন মা ও শিশু উভয়ের জন্য গুরুত্বপূর্ণ।',
    },
    {
      question: 'ডেন্টাল ইনস্যুরেন্স কভারেজ আছে কি?',
      answer: 'আমরা বিভিন্ন ইনস্যুরেন্স কোম্পানির সাথে কাজ করি। বেশিরভাগ প্রতিরোধমূলক সেবা (চেকআপ, স্কেলিং) সম্পূর্ণ কভার হয়। চিকিৎসার আগে আপনার ইনস্যুরেন্স বেনিফিট যাচাই করে নিন।',
    }
  ];

  const heroImages = [
    {
      id: 1,
      src: '/dr mahi hero1.jpg',
      alt: 'ডাঃ মাহি ডেন্টাল অ্যান্ড ইমপ্ল্যান্ট সেন্টার',
      title: 'ডাঃ মাহি ডেন্টাল অ্যান্ড ইমপ্ল্যান্ট সেন্টার',
      subtitle: 'আপনার হাসির যত্নে আমরা প্রতিশ্রুতিবদ্ধ'
    },
    {
      id: 2,
      src: '/dr mahi hero2.jpg',
      alt: 'আধুনিক ডেন্টাল ক্লিনিক',
      title: 'অত্যাধুনিক চিকিৎসা সুবিধা',
      subtitle: 'সর্বোচ্চ মানের ডেন্টাল যন্ত্রপাতি ও পরিবেশ'
    },
    {
      id: 3,
      src: '/dr mahi hero3.jpg',
      alt: 'আরামদায়ক রিসেপশন এরিয়া',
      title: 'আরামদায়ক পরিবেশ',
      subtitle: 'রোগীদের স্বাচ্ছন্দ্যের জন্য বিশেষ ব্যবস্থা'
    },
    {
      id: 4,
      src: '/Dr Mahi.jpg',
      alt: 'ডাঃ মাহি',
      title: 'অভিজ্ঞ ডেন্টাল বিশেষজ্ঞ',
      subtitle: 'আপনার দাঁতের স্বাস্থ্যের জন্য প্রতিশ্রুতিবদ্ধ'
    }
  ];

  // Auto-slide effect for hero
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(heroInterval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen">
      {/* Floating Social Media Buttons */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:left-4 md:top-1/2 md:transform md:-translate-y-1/2 md:translate-x-0 z-50 flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-3">
        {/* Facebook */}
        <a
          href="https://facebook.com/drmahidental"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/drmahidental"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/8801722273455"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>

      {/* Hero Slider */}
      <section className="relative w-full h-96 md:h-[500px]   lg:mx-auto lg:h-[600px] overflow-hidden">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === heroSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === heroSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Book Appointment Button - Desktop Only */}
      <section className="py-8 bg-gray-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button 
            onClick={() => handlePageChange('appointment')}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0v1a2 2 0 002 2h2a2 2 0 002-2V7m-6 0H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-1" />
            </svg>
            আজই সিরিয়াল বুক করুন
          </button>
        </div>
      </section>

      {/* Secondary Navigation - Mobile/Tablet Only */}
      <section className="bg-white shadow-sm border-b border-gray-200 md:hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-3">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => handlePageChange('treatments')}
                className="bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
              >
                চিকিৎসা সেবা
              </button>
              <button
                onClick={() => handlePageChange('doctors')}
                className="bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-200"
              >
                ডাক্তার
              </button>
              <button
                onClick={() => handlePageChange('appointment')}
                className="bg-red-100 text-red-700 px-3 py-2 rounded-full text-sm font-medium hover:bg-red-200 transition-colors duration-200"
              >
                সিরিয়াল বুকিং
              </button>
              <button
                onClick={() => handlePageChange('contact')}
                className="bg-purple-100 text-purple-700 px-3 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200"
              >
                যোগাযোগ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Our Chief Dentist */}
      <section className="py-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-green-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-25 animate-ping"></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Modern Header */}
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
                আমাদের প্রধান ডেন্টিস্ট
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse"></div>
            </div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto animate-fade-in-up">
              অভিজ্ঞতা ও দক্ষতার সাথে আপনার হাসির যত্নে প্রতিশ্রুতিবদ্ধ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Right Image - First on Mobile */}
            <div className="relative animate-fade-in-right lg:order-2 order-1">
              <div className="relative group">
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-15 group-hover:scale-110 transition-transform duration-500"></div>
                
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img 
                    src="/Dr Mahi Dental.jpeg" 
                    alt="ডাঃ মাহি" 
                    className="w-full h-[500px] object-contain group-hover:scale-105 transition-transform duration-700 bg-gradient-to-br from-blue-50 to-white"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-bounce">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-800">Available</span>
                    </div>
                  </div>
                  
                  {/* Bottom Info Card - Always Visible */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-1">Expert in Dental Surgery</h4>
                    <p className="text-sm text-gray-600">Specialized in Maxillofacial Surgery & Dental Implants</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Content - Second on Mobile */}
            <div className="space-y-6 animate-fade-in-left lg:order-1 order-2">
              {/* Professional Information Card */}
              <div className="relative bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-lg border border-white/30 p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] group overflow-hidden">
                {/* Modern geometric background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                
                <div className="relative z-10">
                  <div className="mb-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">সহকারী অধ্যাপক ডা. আবু তালহা মো. মাহি</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="group/section">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-blue-700 group-hover/section:text-blue-800 transition-colors">শিক্ষাগত যোগ্যতা</h4>
                      </div>
                      <div className="space-y-3 ml-8">
                        <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50/80 to-white/60 hover:from-blue-100/80 hover:to-white/80 transition-all duration-300 border border-blue-100/50">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">বিডিএস (চট্টগ্রাম মেডিকেল কলেজ)</span>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50/80 to-white/60 hover:from-purple-100/80 hover:to-white/80 transition-all duration-300 border border-purple-100/50">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">এমএস (ম্যাক্সিলোফেসিয়াল সার্জারী) মস্কো, রাশিয়া</span>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-green-50/80 to-white/60 hover:from-green-100/80 hover:to-white/80 transition-all duration-300 border border-green-100/50">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">এডভান্স ট্রেইন্ড ইন ডেন্টাল ইমপ্ল্যান্ট (মস্কো, রাশিয়া)</span>
                        </div>
                      </div>
                    </div>

                    <div className="group/section border-t border-gradient-to-r from-transparent via-gray-200 to-transparent pt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-blue-700 group-hover/section:text-blue-800 transition-colors">বর্তমান পদবী</h4>
                      </div>
                      <div className="ml-8 p-4 bg-gradient-to-r from-blue-50/80 to-green-50/80 rounded-xl border border-blue-100/50">
                        <p className="text-gray-800 font-semibold leading-relaxed">সহকারী অধ্যাপক<br/>
                        <span className="text-gray-600 font-medium">এম এইচ শমরিতা মেডিকেল কলেজ ও হাসপাতাল</span></p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex-1 min-w-fit bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-sm font-bold">বিএমডিসি রেজি নং-৮২০১</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-fit bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-sm font-bold">দাঁত ও মুখ গহ্বরের রোগ বিশেষজ্ঞ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expertise Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 rounded-xl text-white text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold mb-2">১০+</div>
                  <div className="text-sm opacity-90">বছরের অভিজ্ঞতা</div>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 rounded-xl text-white text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold mb-2">১০০০+</div>
                  <div className="text-sm opacity-90">সফল চিকিৎসা</div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-left {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-fade-in-left {
            animation: fade-in-left 1s ease-out;
          }
          .animate-fade-in-right {
            animation: fade-in-right 1s ease-out;
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out 0.3s both;
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}</style>
      </section>

      {/* Services Preview */}
      <section className="py-6 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 right-16 w-32 h-32 bg-teal-200 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-indigo-200 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-4">
              <div className="bg-white rounded-full px-6 py-2">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  ✨ আমাদের বিশেষায়িত সেবা ✨
                </span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              আমাদের সেবাসমূহ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              আধুনিক প্রযুক্তি ও অভিজ্ঞ চিকিৎসকের মাধ্যমে সর্বোচ্চ মানের ডেন্টাল সেবা
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-blue-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-teal-100">
                  <img 
                    src="/রুট ক্যানেল ট্রিটমেন্ট.jpg" 
                    alt="রুট ক্যানেল ট্রিটমেন্ট"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-blue-700 transition-colors duration-300">
                    রুট ক্যানেল ট্রিটমেন্ট
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    দাঁতের নার্ভ ও পাল্পের আধুনিক চিকিৎসা
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-teal-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-100 to-green-100">
                  <img 
                    src="/দাঁত তোলা ও সার্জিক্যাল.webp" 
                    alt="দাঁত তোলা ও সার্জিক্যাল"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-green-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-teal-700 transition-colors duration-300">
                    দাঁত তোলা ও সার্জিক্যাল
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    জটিল দাঁত তোলা ও সার্জিক্যাল প্রক্রিয়া
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-indigo-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100">
                  <img 
                    src="/স্কেলিং ও পলিশিং.jpg" 
                    alt="স্কেলিং ও পলিশিং"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-indigo-700 transition-colors duration-300">
                    স্কেলিং ও পলিশিং
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    দাঁত পরিষ্কার ও চকচকে করার বিশেষ পদ্ধতি
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-emerald-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100">
                  <img 
                    src="/ইমপ্ল্যান্ট ও কৃত্রিম দাঁত.jpg" 
                    alt="ইমপ্ল্যান্ট ও কৃত্রিম দাঁত"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-emerald-700 transition-colors duration-300">
                    ইমপ্ল্যান্ট ও কৃত্রিম দাঁত
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    হারানো দাঁতের স্থায়ী ও আধুনিক সমাধান
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-rose-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-rose-100 to-pink-100">
                  <img 
                    src="/আঁকাবাঁকা দাঁতের চিকিৎসা.jpg" 
                    alt="আঁকাবাঁকা দাঁতের চিকিৎসা"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 to-pink-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-rose-700 transition-colors duration-300">
                    আঁকাবাঁকা দাঁতের চিকিৎসা
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    অর্থোডন্টিক্স ও আধুনিক ব্রেসেস চিকিৎসা
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-amber-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-100 to-orange-100">
                  <img 
                    src="/দাঁতের গ্যাপ পূরণ.webp" 
                    alt="দাঁতের গ্যাপ পূরণ"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-amber-700 transition-colors duration-300">
                    দাঁতের গ্যাপ পূরণ
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    দুই দাঁতের মাঝে ফাঁক বন্ধ করার কার্যকর পদ্ধতি
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 7 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-violet-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100">
                  <img 
                    src="/দাঁত সাদা করা.webp" 
                    alt="দাঁত সাদা করা"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-violet-700 transition-colors duration-300">
                    দাঁত সাদা করা
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    আধুনিক টিথ হোয়াইটেনিং ও ব্লিচিং পদ্ধতি
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 8 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-sky-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100">
                  <img 
                    src="/ক্যান্সারের চিকিৎসা.webp" 
                    alt="ক্যান্সারের চিকিৎসা"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 to-cyan-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-sky-700 transition-colors duration-300">
                    ক্যান্সারের চিকিৎসা
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    মুখের ক্যান্সার নির্ণয় ও আধুনিক চিকিৎসা
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 9 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-lime-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-lime-100 to-green-100">
                  <img 
                    src="/বাচ্চাদের দাঁতের চিকিৎসা.jpg" 
                    alt="বাচ্চাদের দাঁতের চিকিৎসা"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-600/20 to-green-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-lime-700 transition-colors duration-300">
                    বাচ্চাদের দাঁতের চিকিৎসা
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    বিশেষায়িত পেডিয়াট্রিক ডেন্টাল কেয়ার
                  </p>

                </div>
              </div>
            </div>

            {/* Service Card 10 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-red-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-red-100 to-pink-100">
                  <img 
                    src="/ফিলিং চিকিৎসা.jpg" 
                    alt="ফিলিং চিকিৎসা"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-pink-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-red-700 transition-colors duration-300">
                    ফিলিং চিকিৎসা
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    আধুনিক নরমাল ও লাইট কিউর ফিলিং পদ্ধতি
                  </p>

                </div>
              </div>
            </div>

            {/* Service Card 11 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-orange-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up" style={{animationDelay: '1.0s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100">
                  <img 
                    src="/মুখের ঘা ও টিউমার.webp" 
                    alt="মুখের ঘা ও টিউমার"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-yellow-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-orange-700 transition-colors duration-300">
                    মুখের ঘা ও টিউমার
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    ক্ষত, সিস্ট ও টিউমার অপসারণের বিশেষায়িত চিকিৎসা
                  </p>

                </div>
              </div>
            </div>

            {/* Service Card 12 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-purple-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up" style={{animationDelay: '1.1s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100">
                  <img 
                    src="/মাড়ির চিকিৎসা.jpg" 
                    alt="মাড়ির চিকিৎসা"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-purple-700 transition-colors duration-300">
                    মাড়ির চিকিৎসা
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    মাড়ি ফোলা ও রক্ত পড়ার আধুনিক চিকিৎসা
                  </p>

                </div>
              </div>
            </div>

            {/* Service Card 13 */}
            <div className="group bg-white/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-green-500/20 transition-all duration-500 p-4 scale-[1.02] -translate-y-1 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br from-green-100 to-emerald-100">
                  <img 
                    src="/ক্যাপ ও ব্রিজ.webp" 
                    alt="ক্যাপ ও ব্রিজ"
                    className="w-full h-full object-cover scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-2 text-green-700 transition-colors duration-300">
                    ক্যাপ ও ব্রিজ
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    পোস্ট কোর, ক্যাপ ও ব্রিজ চিকিৎসার আধুনিক পদ্ধতি
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dr Mahi Banner */}
      <section className="relative w-full h-1/2 overflow-hidden">
        <img 
          src="/dr mahi abnner.jpg" 
          alt="ডাঃ মাহি ডেন্টাল অ্যান্ড ইমপ্ল্যান্ট সেন্টার" 
          className="w-full h-full object-cover"
        />
      </section>

      {/* Google Reviews */}
      <section className="py-6 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-200 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with Google Branding */}
          <div className="text-center mb-12">

            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              আমাদের রোগীদের মতামত
            </h2>
            <p className="text-lg text-gray-600 mb-8">রোগীদের প্রকৃত Google রিভিউ</p>
          </div>

          {/* Google Reviews Display */}
          <div className="mb-10">
            {(() => {
              const reviews = [
                {
                  id: 1,
                  name: "Md. Shahidul Islam",
                  text: "Excellent dental service! Dr. Mahi and his team provided outstanding care. The clinic is very clean and modern. Highly recommended for anyone looking for quality dental treatment in Bangladesh.",
                  rating: 5,
                  date: "২ সপ্তাহ আগে"
                },
                {
                  id: 2,
                  name: "Rashida Begum",
                  text: "আলহামদুলিল্লাহ, ডাক্তার মাহির কাছে চিকিৎসা নিয়ে খুবই সন্তুষ্ট। দাঁতের ব্যথা সম্পূর্ণ সেরে গেছে। পরিষ্কার পরিবেশ ও আধুনিক যন্ত্রপাতি।",
                  rating: 5,
                  date: "১ মাস আগে"
                },
                {
                  id: 3,
                  name: "Ahmed Hossain",
                  text: "Best dental clinic in the area! Got my root canal treatment done here. No pain at all during the procedure. Professional staff and reasonable prices. Thank you Dr. Mahi!",
                  rating: 5,
                  date: "৩ সপ্তাহ আগে"
                },
                {
                  id: 4,
                  name: "Fatema Khatun",
                  text: "দাঁতের স্কেলিং ও পরিষ্কার করিয়েছি। খুবই ভাল লেগেছে। ডাক্তার মাহি অত্যন্ত দক্ষ ও অভিজ্ঞ। স্টাফরাও খুব ভাল ব্যবহার করেছেন।",
                  rating: 5,
                  date: "১০ দিন আগে"
                },
                {
                  id: 5,
                  name: "Mohammad Rahman",
                  text: "Outstanding experience! Got dental implant done here. The entire process was smooth and painless. Dr. Mahi explained everything clearly. Modern equipment and hygienic environment.",
                  rating: 5,
                  date: "৫ দিন আগে"
                },
                {
                  id: 6,
                  name: "Nasreen Akter",
                  text: "অসাধারণ সেবা! দাঁতের ফিলিং করিয়েছি। কোন ব্যথা হয়নি। ডাক্তার মাহি খুবই যত্নশীল ও পেশাদার। পরিষ্কার ক্লিনিক ও সাশ্রয়ী মূল্য।",
                  rating: 5,
                  date: "১ সপ্তাহ আগে"
                }
              ];



              return (
                <>
                  {/* Mobile Carousel */}
                  <div className="block md:hidden relative">
                    <div className="overflow-hidden rounded-2xl">
                      <div 
                        className="flex transition-transform duration-300 ease-in-out touch-pan-x"
                        style={{ transform: `translateX(-${currentReview * 100}%)` }}
                        onTouchStart={(e) => {
                          const touchStartX = e.touches[0].clientX;
                          e.currentTarget.dataset.touchStartX = touchStartX;
                        }}
                        onTouchEnd={(e) => {
                          const touchStartX = parseFloat(e.currentTarget.dataset.touchStartX);
                          const touchEndX = e.changedTouches[0].clientX;
                          const diff = touchStartX - touchEndX;
                          const threshold = 50;
                          
                          if (Math.abs(diff) > threshold) {
                            if (diff > 0) {
                              // Swipe left - next review
                              setCurrentReview((prev) => (prev + 1) % reviews.length);
                            } else {
                              // Swipe right - previous review
                              setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
                            }
                          }
                        }}
                      >
                        {reviews.map((review) => (
                          <div key={review.id} className="w-full flex-shrink-0 px-2">
                            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 p-6 rounded-2xl shadow-lg">
                              {/* Google Header */}
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                  <svg className="w-5 h-5" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                                    <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                                  </svg>
                                  <span className="text-xs text-gray-600 font-medium">Google Review</span>
                                </div>
                                <div className="flex">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Review Content */}
                              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                                "{review.text}"
                              </p>
                              
                              {/* Reviewer Info */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold text-sm">
                                      {review.name.charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                                    <div className="text-xs text-gray-500">Google User</div>
                                  </div>
                                </div>
                                <div className="text-xs text-gray-500">{review.date}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Mobile Dots Indicator */}
                    <div className="flex justify-center mt-4 space-x-2">
                      {reviews.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentReview(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentReview ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Desktop Grid */}
                  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
              <div key={review.id} className="bg-white/90 backdrop-blur-sm border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                {/* Google Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                      <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                    </svg>
                    <span className="text-xs text-gray-600 font-medium">Google Review</span>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Review Content */}
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  "{review.text}"
                </p>
                
                {/* Reviewer Info */}
                  <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {review.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                      <div className="text-xs text-gray-500">Google User</div>
                    </div>
                  </div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>

          {/* Overall Rating Summary */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-white/20">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-gray-600 font-medium">৫০+ Google Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">১০০%</div>
                <div className="text-sm text-gray-600 font-medium">সন্তুষ্ট রোগী</div>
              </div>
            </div>
          </div>

          {/* View All Reviews Button */}
          <div className="text-center">
            <a 
              href="https://share.google/TZGyub3lxZbWZn8iY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              সমস্ত Google রিভিউ দেখুন
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-green-200 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              প্রায়শই জিজ্ঞাসিত প্রশ্ন
            </h2>
            <p className="text-lg text-gray-600 mb-2">সাধারণ ডেন্টাল প্রশ্নের বিস্তারিত উত্তর</p>
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-blue-700">প্রশ্নে ক্লিক করুন উত্তর দেখতে</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div className={`flex-shrink-0 transform transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-xl border-l-4 border-blue-500">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">আরও প্রশ্ন আছে?</h3>
              <p className="text-blue-100 mb-6">আমাদের বিশেষজ্ঞ ডাক্তারদের সাথে সরাসরি কথা বলুন</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:01722273455"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  ফোন করুন
                </a>
                <button
                  onClick={() => {setCurrentPage('appointment'); scrollToTop();}}
                  className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0v1a2 2 0 002 2h2a2 2 0 002-2V7m-6 0H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-1" />
                  </svg>
                  অ্যাপয়েন্টমেন্ট বুক করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
