import React, { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const Appointment = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    treatment: '',
    doctor: '',
    message: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const doctors = [
    { id: 1, name: 'ডাঃ মাহি রহমান', specialty: 'জেনারেল ডেন্টিস্ট' },
    { id: 2, name: 'ডাঃ আহমেদ খান', specialty: 'অর্থোডন্টিস্ট' },
    { id: 3, name: 'ডাঃ ফাতেমা আক্তার', specialty: 'পেরিওডন্টিস্ট' },
    { id: 4, name: 'ডাঃ করিম উদ্দিন', specialty: 'ওরাল সার্জন' },
  ];

  const treatments = [
    'স্কেলিং + পলিশিং',
    'দাঁত সাদাকরণ',
    'রুট ক্যানেল চিকিৎসা',
    'ডেন্টাল ইমপ্ল্যান্ট',
    'আঁকা-বাঁকা দাঁতের চিকিৎসা',
    'ডেন্টাল ফিলিং',
    'দাঁত তোলা',
    'মাড়ির চিকিৎসা',
    'জরুরি চিকিৎসা',
    'সাধারণ পরীক্ষা'
  ];

  const timeSlots = [
    '৯:০০ PM', '৯:৩০ PM', '১০:০০ PM', '১০:৩০ PM',
    '১১:০০ PM', '১১:৩০ PM', '২:০০ PM', '২:৩০ PM',
    '৩:০০ PM', '৩:৩০ PM', '৪:০০ PM', '৪:৩০ PM',
    '৫:০০ PM', '৫:৩০ PM'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Appointment Data:', formData);
    setShowConfirmation(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      treatment: '',
      doctor: '',
      message: ''
    });
    setShowConfirmation(false);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            সিরিয়াল বুক হয়েছে!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            আপনার অ্যাপয়েন্টমেন্ট সফলভাবে বুক হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
          </p>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">অ্যাপয়েন্টমেন্টের বিবরণ:</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">নাম: {formData.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">তারিখ: {formData.date}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">সময়: {formData.time}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">চিকিৎসা: {formData.treatment}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">ডাক্তার: {formData.doctor}</p>
          </div>
          <button
            onClick={resetForm}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            নতুন অ্যাপয়েন্টমেন্ট বুক করুন
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            সিরিয়াল বুকিং
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            আপনার সুবিধাজনক সময়ে অ্যাপয়েন্টমেন্ট বুক করুন। আমরা দ্রুততম সময়ে আপনার সাথে যোগাযোগ করব।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                অ্যাপয়েন্টমেন্ট ফর্ম
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      পূর্ণ নাম *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      মোবাইল নম্বর *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="০১৭xxxxxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ইমেইল ঠিকানা
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      পছন্দের তারিখ *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      পছন্দের সময় *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">সময় নির্বাচন করুন</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    চিকিৎসার ধরন *
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    required
                    value={formData.treatment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">চিকিৎসার ধরন নির্বাচন করুন</option>
                    {treatments.map((treatment) => (
                      <option key={treatment} value={treatment}>{treatment}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ডাক্তার নির্বাচন করুন
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">ডাক্তার নির্বাচন করুন (ঐচ্ছিক)</option>
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.name}>
                        {doctor.name} - {doctor.specialty}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    অতিরিক্ত তথ্য বা সমস্যার বিবরণ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="আপনার সমস্যার বিস্তারিত বিবরণ লিখুন..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  অ্যাপয়েন্টমেন্ট বুক করুন
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                যোগাযোগের তথ্য
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">০১৭২২২৭৩৪৫৫</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">info@mahidentalcare.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    ১২ৃ ডেন্টাল স্ট্রিট, হেলথ সিটি, ঢাকা
                  </span>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                কার্যসময়
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>শনি-বৃহঃ:</span>
                  <span>৪টা-১০টা</span>
                </div>
                <div className="flex justify-between">
                  <span>শুক্রবার:</span>
                  <span>বন্ধ</span>
                </div>
                <div className="flex justify-between">
                  <span>শনিবার:</span>
                  <span>বন্ধ</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-3">
                  <p className="text-red-600 dark:text-red-400 font-medium">
                    জরুরি সেবা: ২৪/৭
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-800 dark:text-red-400 mb-2">
                জরুরি অবস্থায়
              </h3>
              <p className="text-red-700 dark:text-red-300 text-sm mb-3">
                গুরুতর দাঁতের ব্যথা বা জরুরি অবস্থায় এখনই কল করুন:
              </p>
              <a 
                href="tel:+8801722273455"
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                জরুরি কল: ০১৭২২২৭৩৪৫৫
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
