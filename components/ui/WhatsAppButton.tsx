'use client'

export default function WhatsAppButton() {
  // Replace this with your actual WhatsApp Business number (including country code, no + or spaces)
  // For example: 1234567890
  const whatsappNumber = "919007577575"
  const message = "Hi! I would like to know more about Mark In Bran's services."
  // Force cache break
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&source=website`
  console.log("Generated WhatsApp URL:", whatsappUrl)

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 md:bottom-10 md:right-10 z-50 flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgb(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[34px] h-[34px] ml-[2px] mt-[2px]"
      >
        <path d="M12.01 2.002c-5.522 0-9.998 4.477-9.998 9.998 0 1.956.556 3.784 1.516 5.33l-1.528 5.58 5.711-1.498c1.514.887 3.256 1.392 5.099 1.392 5.522 0 9.998-4.477 9.998-9.998s-4.476-9.998-9.998-9.998zm0 18.258c-1.574 0-3.056-.407-4.349-1.125l-.312-.174-3.226.846.862-3.146-.192-.304c-.792-1.258-1.255-2.736-1.255-4.321 0-4.596 3.738-8.334 8.334-8.334 4.596 0 8.334 3.738 8.334 8.334s-3.738 8.334-8.334 8.334zm4.568-6.239c-.25-.125-1.482-.731-1.712-.814-.23-.083-.398-.125-.565.125-.167.25-.648.814-.795.981-.147.167-.294.188-.544.063-.25-.125-1.057-.39-2.015-1.24-.745-.662-1.248-1.48-1.395-1.73-.147-.25-.016-.385.109-.51.112-.112.25-.292.375-.438.125-.147.167-.25.25-.417.083-.167.042-.313-.021-.438-.063-.125-.565-1.362-.774-1.865-.203-.491-.41-.424-.565-.431-.147-.007-.315-.007-.482-.007-.167 0-.441.063-.671.313-.23.25-.88.86-.88 2.096 0 1.236.901 2.433 1.026 2.6.125.167 1.774 2.706 4.298 3.794.601.259 1.07.414 1.436.53.603.191 1.152.164 1.584.099.484-.073 1.482-.606 1.691-1.192.209-.586.209-1.088.147-1.192-.062-.104-.23-.167-.48-.292z"/>
      </svg>
      
      {/* Tooltip on Hover */}
      <span className="absolute right-20 px-4 py-2 bg-white dark:bg-[#1A1A1A] text-on-surface dark:text-[#EDEDED] text-sm font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.1)] translate-x-2 group-hover:translate-x-0">
        Chat with us
      </span>
    </a>
  )
}
