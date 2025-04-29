import React, { useRef, useState } from 'react'
// You can use react-icons for icons, or import your own SVGs
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setSent(false)
    setError(false)

    const formData = new FormData(form.current);
    const senderEmail = formData.get('user_email');
    const senderName = formData.get('user_name');

    // Create template parameters
    const templateParams = {
      to_email: 'pranayburra007@gmail.com',
      from_name: senderName,
      user_name: senderName,
      user_email: senderEmail,
      subject: formData.get('subject'),
      message: formData.get('message'),
      reply_to: senderEmail,
    };

    emailjs.send(
      'service_3325n3y',      // Your Service ID
      'template_bsd3vqc',     // Your Template ID
      templateParams,
      'WyfRw1pepu_eX4kH8'    // Your Public Key
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSent(true)
        form.current.reset()
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="w-full flex flex-col items-center py-12 px-4 sm:px-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold underline underline-offset-8 decoration-4 decoration-blue-500 mb-4 text-center">
        Get in touch
      </h1>
      <p className="text-lg text-center mb-10 max-w-2xl">
        Have a question or want to work together? Feel free to drop me a message. I'd love to hear from you!
      </p>

      {/* Main Flex Section */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8">
        {/* Left: Contact Info */}
        <div className="flex-1 bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-2">Contact Info</h2>
          <p className="mb-4">Fill up form and I'll get back soon</p>
          
          {/* Email with click to mail */}
          <a href="mailto:pranayburra007@gmail.com" className="flex items-center gap-3 mb-2 hover:text-blue-400 transition-colors">
            <FaEnvelope className="text-blue-500" />
            <span>pranayburra007@gmail.com</span>
          </a>
          
          {/* Phone with click to call */}
          <a href="tel:+918688609086" className="flex items-center gap-3 mb-2 hover:text-blue-400 transition-colors group">
            <div className="relative">
              <FaPhone className="text-blue-500 group-hover:animate-bounce" />
             
            </div>
            <span>+91 8688609086</span>
          </a>
          
          {/* Location */}
          <div className="flex items-center gap-3 mb-4">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>Hyderabad, India</span>
          </div>
          
          {/* Social Links */}
          <h3 className="font-semibold mt-4 mb-2">Contact with me</h3>
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/pranayburra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <FaLinkedin className="text-2xl text-blue-700" />
            </a>
            <a 
              href="mailto:pranayburra007@gmail.com"
              className="transform hover:scale-110 transition-transform"
            >
              <FaEnvelope className="text-2xl text-red-500" />
            </a>
            <a 
              href="https://github.com/pranayburra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <FaGithub className="text-2xl text-white" />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg flex flex-col gap-4"
        >
          <label className="font-semibold">Name</label>
          <input
            type="text"
            name="user_name"
            className="p-2 rounded-xl bg-gray-800 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
            required
          />
          <label className="font-semibold">Your Email</label>
          <input
            type="email"
            name="user_email"
            className="p-2 rounded-xl bg-gray-800 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="your.email@example.com"
            required
          />
          <label className="font-semibold">Subject</label>
          <input
            type="text"
            name="subject"
            className="p-2 rounded-xl bg-gray-800 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Subject"
            required
          />
          <label className="font-semibold">Message</label>
          <textarea
            name="message"
            className="p-2 rounded-xl bg-gray-800 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Message"
            rows={4}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`mt-2 px-6 py-2 bg-gradient-to-r from-[#ff56f6] via-[#b936ee] to-[#3bace2] text-white rounded-lg font-semibold transition-all ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'}`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {sent && (
            <p className="text-green-500 mt-2 flex items-center gap-2">
              <span className="animate-pulse">✓</span> Message sent successfully!
            </p>
          )}
          {error && (
            <p className="text-red-500 mt-2 flex items-center gap-2">
              <span>⚠</span> Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact