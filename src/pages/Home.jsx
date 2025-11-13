import React, { useState } from 'react';

const Home = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    { id: 1, alt: 'ক্লিনিকের অভ্যন্তরীণ ছবি', src: '/clinic-interior.webp', placeholder: 'ক্লিনিকের অভ্যন্তর' },
    { id: 2, alt: 'Modern dental office reception', src: '/Reception Area.webp', placeholder: 'Reception Area' },
    { id: 3, alt: 'Advanced dental equipment', placeholder: 'Treatment Room' },
    { id: 4, alt: 'Comfortable patient room', placeholder: 'Patient Room' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'সারা খানম',
      text: 'ডাঃ মাহি ও তার টিম অসাধারণ! আমি যে চিকিৎসা পেয়েছি তা ছিল চমৎকার।',
      rating: 5,
    },
    {
      id: 2,
      name: 'মোহাম্মদ রহিম',
      text: 'পেশাদার, নম্র এবং সুদক্ষ। অবশেষে আমি একজন বিশ্বস্ত ডেন্টিস্ট পেলাম।',
      rating: 5,
    },
    {
      id: 3,
      name: 'ফাতেমা বেগম',
      text: 'অফিসটি আধুনিক ও পরিচ্ছন্ন। স্টাফরা আমাকে সম্পূর্ণ ভিজিটে আরামদায়ক অনুভব করিয়েছেন।',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'কত দিন পর পর ডেন্টিস্টের কাছে যাওয়া উচিত?',
      answer: 'আমরা সুস্থ মুখের জন্য প্রতি ৬ মাস অন্তর নিয়মিত পরিষ্কার ও চেকআপের পরামর্শ দিই।',
    },
    {
      question: 'আপনারা কি ইন্স্যুরেন্স গ্রহণ করেন?',
      answer: 'হ্যাঁ, আমরা বেশিরভাগ প্রধান ডেন্টাল ইন্স্যুরেন্স প্ল্যান গ্রহণ করি। আপনার নির্দিষ্ট কভারেজ যাচাই করতে আমাদের অফিসে যোগাযোগ করুন।',
    },
    {
      question: 'ডেন্টাল জরুরি অবস্থায় আমার কী করা উচিত?',
      answer: 'আমাদের জরুরি লাইন ০১৭২২২৭৩৪৫৫ এ কল করুন। আমরা জরুরি পরিস্থিতির জন্য ২৪/৭ ইমার্জেন্সি ডেন্টাল কেয়ার প্রদান করি।',
    },
    {
      question: 'আপনারা কি পেমেন্ট প্ল্যান অফার করেন?',
      answer: 'হ্যাঁ, আমরা সবার জন্য ডেন্টাল কেয়ার সহজলভ্য করতে নমনীয় পেমেন্ট প্ল্যান ও ফাইন্যান্সিং অপশন অফার করি।',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ডাঃ মাহি ডেন্টাল অ্যান্ড ইমপ্ল্যান্ট সেন্টার
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
              দাঁতের চিকিৎসার বিশ্বস্ত ঠিকানা
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              আধুনিক প্রযুক্তি ও অভিজ্ঞ ডাক্তারদের দ্বারা সর্বোচ্চ মানের ডেন্টাল সেবা
            </p>
            <button 
              onClick={() => setCurrentPage('appointment')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              আজই সিরিয়াল বুক করুন
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">আমাদের সম্পর্কে</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                ডাঃ মাহি ডেন্টাল অ্যান্ড ইমপ্ল্যান্ট সেন্টারে আমরা বিশ্বাস করি যে প্রত্যেকেই একটি সুস্থ ও সুন্দর হাসির অধিকারী। 
                আমাদের অত্যাধুনিক চিকিৎসা কেন্দ্রে অত্যাবশ্যকীয় প্রযুক্তি ও দয়ালু সেবার মাধ্যমে আপনাকে 
                সর্বোত্তম ডেন্টাল অভিজ্ঞতা প্রদান করি।
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">১৫+ বছরের ডেন্টাল অভিজ্ঞতা</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">অত্যাধুনিক ডিজিটাল ডেন্টিস্ট্রি</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">সম্পূর্ণ ডেন্টাল সেবা</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">রোগী-কেন্দ্রিক পদ্ধতি</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/clinic-interior.webp" 
                alt="ক্লিনিকের অভ্যন্তরীণ ছবি" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">আমাদের সেবাসমূহ</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">সম্পূর্ণ পরিবারের জন্য বিস্তৃত ডেন্টাল সেবা</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">সাধারণ ডেন্টিস্ট্রি</h3>
              <p className="text-gray-600 dark:text-gray-300">নিয়মিত চেকআপ, পরিষ্কার ও প্রতিরোধমূলক চিকিৎসা</p>
            </div>
            <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">কসমেটিক ডেন্টিস্ট্রি</h3>
              <p className="text-gray-600 dark:text-gray-300">দাঁত সাদাকরণ, ভেনিয়ার ও হাসির রূপান্তর</p>
            </div>
            <div className="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">পুনরুদ্ধারকারী চিকিৎসা</h3>
              <p className="text-gray-600 dark:text-gray-300">ক্রাউন, ব্রিজ, ইমপ্ল্যান্ট ও দন্তপাটি</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">আমাদের ক্লিনিক</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">আমাদের আধুনিক ডেন্টাল অফিসের ভার্চুয়াল ট্যুর নিন</p>
          </div>
          <div className="relative">
            <div className="bg-gray-200 dark:bg-gray-700 h-96 rounded-lg overflow-hidden">
              {galleryImages[currentSlide].src ? (
                <img 
                  src={galleryImages[currentSlide].src} 
                  alt={galleryImages[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-lg">
                    {galleryImages[currentSlide].placeholder}
                  </span>
                </div>
              )}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">আমাদের রোগীদের মতামত</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">প্রকৃত রোগীদের প্রকৃত রিভিউ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900 dark:text-white">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">প্রায়শই জিজ্ঞাসিত প্রশ্ন</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">সাধারণ ডেন্টাল প্রশ্নের উত্তর পান</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
