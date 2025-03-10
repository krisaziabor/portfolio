import React from "react";
import ReactMarkdown from 'react-markdown';

interface WritingTemplateProps {
  title?: string;
  content: string;
}

const WritingTemplate: React.FC<WritingTemplateProps> = ({
  title,
  content
}) => {
  return (
    <div className="writing-piece relative">
      {title && (
        <h2 className="text-xl mb-6">{title}</h2>
      )}
      
      <div className="w-4/5 relative">
        {/* Render Markdown content */}
        <div className="pb-16">
          {typeof content === 'string' ? (
          <ReactMarkdown
            components={{
              h2: ({...props}) => (
                <h2 className="text-xl font-[family-name:var(--font-bold-semi-diatype)] mb-4" {...props} />
              ),
              h3: ({...props}) => (
                <h3 className="text-lg font-[family-name:var(--font-bold-semi-diatype)] mb-4" {...props} />
              ),
              h4: ({...props}) => (
                <h4 className="text-base font-[family-name:var(--font-semi-diatype)] mb-4" {...props} />
              ),
              // Style the links to match your minimalist design
              a: ({...props}) => (
                <a 
                  className="underline hover:text-gray-600" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  {...props}
                />
              ),
              // Custom paragraph styling
              p: ({...props}) => (
                <p className="mb-4 font-[family-name:var(--font-fragment-sans)]" {...props} />
              ),
              // italics
                em: ({...props}) => (
                    <em className="font-[family-name:var(--font-italic-fragment-sans)]" {...props} />
                ),
              // You can add more custom component styling here
            }}
          >
            {content}
          </ReactMarkdown>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
};

export default WritingTemplate;