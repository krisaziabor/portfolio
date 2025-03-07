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
      
      <div className="w-4/5 relative font-[family-name:var(--font-fragment-sans)]">
        {/* Render Markdown content */}
        <div className="pb-16">
          <ReactMarkdown
            components={{
              // Style the links to match your minimalist design
              a: ({node, ...props}) => (
                <a 
                  className="underline hover:text-gray-600" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  {...props}
                />
              ),
              // Custom paragraph styling
              p: ({node, ...props}) => (
                <p className="mb-4" {...props} />
              ),
              // italics
                em: ({node, ...props}) => (
                    <em className="font-[family-name:var(--font-italic-fragment-sans)]" {...props} />
                ),
              // You can add more custom component styling here
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default WritingTemplate;