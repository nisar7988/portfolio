import React, { useState, useEffect } from 'react';

const Thunder = () => {
  const [showThunder, setShowThunder] = useState(false);

  useEffect(() => {
    // Trigger thunder animation on page load
    const timer = setTimeout(() => {
      setShowThunder(true);
    }, 500); // Small delay to ensure page is loaded

    // Clean up animations after they complete
    const cleanupTimer = setTimeout(() => {
      setShowThunder(false);
    }, 2000); // Total animation duration

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
    };
  }, []);

  if (!showThunder) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Lightning Flash Effect */}
      {showThunder && (
        <div 
          className="absolute inset-0 animate-thunder-flash"
          style={{
            mixBlendMode: 'screen'
          }}
        />
      )}
    </div>
  );
};

export default Thunder; 