import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface PasswordProtectedProps {
  password: string;
  children: React.ReactNode;
  message: string;
}

const PasswordProtected: React.FC<PasswordProtectedProps> = ({ 
  password, 
  children, 
  message 
}) => {
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showError, setShowError] = useState(false);
  
  // Check if password has been stored in sessionStorage
  useEffect(() => {
    const storedAuth = sessionStorage.getItem('fidelity-auth');
    if (storedAuth === 'true') {
      setIsAuthorized(true);
    }
  }, []);
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputPassword === password) {
      setIsAuthorized(true);
      setShowError(false);
      // Store in session storage so user doesn't have to enter again during this session
      sessionStorage.setItem('fidelity-auth', 'true');
    } else {
      setShowError(true);
      setInputPassword('');
    }
  };
  
  if (isAuthorized) {
    return <>{children}</>;
  }
  
  return (
    <div className="password-protection">
      <div className="mb-8">
        <div className="mb-6 font-[family-name:var(--font-fragment-sans)]">
          <ReactMarkdown>
            {message}
          </ReactMarkdown>
        </div>
        
        <form onSubmit={handlePasswordSubmit} className="mt-6">
          <div className="flex flex-col space-y-4">
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="Enter password"
              className="p-2 border border-gray-300 font-[family-name:var(--font-fragment-sans)] focus:outline-none focus:ring-1 focus:ring-black w-full max-w-sm"
              aria-label="Password"
            />
            
            <button
              type="submit"
              className="bg-black font-[family-name:var(--font-semi-diatype)] text-white p-2 hover:bg-zinc-800 w-full max-w-sm"
            >
              ACCESS CASE STUDY
            </button>
            
            {showError && (
              <p className="text-red-500 font-[family-name:var(--font-fragment-sans) text-sm">
                Incorrect password. Please try again or contact for access.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtected;