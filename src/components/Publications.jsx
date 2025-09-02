import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Publications() {
  const publications = [
    {
      title: 'The Future of Integrated Security Operations',
      source: 'Security Management Magazine',
      date: 'May 2022',
      description: 'Exploring the convergence of cyber and physical security in modern enterprise environments.',
      link: '#', // Placeholder link
    },
    {
      title: 'Physical and Digital Convergence in Security',
      source: 'Swiftlane Blog',
      date: 'March 2022',
      description: 'How organizations can achieve seamless integration between physical access control and cybersecurity.',
      link: '#', // Placeholder link
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Articles & Publications
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Thought leadership and insights on the evolving landscape of security management.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-100">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                          {pub.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                          <p className="text-blue-600 font-semibold">{pub.source}</p>
                          <div className="flex items-center gap-1 text-slate-500">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{pub.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-6 pl-16 md:pl-0">
                      {pub.description}
                    </p>
                  </div>
                  <Button asChild variant="outline" className="flex-shrink-0 border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-300">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      Read Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}