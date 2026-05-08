import { AGADI_WHATSAPP_URL } from "@/config/links";

export const FloatingWhatsApp = () => (
  <a
    href={AGADI_WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Share your story on WhatsApp with Agadi"
    className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-warm transition-transform hover:scale-105 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
  >
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.29.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32zM16.04 5.33c-5.91 0-10.71 4.8-10.71 10.71 0 1.89.5 3.74 1.44 5.36L5.33 26.67l5.41-1.42a10.69 10.69 0 0 0 5.3 1.41h.01c5.91 0 10.71-4.8 10.71-10.71 0-2.86-1.11-5.55-3.14-7.57a10.65 10.65 0 0 0-7.58-3.05zm0 19.62h-.01a8.91 8.91 0 0 1-4.54-1.24l-.32-.19-3.21.84.86-3.13-.21-.33a8.9 8.9 0 0 1-1.36-4.74c0-4.91 4-8.91 8.92-8.91 2.38 0 4.62.93 6.3 2.61a8.86 8.86 0 0 1 2.61 6.31c0 4.91-4 8.91-8.91 8.91z" />
    </svg>
    <span className="text-sm font-semibold">Share your story</span>
  </a>
);
