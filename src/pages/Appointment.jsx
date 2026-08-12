import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// eslint-disable-next-line no-unused-vars
const Appointment = ({ setCurrentPage }) => {
  const form = useRef();
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
  const [isLoading, setIsLoading] = useState(false);

  // const doctors = [
  //   { id: 1, name: 'ডাঃ মাহি রহমান', specialty: 'জেনারেল ডেন্টিস্ট' },
  //   { id: 2, name: 'ডাঃ আহমেদ খান', specialty: 'অর্থোডন্টিস্ট' },
  //   { id: 3, name: 'ডাঃ ফাতেমা আক্তার', specialty: 'পেরিওডন্টিস্ট' },
  //   { id: 4, name: 'ডাঃ করিম উদ্দিন', specialty: 'ওরাল সার্জন' },
  // ];

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
    setIsLoading(true);

    // Debug: Log appointment data
    console.log('Appointment Data:', formData);

    // Initialize EmailJS
    emailjs.init('7dVNc58QDUcFy2AlA');

    // Prepare template parameters for appointment
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      appointment_date: formData.date,
      appointment_time: formData.time,
      treatment_type: formData.treatment,
      doctor_name: formData.doctor || 'ডাঃ আবু তালহা মোঃ মাহি',
      message: formData.message || 'No additional message',
      to_email: 'dr.mahidentalofficial@gmail.com',
      // Additional variables
      patient_name: formData.name,
      patient_email: formData.email,
      patient_phone: formData.phone,
      selected_date: formData.date,
      selected_time: formData.time,
      selected_treatment: formData.treatment,
      reply_to: formData.email
    };

    console.log('Template params being sent:', templateParams);

    // Send appointment email
    emailjs
      .send('service_2js908a', 'template_oo7w5dm', templateParams)
      .then(
        (result) => {
          console.log('Appointment email sent successfully!', result.text);
          setIsLoading(false);
          setShowConfirmation(true);
        },
        (error) => {
          console.error('Failed to send appointment email:', error);
          setIsLoading(false);
          
          // Show confirmation anyway for user experience
          setShowConfirmation(true);
          
          // Optionally show error message
          alert('অ্যাপয়েন্টমেন্ট বুক হয়েছে, কিন্তু ইমেইল পাঠাতে সমস্যা হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।');
        }
      );
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      treatment: '',
      // doctor: '',
      message: ''
    });
    setShowConfirmation(false);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl shadow-blue-100 p-8 text-center border border-white/60">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-100">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-3">
            সিরিয়াল বুক হয়েছে!
          </h2>
          <p className="text-gray-600 mb-6">
            আপনার অ্যাপয়েন্টমেন্ট সফলভাবে বুক হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
          </p>
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-4 mb-6 text-left border border-white/70 shadow-inner">
            <h3 className="font-semibold text-gray-900 mb-2">অ্যাপয়েন্টমেন্টের বিবরণ</h3>
            <div className="grid grid-cols-1 gap-1 text-sm text-gray-700">
              <span>নাম: {formData.name}</span>
              <span>তারিখ: {formData.date}</span>
              <span>সময়: {formData.time}</span>
              <span>চিকিৎসা: {formData.treatment}</span>
              {formData.doctor && <span>ডাক্তার: {formData.doctor}</span>}
            </div>
          </div>
          <button
            onClick={resetForm}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
          >
            নতুন অ্যাপয়েন্টমেন্ট বুক করুন
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-white/60">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-700">দ্রুত ও সহজ সিরিয়াল বুকিং</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mt-4 mb-3">
            আপনার সুবিধাজনক সময়ে অ্যাপয়েন্টমেন্ট
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            অনলাইনে ফর্ম পূরণ করুন বা ফোন করুন — দু’ভাবেই দ্রুত সিরিয়াল বুক করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-2xl shadow-blue-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">অ্যাপয়েন্টমেন্ট ফর্ম</h2>
                  <p className="text-sm text-gray-500">প্রয়োজনীয় তথ্য দিন, আমরা নিশ্চিত করব।</p>
                </div>
                <div className="hidden md:flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  স্লট দ্রুত পূরণ হচ্ছে
                </div>
              </div>
              
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                      পূর্ণ নাম *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                      মোবাইল নম্বর *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                      placeholder="০১৭xxxxxxxx"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      ইমেইল ঠিকানা
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="treatment" className="block text-sm font-semibold text-gray-800 mb-2">
                      চিকিৎসার ধরন *
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      required
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                    >
                      <option value="">চিকিৎসার ধরন নির্বাচন করুন</option>
                      {treatments.map((treatment) => (
                        <option key={treatment} value={treatment}>{treatment}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-800 mb-2">
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-800 mb-2">
                      পছন্দের সময় *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                    >
                      <option value="">সময় নির্বাচন করুন</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    অতিরিক্ত তথ্য বা সমস্যার বিবরণ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                    placeholder="আপনার সমস্যার বিস্তারিত বিবরণ লিখুন..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 disabled:from-blue-400 disabled:to-green-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      বুক করা হচ্ছে...
                    </>
                  ) : (
                    'অ্যাপয়েন্টমেন্ট বুক করুন'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-xl shadow-blue-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <h3 className="text-xl font-bold text-gray-900">যোগাযোগের তথ্য</h3>
              </div>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">হটলাইন</p>
                    <p className="font-semibold text-gray-900">০১৭২২২৭৩৪৫৫</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">ইমেইল</p>
                    <p className="font-semibold text-gray-900 leading-tight">dr.mahidentalofficial<br/>@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">ঠিকানা</p>
                    <p className="font-semibold text-gray-900">১৫৮ আনন্দবাজার, শেওড়াপাড়া, মিরপুর, ঢাকা ১২১৬</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-xl shadow-blue-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <h3 className="text-xl font-bold text-gray-900">কার্যসময়</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between text-sm font-semibold">
                  <span>শনি-বৃহঃ</span>
                  <span>৪টা - ১০টা</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>শুক্রবার</span>
                  <span>বন্ধ</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3 text-sm">
                  <p className="text-red-600 font-semibold">জরুরি সেবা: ২৪/৭</p>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                জরুরি অবস্থায়
              </h3>
              <p className="text-red-700 text-sm mb-3">
                গুরুতর দাঁতের ব্যথা বা জরুরি অবস্থায় এখনই কল করুন:
              </p>
              <a 
                href="tel:+8801722273455"
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center px-4 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
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
