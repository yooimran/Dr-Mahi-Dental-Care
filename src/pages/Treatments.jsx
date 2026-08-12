import React, { useState } from 'react';

const Treatments = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Convert English numbers to Bengali numerals
  const toBengaliNumber = (number) => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return number.toString().replace(/\d/g, (digit) => bengaliDigits[digit]);
  };

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

  const treatments = [
    {
      id: 1,
      name: 'স্কেলিং + পলিশিং',
      category: 'preventive',
      description: 'দাঁতের ময়লা ও পাথর পরিষ্কার করে দাঁত ঝকঝকে করার পেশাদার সেবা।',
      price: 1500,
      duration: '৬০ মিনিট',
    },
    {
      id: 2,
      name: 'সম্পূর্ণ দাঁতের পরীক্ষা',
      category: 'preventive',
      description: 'এক্স-রে ও পরামর্শসহ সম্পূর্ণ মুখের স্বাস্থ্য পরীক্ষা।',
      price: 2000,
      duration: '৪৫ মিনিট',
    },
    {
      id: 3,
      name: 'দাঁত সাদাকরণ',
      category: 'cosmetic',
      description: 'উজ্জ্বল হাসির জন্য পেশাদার অফিস-ভিত্তিক দাঁত সাদাকরণ চিকিৎসা।',
      price: 8000,
      duration: '৯০ মিনিট',
    },
    {
      id: 4,
      name: 'ডেন্টাল ভেনিয়ার',
      category: 'cosmetic',
      description: 'দাঁতের সৌন্দর্য বৃদ্ধির জন্য কাস্টম-মেড পাতলা আবরণ।',
      price: 25000,
      duration: '২ ভিজিট',
    },
    {
      id: 5,
      name: 'ডেন্টাল ইমপ্ল্যান্ট',
      category: 'restorative',
      description: 'টাইটানিয়াম ইমপ্ল্যান্ট ও ক্রাউনসহ স্থায়ী দাঁত প্রতিস্থাপন সমাধান।',
      price: 45000,
      duration: '৩-৬ মাস',
    },
    {
      id: 6,
      name: 'রুট ক্যানেল চিকিৎসা',
      category: 'restorative',
      description: 'সংক্রমিত বা গুরুতর ক্ষতিগ্রস্ত দাঁত বাঁচানোর চিকিৎসা।',
      price: 8000,
      duration: '৯০ মিনিট',
    },
    {
      id: 7,
      name: 'ডেন্টাল ক্রাউন',
      category: 'restorative',
      description: 'ক্ষতিগ্রস্ত বা দুর্বল দাঁত পুনরুদ্ধারের জন্য কাস্টম-ফিটেড ক্যাপ।',
      price: 12000,
      duration: '২ ভিজিট',
    },
    {
      id: 8,
      name: 'আঁকা-বাঁকা দাঁতের চিকিৎসা',
      category: 'orthodontic',
      description: 'গোপনে দাঁত সোজা করার জন্য স্বচ্ছ অ্যালাইনার সিস্টেম।',
      price: 60000,
      duration: '১২-১৮ মাস',
    },
    {
      id: 9,
      name: 'ঐতিহ্যবাহী ব্রেসেস',
      category: 'orthodontic',
      description: 'ব্যাপক দাঁত সোজাকরণের জন্য মেটাল ব্র্যাকেট সিস্টেম।',
      price: 50000,
      duration: '১৮-২৪ মাস',
    },
    {
      id: 10,
      name: 'নতুন দাঁত লাগানো (ব্রিজ)',
      category: 'restorative',
      description: 'এক বা একাধিক অনুপস্থিত দাঁত প্রতিস্থাপনের জন্য স্থির কৃত্রিম দাঁত।',
      price: 30000,
      duration: '২-৩ ভিজিট',
    },
    {
      id: 11,
      name: 'মাড়ির রোগের চিকিৎসা',
      category: 'periodontal',
      description: 'মাড়ির রোগ ও প্রদাহের জন্য গভীর পরিষ্কার ও চিকিৎসা।',
      price: 4000,
      duration: '৬০-৯০ মিনিট',
    },
    {
      id: 12,
      name: 'জরুরি ডেন্টাল কেয়ার',
      category: 'emergency',
      description: 'ডেন্টাল জরুরি অবস্থা ও ব্যথা উপশমের তাৎক্ষণিক চিকিৎসা।',
      price: 2500,
      duration: 'প্রয়োজন অনুযায়ী',
    },
    {
      id: 13,
      name: 'ডেন্টাল ফিলিং',
      category: 'restorative',
      description: 'কম্পোজিট রেজিন দিয়ে দাঁতের গর্ত পূরণ।',
      price: 2000,
      duration: '৩০-৪৫ মিনিট',
    },
    {
      id: 14,
      name: 'দাঁত তোলা',
      category: 'surgery',
      description: 'সাধারণ ও জটিল দাঁত তোলার সেবা।',
      price: 1500,
      duration: '৩০-৬০ মিনিট',
    },
  ];

  const categories = [
    { value: 'all', label: 'সকল চিকিৎসা' },
    { value: 'preventive', label: 'প্রতিরোধমূলক চিকিৎসা' },
    { value: 'cosmetic', label: 'কসমেটিক ডেন্টিস্ট্রি' },
    { value: 'restorative', label: 'পুনরুদ্ধারকারী চিকিৎসা' },
    { value: 'orthodontic', label: 'অর্থোডন্টিক্স' },
    { value: 'periodontal', label: 'মাড়ির চিকিৎসা' },
    { value: 'emergency', label: 'জরুরি চিকিৎসা' },
    { value: 'surgery', label: 'সার্জিক্যাল চিকিৎসা' },
  ];

  const filteredTreatments = treatments.filter((treatment) => {
    const matchesSearch = treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treatment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || treatment.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/70 px-5 py-2 rounded-full shadow-sm backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-700">ডেন্টাল চিকিৎসা ও মূল্য তালিকা</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mt-4 mb-3">
            আধুনিক ডেন্টাল সেবা, স্বচ্ছ মূল্য
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            আপনার প্রয়োজন অনুযায়ী সাজানো চিকিৎসা এবং নমনীয় পেমেন্ট অপশন।
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 backdrop-blur-lg border border-white/50 rounded-2xl shadow-xl shadow-blue-100 p-6 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">
                চিকিৎসা খুঁজুন
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="চিকিৎসার নাম বা বিবরণ লিখুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
                <svg className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                ক্যাটাগরি নির্বাচন
              </label>
              <select
                id="category"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm bg-white"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment, index) => (
            <div
              key={treatment.id}
              className="group relative bg-white/80 backdrop-blur-lg border border-white/50 rounded-2xl shadow-xl shadow-blue-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-gray-900">{treatment.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{treatment.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {treatment.category}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      <span className="font-extrabold">৳</span>{toBengaliNumber(treatment.price)}
                    </div>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      সময়: {treatment.duration}
                    </p>
                  </div>
                  <div className="text-right"></div>
                </div>

                <button 
                  onClick={() => handlePageChange('appointment')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  অ্যাপয়েন্টমেন্ট বুক করুন
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-12 bg-white/70 backdrop-blur rounded-2xl border border-white/50 shadow-inner">
            <svg className="w-16 h-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33m0 0l-.431-.144a6.97 6.97 0 01-3.239-1.238l.001-.001a6.97 6.97 0 01-1.238-3.239 6.97 6.97 0 01-.144-.431m9.464 9.464l.431.144a6.97 6.97 0 013.239 1.238l.001-.001a6.97 6.97 0 011.238 3.239c.04.144.094.288.144.431" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">কোনো চিকিৎসা পাওয়া যায়নি</h3>
            <p className="text-gray-600">অনুগ্রহ করে সার্চ বা ক্যাটাগরি ফিল্টার পরিবর্তন করে দেখুন।</p>
          </div>
        )}

        {/* Insurance & Payment Info */}
        {/* <div className="bg-blue-50 rounded-lg p-6 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Insurance & Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Accepted Insurance</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Delta Dental</li>
                <li>• Blue Cross Blue Shield</li>
                <li>• Aetna</li>
                <li>• Cigna</li>
                <li>• MetLife</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Payment Methods</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Cash & Check</li>
                <li>• Credit Cards</li>
                <li>• CareCredit</li>
                <li>• Flexible Payment Plans</li>
                <li>• HSA/FSA Accepted</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Special Offers</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• New Patient Special</li>
                <li>• Family Discounts</li>
                <li>• Senior Discounts</li>
                <li>• Student Rates</li>
                <li>• Interest-Free Financing</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Treatments;
