import React, { useState } from 'react';

const Doctors = ({ setCurrentPage }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: 'ডাঃ আবু তালহা মোঃ মাহি',
      title: 'প্রধান ডেন্টিস্ট ও প্রতিষ্ঠাতা || ওরাল ও ম্যাক্সিলোফেসিয়াল সার্জন',
      specialty: 'ওরাল ও ম্যাক্সিলোফেসিয়াল সার্জারি, জেনারেল ডেন্টিস্ট্রি, কসমেটিক ডেন্টিস্ট্রি, অর্থোডন্টিক্স ও পেরিওডন্টাল চিকিৎসা',
      education: 'এমএস (মস্কো, রাশিয়া), বিডিএস (সিএমসি), সহকারী অধ্যাপক - এমএইচ সামোরিতা মেডিকেল কলেজ',
      experience: '১0+ বছর',
      languages: 'বাংলা, ইংরেজি, রাশিয়ান',
      registration: 'বিএম অ্যান্ড ডিসি রেজিস্ট্রেশন: ৮২০১',
      description: 'ডাঃ আবু তালহা মোঃ মাহি একজন অভিজ্ঞ ওরাল ও ম্যাক্সিলোফেসিয়াল সার্জন এবং এই ক্লিনিকের প্রতিষ্ঠাতা। তিনি রাশিয়ার মস্কো থেকে এমএস ডিগ্রি অর্জন করেছেন এবং বর্তমানে এমএইচ সামোরিতা মেডিকেল কলেজে সহকারী অধ্যাপক হিসেবে কর্মরত। তিনি সাধারণ ডেন্টাল চিকিৎসা থেকে শুরু করে জটিল সার্জারি পর্যন্ত সব ধরনের ডেন্টাল সেবা প্রদানে পারদর্শী।',
      specializations: [
        'ওরাল ও ম্যাক্সিলোফেসিয়াল সার্জারি',
        'ডেন্টাল ইমপ্ল্যান্ট',
        'দাঁত তোলা ও জটিল সার্জারি',
        'সাধারণ ডেন্টাল চিকিৎসা',
        'দাঁত সাদাকরণ ও কসমেটিক ডেন্টিস্ট্রি',
        'ভেনিয়ার ও ক্রাউন',
        'রুট ক্যানেল ট্রিটমেন্ট',
        'অর্থোডন্টিক্স ও ব্রেসেস',
        'মাড়ির রোগের চিকিৎসা',
        'পেরিওডন্টাল সার্জারি',
        'ওজডম টুথ রিমুভাল',
        'সিস্ট ও টিউমার রিমুভাল'
      ],
      schedule: {
        'রবিবার': '৪টা - ১০টা',
        'সোমবার': '৪টা - ১০টা',
        'মঙ্গলবার': '৪টা - ১০টা',
        'বুধবার': '৪টা - ১০টা',
        'বৃহস্পতিবার': '৪টা - ১০টা',
        'শুক্রবার': 'বন্ধ',
        'শনিবার': '৪টা - ১০টা'
      }
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            আমাদের প্রধান ডেন্টিস্ট
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            অভিজ্ঞ ও দক্ষ ডেন্টাল বিশেষজ্ঞের সাথে পরিচিত হন যিনি আপনার দাঁতের স্বাস্থ্যের জন্য প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/Dr Mahi Dental.jpeg" 
                      alt="ডাঃ আবু তালহা মোঃ মাহি"
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {doctor.title}
                    </p>
                    <p className="text-gray-600 text-sm mb-3">
                      {doctor.specialty}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {doctor.experience} অভিজ্ঞতা
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {doctor.education}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {doctor.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {doctor.specializations.slice(0, 3).map((spec, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {spec}
                    </span>
                  ))}
                  {doctor.specializations.length > 3 && (
                    <span className="text-blue-600 text-xs">
                      +{doctor.specializations.length - 3} আরো
                    </span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setSelectedDoctor(doctor)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    বিস্তারিত দেখুন
                  </button>
                  <button 
                    onClick={() => setCurrentPage('appointment')}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    সিরিয়াল বুক করুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Detail Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <img 
                        src="/Dr Mahi Dental.jpeg" 
                        alt="ডাঃ আবু তালহা মোঃ মাহি"
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        {selectedDoctor.name}
                      </h2>
                      <p className="text-blue-600 font-medium">
                        {selectedDoctor.title}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedDoctor(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      বিশেষত্ব
                    </h3>
                    <p className="text-gray-600">
                      {selectedDoctor.specialty}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      সম্পর্কে
                    </h3>
                    <p className="text-gray-600">
                      {selectedDoctor.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      শিক্ষাগত যোগ্যতা
                    </h3>
                    <p className="text-gray-600">
                      {selectedDoctor.education}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      বিশেষ দক্ষতা
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoctor.specializations.map((spec, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      কার্যসময়
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {Object.entries(selectedDoctor.schedule).map(([day, time]) => (
                        <div key={day} className="flex justify-between bg-gray-50 p-2 rounded">
                          <span className="font-medium text-gray-900">{day}:</span>
                          <span className="text-gray-600">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      ভাষা
                    </h3>
                    <p className="text-gray-600">
                      {selectedDoctor.languages}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => setCurrentPage('appointment')}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      সিরিয়াল বুক করুন
                    </button>
                    <button 
                      onClick={() => setSelectedDoctor(null)}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      বন্ধ করুন
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Stats */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            ক্লিনিক পরিসংখ্যান
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">১০+</div>
              <div className="text-gray-600">বছরের অভিজ্ঞতা</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">১২+</div>
              <div className="text-gray-600">বিশেষ সেবা</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">১০০০+</div>
              <div className="text-gray-600">সফল চিকিৎসা</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">৯৮%</div>
              <div className="text-gray-600">রোগীর সন্তুষ্টি</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
