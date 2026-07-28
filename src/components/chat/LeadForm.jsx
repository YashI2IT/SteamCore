import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LeadForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    requirement: 'Quotation',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(formData);
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4 rounded-xl border border-steam-navy/10 bg-gray-50 p-4 shadow-sm"
    >
      <h4 className="mb-3 font-semibold text-steam-navy">Request a Consultation</h4>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            required
            type="text"
            name="fullName"
            placeholder="Full Name *"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-steam-navy focus:outline-none"
          />
        </div>
        <div>
          <input
            required
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-steam-navy focus:outline-none"
          />
        </div>
        <div>
          <input
            required
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number *"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-steam-navy focus:outline-none"
          />
        </div>
        <div>
          <select
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-steam-navy focus:outline-none"
          >
            <option value="Quotation">Request Quotation</option>
            <option value="Energy Audit">Energy Audit</option>
            <option value="Boiler Consultancy">Boiler Consultancy</option>
            <option value="Training">Training Program</option>
            <option value="Other">Other Query</option>
          </select>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Additional Details"
            value={formData.message}
            onChange={handleChange}
            rows={2}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-steam-navy focus:outline-none"
          />
        </div>
        <div className="flex gap-2 pt-1">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-md border border-gray-300 bg-white py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 rounded-md bg-steam-navy py-2 text-sm font-medium text-white transition-colors hover:bg-steam-navy/90 disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
