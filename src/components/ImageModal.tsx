import { useEffect } from 'react';

export default function ImageModal({ 
  isOpen, 
  imageUrl, 
  altText, 
  onClose 
}: { 
  isOpen: boolean; 
  imageUrl: string; 
  altText: string; 
  onClose: () => void; 
}) {
  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl max-h-[90vh] w-full flex justify-center items-center group"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/50 hover:text-white text-4xl leading-none transition-colors"
          aria-label="Close"
        >
          &times;
        </button>
        
        {/* Expanded Image */}
        <img 
          src={imageUrl} 
          alt={altText} 
          className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-surface-700/50" 
        />
      </div>
    </div>
  );
}
