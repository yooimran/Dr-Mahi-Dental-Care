import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">ডাঃ মাহি ডেন্টাল অ্যান্ড ইমপ্ল্যান্ট সেন্টার</h3>
            <p className="text-gray-300 mb-4">
              আধুনিক প্রযুক্তি ও নম্র পদ্ধতির সাথে ব্যতিক্রমী ডেন্টাল সেবা প্রদান। 
              আপনার হাসি আমাদের অগ্রাধিকার।
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">📍 ১৫৮ আনন্দবাজার শেওড়াপাড়া মিরপুর ঢাকা ১২১৬</p>
              <p className="text-gray-300">📞 ০১৭২২২৭৩৪৫৫</p>
              <p className="text-gray-300">✉️ dr.mahidentalofficial@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">আমাদের সেবা</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">আমাদের টিম</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">রোগীর রিভিউ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">ইন্স্যুরেন্স</a></li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">কার্যসময়</h4>
            <div className="space-y-2 text-gray-300">
              <p>শনি-বৃহঃ ৪টা-১০টা</p>
              <p>শুক্রবার: বন্ধ</p>
              <p className="text-red-400 font-medium mt-4">জরুরি সেবা: ২৪/৭</p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://www.facebook.com/drmahidental"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
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
              className="text-gray-400 hover:text-green-400 transition-colors"
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
              className="text-gray-400 hover:text-pink-400 transition-colors"
              title="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © ২০২৫ ডাঃ মাহি ডেন্টাল অ্যান্ড ইমপ্ল্যান্ট সেন্টার। সকল অধিকার সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
