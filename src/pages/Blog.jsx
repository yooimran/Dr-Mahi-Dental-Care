import React, { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const Blog = ({ setCurrentPage }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'দাঁতের যত্নের ১০টি সহজ উপায়',
      excerpt: 'প্রতিদিনের সহজ কিছু অভ্যাসের মাধ্যমে কীভাবে আপনি আপনার দাঁতের স্বাস্থ্য ভালো রাখতে পারেন তা জানুন।',
      category: 'preventive',
      author: 'ডাঃ মাহি রহমান',
      date: '১৫ আগস্ট, ২০২৫',
      readTime: '৫ মিনিট',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'দাঁত সাদা করার নিরাপদ পদ্ধতি',
      excerpt: 'বাড়িতে এবং ডেন্টাল অফিসে দাঁত সাদা করার বিভিন্ন পদ্ধতি ও তাদের সুবিধা-অসুবিধা সম্পর্কে জানুন।',
      category: 'cosmetic',
      author: 'ডাঃ আহমেদ খান',
      date: '১০ আগস্ট, ২০২৫',
      readTime: '৭ মিনিট',
      image: 'https://images.unsplash.com/photo-1588776814546-daab30725b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'শিশুদের দাঁতের যত্নে মায়েদের গাইড',
      excerpt: 'ছোট বয়স থেকেই কীভাবে শিশুদের দাঁতের সঠিক যত্নের অভ্যাস গড়ে তুলবেন তা জানুন।',
      category: 'pediatric',
      author: 'ডাঃ ফাতেমা আক্তার',
      date: '৫ আগস্ট, ২০২৫',
      readTime: '৬ মিনিট',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'মাড়ির রোগ: কারণ ও প্রতিকার',
      excerpt: 'মাড়ির রোগের প্রাথমিক লক্ষণ চিহ্নিত করুন এবং জানুন কীভাবে এর চিকিৎসা ও প্রতিরোধ করা যায়।',
      category: 'periodontal',
      author: 'ডাঃ করিম উদ্দিন',
      date: '১ আগস্ট, ২০২৫',
      readTime: '৮ মিনিট',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'ডেন্টাল ইমপ্ল্যান্ট: সম্পূর্ণ গাইড',
      excerpt: 'ডেন্টাল ইমপ্ল্যান্টের প্রক্রিয়া, সুবিধা এবং যত্নের বিস্তারিত তথ্য জানুন।',
      category: 'restorative',
      author: 'ডাঃ মাহি রহমান',
      date: '২৮ জুলাই, ২০২৫',
      readTime: '১০ মিনিট',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'দাঁতের ব্যথার ঘরোয়া প্রতিকার',
      excerpt: 'জরুরি অবস্থায় দাঁতের ব্যথা কমানোর নিরাপদ ঘরোয়া উপায় এবং কখন ডাক্তারের কাছে যেতে হবে।',
      category: 'emergency',
      author: 'ডাঃ আহমেদ খান',
      date: '২৫ জুলাই, ২০২৫',
      readTime: '৪ মিনিট',
      image: 'https://images.unsplash.com/photo-1445527815219-ecb3eee4d7b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      title: 'অর্থোডন্টিক চিকিৎসা: কখন প্রয়োজন?',
      excerpt: 'আঁকা-বাঁকা দাঁতের চিকিৎসার সঠিক সময় ও পদ্ধতি সম্পর্কে বিস্তারিত আলোচনা।',
      category: 'orthodontic',
      author: 'ডাঃ ফাতেমা আক্তার',
      date: '২০ জুলাই, ২০২৫',
      readTime: '৯ মিনিট',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      title: 'খাদ্যভ্যাস ও দাঁতের স্বাস্থ্য',
      excerpt: 'কোন খাবার দাঁতের জন্য ভালো এবং কোনগুলো এড়িয়ে চলা উচিত তা জানুন।',
      category: 'nutrition',
      author: 'ডাঃ করিম উদ্দিন',
      date: '১৫ জুলাই, ২০২৫',
      readTime: '৬ মিনিট',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = [
    { value: 'all', label: 'সকল পোস্ট' },
    { value: 'preventive', label: 'প্রতিরোধমূলক' },
    { value: 'cosmetic', label: 'কসমেটিক' },
    { value: 'pediatric', label: 'শিশুদের ডেন্টাল' },
    { value: 'periodontal', label: 'মাড়ির চিকিৎসা' },
    { value: 'restorative', label: 'পুনরুদ্ধারকারী' },
    { value: 'emergency', label: 'জরুরি' },
    { value: 'orthodontic', label: 'অর্থোডন্টিক' },
    { value: 'nutrition', label: 'পুষ্টি ও খাদ্য' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ডেন্টাল হেলথ ব্লগ
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            দাঁতের স্বাস্থ্য, যত্ন এবং সর্বশেষ ডেন্টাল প্রযুক্তি নিয়ে আমাদের বিশেষজ্ঞদের লেখা
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  ফিচার্ড পোস্ট
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                  পড়ুন
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {categories.find(cat => cat.value === post.category)?.label}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                    বিস্তারিত পড়ুন →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              নিয়মিত স্বাস্থ্য তথ্য পান
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং দাঁতের স্বাস্থ্য সম্পর্কে নিয়মিত গুরুত্বপূর্ণ তথ্য ও টিপস পান।
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="আপনার ইমেইল ঠিকানা"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors duration-200">
                সাবস্ক্রাইব
              </button>
            </div>
          </div>
        </div>

        {/* Dental Tips Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            দৈনন্দিন ডেন্টাল টিপস
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">দিনে দুইবার ব্রাশ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">সকাল ও রাতে ২ মিনিট করে দাঁত ব্রাশ করুন</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">ফ্লস ব্যবহার করুন</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">দাঁতের ফাঁকের ময়লা পরিষ্কারের জন্য নিয়মিত ফ্লস করুন</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">মিষ্টি কম খান</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">চিনিযুক্ত খাবার ও পানীয় সীমিত পরিমাণে গ্রহণ করুন</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">নিয়মিত চেকআপ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">প্রতি ৬ মাসে একবার ডেন্টিস্টের কাছে যান</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
