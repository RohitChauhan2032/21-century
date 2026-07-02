import { useEffect } from 'react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg-base min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border-base">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Privacy Policy</h1>
            <p className="text-sm text-text-muted">Last Updated: July 01, 2026</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed flex flex-col gap-6">
          <p>
            At <strong>21st Century Enviro Engineers Pvt. Ltd.</strong>, we prioritize the privacy and security of our clients, suppliers, and website visitors. This privacy statement outlines the types of information we collect, how we handle that information, and our commitment to safeguarding your personal data.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-4 border-b pb-2">1. Information Collection</h2>
          <p>
            We collect personal information that you provide voluntarily through our website forms (e.g., Request Quote, Career Applications, and Newsletter sign-ups). This information may include your full name, email address, phone number, physical address, company name, and qualifications or resumes uploaded for job applications.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-4 border-b pb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>To reply to inquiries, generate technical project proposals, and deliver quotes.</li>
            <li>To evaluate candidates applying for job vacancies at our head office or manufacturing facilities.</li>
            <li>To distribute periodic industry updates, regulatory updates, or newsletters if you have opt-in subscribed.</li>
            <li>To improve website performance and user experience through anonymous analytics cookies.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-800 mt-4 border-b pb-2">3. Data Security and Confidentiality</h2>
          <p>
            We implement industry-standard administrative, physical, and technical security measures designed to protect your personal details from unauthorized access, modification, or leakage. We do not sell, rent, or distribute your information to third-party advertisers. Information is only shared with partners directly involved in delivering your services or as mandated by law.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-4 border-b pb-2">4. Third-Party Links</h2>
          <p>
            Our website may reference external hyperlinks (such as LinkedIn, Government Pollution Control Portals, etc.). We are not responsible for the privacy practices, content, or cookie setups on these external websites.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-4 border-b pb-2">5. Updates to This Policy</h2>
          <p>
            We reserve the right to modify this statement periodically to match legal updates or shifts in our services. Check this page to stay updated on our data security.
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-4 border-b pb-2">6. Contact Information</h2>
          <p>
            For questions or requests concerning your data privacy, write to us at:
            <br />
            <strong>21st Century Enviro Engineers Pvt. Ltd.</strong>
            <br />
            SCO 265, Sector 32, Chandigarh, India
            <br />
            Email: <a href="mailto:info@21stcenturyenviro.com" className="text-primary hover:underline">info@21stcenturyenviro.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
