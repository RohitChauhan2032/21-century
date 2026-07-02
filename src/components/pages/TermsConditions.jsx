import { useEffect } from 'react';
import { FileText } from 'lucide-react';

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg-base min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border-base">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Terms & Conditions</h1>
            <p className="text-sm text-text-muted">Last Updated: July 01, 2026</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed flex flex-col gap-6">
          <p>
            Welcome to the website of <strong>21st Century Enviro Engineers Pvt. Ltd.</strong> By browsing and utilizing this website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-4 border-b pb-2">1. Acceptance of Terms</h2>
          <p>
            Your access to and use of this site is subject exclusively to these Terms and Conditions. You will not use the website for any purpose that is unlawful or prohibited by these terms. If you do not accept these terms, you must immediately stop using the website.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-4 border-b pb-2">2. Intellectual Property</h2>
          <p>
            All content, graphics, layouts, logo designs, text files, and digital downloads on this website are the property of 21st Century Enviro Engineers Pvt. Ltd. or its content creators. You may not copy, reproduce, download, or distribute any part of this site without prior written permission from our corporate management.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-4 border-b pb-2">3. Service Listings & Proposals</h2>
          <p>
            The details and parameters shown on this site regarding Sewage Treatment, Effluent Treatment, and Water Plants serve only as descriptions of our engineering capabilities. Specific system dimensions, layouts, prices, and guarantees are customized for each client project and will be governed exclusively by signed commercial agreements.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-4 border-b pb-2">4. Disclaimers and Limitation of Liability</h2>
          <p>
            The content on this website is provided on an "as is" and "as available" basis. While we strive to present accurate, up-to-date details, we make no representations or warranties regarding completeness or operational correctness. We are not liable for direct or indirect losses resulting from the use of this website.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-4 border-b pb-2">5. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the courts in Chandigarh, India.
          </p>
        </div>
      </div>
    </div>
  );
}
