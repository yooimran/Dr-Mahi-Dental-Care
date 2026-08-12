import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// eslint-disable-next-line no-unused-vars
const Contact = ({ setCurrentPage }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Map the form field names to state field names
    const fieldMapping = {
      'user_name': 'name',
      'user_phone': 'phone', 
      'user_email': 'email',
      'message_subject': 'subject',
      'message': 'message'
    };
    const stateFieldName = fieldMapping[name] || name;
    setFormData((prev) => ({
      ...prev,
      [stateFieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Debug: Log form data
    console.log('Form data being sent:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    });

    // Initialize EmailJS with your public key
    emailjs.init('7dVNc58QDUcFy2AlA');

    // Try using emailjs.send() method with explicit parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: 'dr.mahidentalofficial@gmail.com',
      // Additional common template variables
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      message_subject: formData.subject,
      reply_to: formData.email
    };

    console.log('Template params being sent to EmailJS:', templateParams);

    emailjs
      .send('service_2js908a', 'template_rk88eht', templateParams)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setShowSuccess(true);
          setIsLoading(false);
          
          // Reset form after 3 seconds
          setTimeout(() => {
            setShowSuccess(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          console.error('EmailJS FAILED:', error);
          console.error('Error details:', {
            status: error.status,
            text: error.text,
            message: error.message
          });
          setIsLoading(false);
          
          // More specific error handling
          let errorMessage = 'ইমেইল পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।';
          if (error.status === 400) {
            errorMessage = 'ফর্মের তথ্য সঠিক নয়। দয়া করে আবার চেষ্টা করুন।';
          } else if (error.status === 403) {
            errorMessage = 'সার্ভিস অনুমোদিত নয়। অনুগ্রহ করে পরে চেষ্টা করুন।';
          } else if (error.status === 422) {
            errorMessage = 'টেমপ্লেট কনফিগারেশনে সমস্যা আছে।';
          }
          
          alert(errorMessage + ' Error: ' + (error.text || error.message));
        },
      );
  };

  const locations = [
    {
      id: 1,
      name: "ডাঃ মাহি ডেন্টাল অ্যান্ড ইমপ্ল্যান্ট সেন্টার",
      address: "১৫৮ শেওড়াপাড়া আনন্দবাজার, হেলথ কেয়ার, মিরপুর, ঢাকা ১২১৬",
        phone: '০১৭২২২৭৩৪৫৫',
      email: 'dr.mahidentalofficial@gmail.com',
      hours: "শনি-বৃহঃ ৪টা-১০টা, শুক্রবার বন্ধ",
    },
    // {
    //   id: 2,
    //   name: 'উত্তরা শাখা',
    //   address: '৪৫৬ সেক্টর ৭, উত্তরা, ঢাকা ১২৩০',
    //   phone: '০১৭১১-৭৮৯০১২',
    //   email: 'uttara@mahidentalcare.com',
    //   hours: 'রবি-বৃহঃ ১০টা-৭টা, শুক্র ১০টা-৫টা'
    // },
    // {
    //   id: 3,
    //   name: 'গুলশান শাখা',
    //   address: '৭৮৯ গুলশান এভিনিউ, গুলশান ২, ঢাকা ১২১২',
    //   phone: '০১৭১১-৩৪৫৬৭৮',
    //   email: 'gulshan@mahidentalcare.com',
    //   hours: 'সোম-শুক্র ৯টা-৬টা, শনি ৯টা-২টা'
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-white/60">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-700">দ্রুত সাড়া ও সহায়তা</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mt-4 mb-3">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            দাঁতের যেকোনো প্রশ্ন, পরামর্শ বা জরুরি বিষয় জানাতে এখনই লিখুন বা কল করুন—আমরা আপনার সেবায় প্রস্তুত।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-2xl shadow-blue-100 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">আমাদের লিখুন</h2>
                <p className="text-sm text-gray-500">প্রশ্ন, ফিডব্যাক বা জরুরি সহায়তা—সব কিছুর জন্য</p>
              </div>
              <div className="hidden md:flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                ২৪ ঘন্টার মধ্যে সাড়া
              </div>
            </div>

            {showSuccess && (
              <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4 shadow-inner">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">আপনার বার্তা সফলভাবে পাঠানো হয়েছে!</p>
                    <p className="text-sm text-gray-600">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
                  </div>
                </div>
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    পূর্ণ নাম *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    মোবাইল নম্বর *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    ইমেইল ঠিকানা *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    বিষয় *
                  </label>
                  <select
                    id="subject"
                    name="message_subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                  >
                    <option value="">বিষয় নির্বাচন করুন</option>
                    <option value="appointment">
                      অ্যাপয়েন্টমেন্ট সংক্রান্ত
                    </option>
                    <option value="treatment">চিকিৎসা সংক্রান্ত প্রশ্ন</option>
                    <option value="billing">বিল ও পেমেন্ট</option>
                    <option value="insurance">ইন্স্যুরেন্স</option>
                    <option value="emergency">জরুরি সমস্যা</option>
                    <option value="feedback">ফিডব্যাক ও পরামর্শ</option>
                    <option value="other">অন্যান্য</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  বার্তা *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                  placeholder="আপনার বার্তা বা প্রশ্ন বিস্তারিত লিখুন..."
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
                    পাঠানো হচ্ছে...
                  </>
                ) : (
                  'বার্তা পাঠান'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-xl shadow-blue-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <h3 className="text-xl font-bold text-gray-900">দ্রুত যোগাযোগ</h3>
              </div>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">হটলাইন</p>
                    <p className="font-semibold text-gray-900">০১৭২২২৭৩৪৫৫</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">ইমেইল</p>
                    <p className="font-semibold text-gray-900 leading-tight">dr.mahidentalofficial@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">জরুরি সেবা</p>
                    <p className="font-semibold text-gray-900">২৪/৭ উপলব্ধ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                <h3 className="text-xl font-bold text-gray-900">আমাদের ক্লিনিক</h3>
              </div>
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-xl shadow-blue-100 p-6"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {location.name}
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{location.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-xl shadow-blue-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <h3 className="text-xl font-bold text-gray-900">আমাদের অবস্থান</h3>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/60 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.6773931620863!2d90.37134737128907!3d23.79275747084842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b8ca6fd3b435f15%3A0x399ad2d046e1b6ef!2sDr%20Mahi%20Dental%20%26%20Implant%20Center!5e0!3m2!1sbn!2sbd!4v1731489743573!5m2!1sbn!2sbd"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Mahi Dental & Implant Center Location"
                  className="w-full h-64"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 rounded-2xl p-8 shadow-2xl shadow-blue-100 text-white">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">
              আমাদের সাথে যুক্ত থাকুন
            </h2>
            <p className="text-blue-50">
              সামাজিক মাধ্যমে আমাদের ফলো করুন এবং সর্বশেষ আপডেট পান
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.facebook.com/drmahidental"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/15 hover:bg-white/25 text-white p-3 rounded-full transition-all duration-200 border border-white/20 shadow-lg"
              title="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/8801736854227"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/15 hover:bg-white/25 text-white p-3 rounded-full transition-all duration-200 border border-white/20 shadow-lg"
              title="WhatsApp: +880 1736-854227"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/drmahidental/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/15 hover:bg-white/25 text-white p-3 rounded-full transition-all duration-200 border border-white/20 shadow-lg"
              title="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/15 rounded-xl p-4 backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-2">দ্রুত সেবা</h3>
              <p className="text-sm text-blue-50">
                আমরা ২৪ ঘন্টার মধ্যে আপনার সকল প্রশ্নের উত্তর দেওয়ার চেষ্টা করি।
              </p>
            </div>
            <div className="bg-white/15 rounded-xl p-4 backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-2">বিশেষজ্ঞ পরামর্শ</h3>
              <p className="text-sm text-blue-50">
                আমাদের অভিজ্ঞ ডাক্তাররা সবসময় আপনার সেবায় প্রস্তুত।
              </p>
            </div>
            <div className="bg-white/15 rounded-xl p-4 backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-2">সহজ অ্যাপয়েন্টমেন্ট</h3>
              <p className="text-sm text-blue-50">
                অনলাইন বা ফোনের মাধ্যমে সহজেই অ্যাপয়েন্টমেন্ট বুক করুন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
