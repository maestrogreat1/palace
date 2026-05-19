import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Country, State } from 'country-state-city';

const Form = () => {

  //  const formRef = useRef();

    // State configurations
  // const allCountries = Country.getAllCountries();
  // const [selectedCountryCode, setSelectedCountryCode] = useState('');
  // const [status, setStatus] = useState('');
  // const [isLoading, setIsLoading] = useState(false); // Controls the spinner state

  const allCountries = Country.getAllCountries();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

    // 1. Unified state for all standard text and select fields
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    company: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    address: '',
    service_type: '',
    message: '',
  });

  // 2. Handle generic text/select field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  // const [selectedState, setSelectedState] = useState('');
  // const [serviceType, setServiceType] = useState('');

  // const handleCountryChange = (e) => {
  //   const countryCode = e.target.value;
  //   setSelectedCountryCode(countryCode);
  //   setSelectedState('');
  // };

  // 3. Handle country changes specifically to clear the state dropdown selection
  const handleCountryChange = (e) => {
    const countryIsoCode = e.target.value;
    setFormData((prev) => ({
      ...prev,
      country: countryIsoCode,
      state: '', // Reset state if country alters
    }));
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStatus('');
  //   setIsLoading(true); // Turn on spinner and disable button

  // 4. Send submission data object directly using emailjs.send
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('');
    setIsLoading(true);

     // Access Vite environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Convert ISO Country/State codes to their full names for the email template readability
    const fullCountryName = Country.getCountryByCode(formData.country)?.name || '';
    const fullStateName = State.getStateByCodeAndCountry(formData.state, formData.country)?.name || '';

    const payload = {
      ...formData,
      country: fullCountryName,
      state: fullStateName,
    };

  //   emailjs
  //     .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
  //     .then((response) => {
  //       setStatus('Message and attachment sent successfully!');
  //       formRef.current.reset();
  //       setSelectedCountryCode('');
  //       setSelectedState('');
  //       setServiceType('');
  //     })
  //     .catch((err) => {
  //       console.error('Submission Error:', err);
  //       setStatus('Failed to send. Verify file size limits or SMTP configs.');
  //     })
  //     .finally(() => {
  //       setIsLoading(false); // Turn off spinner after process finishes
  //     });
  // };

emailjs
      .send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY)
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({
          from_name: '', reply_to: '', subject: '', company: '',
          phone: '', country: '', state: '', city: '',
          address: '', service_type: '', message: ''
        });
      })
      .catch((err) => {
        console.error('Submission Error:', err);
        setStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // const availableStates = selectedCountryCode 
  //   ? State.getStatesOfCountry(selectedCountryCode) 
  //   : [];

  // Get matching states from the database based on the selected country ISO code
  const availableStates = formData.country 
    ? State.getStatesOfCountry(formData.country) 
    : [];

  return (
    <div>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 space-y-2 gap-0 md:gap-x-4 '>
        <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} required placeholder='Full Name'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" name="reply_to" value={formData.reply_to} onChange={handleChange} required placeholder='Email'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder='Phone'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder='Subject'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder='Company Name'  className='p-2 border border-gray-400 bg-gray-100'/>
        <input type="text" name="service_type" value={formData.service_type} onChange={handleChange} required placeholder='Type of Service'  className='p-2 border border-gray-400 bg-gray-100'/>
        
        <select 
              name="country" 
              placeholder='Country'
              value={formData.country} 
              onChange={handleCountryChange} 
              required  
              className="className='p-2 border border-gray-400 bg-gray-100'"
            >
              <option className='w-6' value="">-- Country --</option>
              {allCountries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
        <select 
              name="state" 
              placeholder='State/Province'
              value={formData.state} 
              onChange={handleChange} 
              required 
              disabled={!formData.country}
              className="className='p-2 border border-gray-400 bg-gray-100' focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="">-- State --</option>
              {availableStates.map((state) => (
                <option key={state.isoCode} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
        <input type="text" name="city" placeholder='City' value={formData.city} onChange={handleChange} required className="p-2 border border-gray-400 bg-gray-100'p-2 shadow-sm"/>
        
        <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder='Address'  className='p-2 border border-gray-400 bg-gray-100'/>
        
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Message' className=' p-2 md:col-span-2 border border-b-gray-400 bg-gray-100' rows={4}></textarea>
        <button type="submit" 
          disabled={isLoading} className='md:col-span-2 px-5 py-2 bg-red-500 text-white hover:bg-red-600 cursor-pointer w-full'>{isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Submit Request'
          )}</button>
      </form>

      {status && (
        <p className={`mt-4 p-3 rounded text-center font-semibold text-sm ${status.includes('successfully') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          {status}
        </p>
      )}
    </div>
  )
}

export default Form
