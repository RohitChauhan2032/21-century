import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, Clock, ArrowRight, X, ChevronRight, Tag } from 'lucide-react';
import { blogsData } from '../../data/blogsData';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeBlog, setActiveBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Technology', 'Wastewater', 'Regulations', 'Sustainability'];

  // Filter posts
  const filteredBlogs = blogsData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOpenBlog = (blog) => {
    setActiveBlog(blog);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseBlog = () => {
    setActiveBlog(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="bg-bg-base min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Knowledge Center
          </span>
          <h1 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-4">
            Insights & Technical Resources
          </h1>
          <p className="text-slate-500">
            Stay informed with the latest updates on environmental policies, wastewater treatments, and sustainable engineering technologies.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-white p-4 rounded-2xl border border-border-base shadow-sm">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-sm shadow-primary/20'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles or tags..."
              className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl pl-11 pr-4 py-3 w-full focus:outline-none focus:border-primary transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Blog Listing Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, idx) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-border-base overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                {/* Visual Placeholder for Article Cover */}
                <div className="h-48 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 p-6 flex flex-col justify-between text-white relative">
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                  <span className="bg-primary text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md self-start relative z-10 shadow-sm">
                    {blog.category}
                  </span>
                  
                  <div className="relative z-10 flex items-center gap-1 text-[10px] text-slate-400 font-semibold bg-slate-950/40 backdrop-blur-sm self-start px-2 py-1 rounded-md">
                    <Tag className="w-3 h-3 text-secondary" />
                    <span>{blog.tags[0]}</span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-800 text-lg hover:text-primary transition-colors leading-snug">
                    <button onClick={() => handleOpenBlog(blog)} className="text-left">
                      {blog.title}
                    </button>
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed flex-grow">
                    {blog.excerpt}
                  </p>

                  <button
                    onClick={() => handleOpenBlog(blog)}
                    className="flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors mt-2"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-border-base p-8">
            <p className="text-slate-400 mb-2">No articles match your search parameters.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="text-sm font-semibold text-primary hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Full-view Modal Reader */}
      <AnimatePresence>
        {activeBlog && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseBlog}
            />

            {/* Modal Body */}
            <motion.div
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl relative border border-slate-100 z-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseBlog}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors z-20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Cover */}
              <div className="bg-slate-50 border-b border-slate-200 text-slate-800 p-8 md:p-12 relative flex flex-col justify-end min-h-[260px]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-slate-50/50 to-transparent z-10" />
                
                <div className="relative z-10 flex flex-col gap-4">
                  <span className="bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase px-3 py-1 rounded-md self-start tracking-wider">
                    {activeBlog.category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-extrabold font-display leading-tight text-slate-900">
                    {activeBlog.title}
                  </h2>
                  
                  <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4 text-primary" />
                      {activeBlog.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {activeBlog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-primary" />
                      {activeBlog.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12">
                <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed mb-10">
                  <p className="font-semibold text-slate-800 text-base mb-6 leading-relaxed">
                    {activeBlog.excerpt}
                  </p>
                  <p className="whitespace-pre-line">
                    {activeBlog.content}
                  </p>
                </div>

                {/* Tags block */}
                <div className="flex flex-wrap gap-2 border-t pt-6 mb-10">
                  {activeBlog.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-slate-50 border border-slate-200 text-slate-500 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Related Posts */}
                <div className="border-t pt-8">
                  <h4 className="font-bold text-slate-800 text-lg mb-6">Related Technical Articles</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogsData
                      .filter(b => b.id !== activeBlog.id && (b.category === activeBlog.category || b.tags.some(t => activeBlog.tags.includes(t))))
                      .slice(0, 2)
                      .map((related) => (
                        <button
                          key={related.id}
                          onClick={() => handleOpenBlog(related)}
                          className="text-left bg-slate-50 border border-slate-200 hover:border-primary rounded-2xl p-5 flex flex-col gap-2 transition-colors group"
                        >
                          <span className="text-[10px] font-semibold text-primary uppercase">{related.category}</span>
                          <h5 className="font-bold text-slate-800 text-sm group-hover:text-primary transition-colors truncate">
                            {related.title}
                          </h5>
                          <span className="text-[10px] text-slate-400 font-medium">{related.date}</span>
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
