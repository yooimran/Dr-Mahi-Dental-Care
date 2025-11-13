import React, { useState } from 'react';

const Treatments = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Dental Treatments & Pricing
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive dental services with transparent pricing. We accept most insurance plans and offer flexible payment options.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Search Treatments
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by treatment name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Filter by Category
              </label>
              <select
                id="category"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
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
          {filteredTreatments.map((treatment) => (
            <div key={treatment.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {treatment.name}
                  </h3>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {treatment.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 h-12">
                  {treatment.description}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ${treatment.price}
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Duration: {treatment.duration}
                    </p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setCurrentPage('appointment')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33m0 0l-.431-.144a6.97 6.97 0 01-3.239-1.238l.001-.001a6.97 6.97 0 01-1.238-3.239 6.97 6.97 0 01-.144-.431m9.464 9.464l.431.144a6.97 6.97 0 013.239 1.238l.001-.001a6.97 6.97 0 011.238 3.239c.04.144.094.288.144.431" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No treatments found</h3>
            <p className="text-gray-600 dark:text-gray-300">Try adjusting your search terms or filters.</p>
          </div>
        )}

        {/* Insurance & Payment Info */}
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Insurance & Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Accepted Insurance</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Delta Dental</li>
                <li>• Blue Cross Blue Shield</li>
                <li>• Aetna</li>
                <li>• Cigna</li>
                <li>• MetLife</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Payment Methods</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Cash & Check</li>
                <li>• Credit Cards</li>
                <li>• CareCredit</li>
                <li>• Flexible Payment Plans</li>
                <li>• HSA/FSA Accepted</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Special Offers</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• New Patient Special</li>
                <li>• Family Discounts</li>
                <li>• Senior Discounts</li>
                <li>• Student Rates</li>
                <li>• Interest-Free Financing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
