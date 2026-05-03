import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
          style={{
            position: 'fixed',
            bottom: 28,
            right: 28,
            zIndex: 990,
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1A56DB 0%, #1E40AF 100%)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(26,86,219,0.35)',
            transition: 'box-shadow 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(26,86,219,0.5)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,86,219,0.35)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <ArrowUp size={18} color="#fff" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
