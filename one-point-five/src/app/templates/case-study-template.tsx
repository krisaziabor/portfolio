import React from "react";
import ReactMarkdown from 'react-markdown';

interface CaseStudyTemplateProps {
  title?: string;
  coverImage?: {
    src: string;
    alt: string;
  };
  content: string | React.ReactNode;
  metadata: {
    description: string;
    workType: string;
    discipline: string;
    techStack: string;
    acknowledgements: string;
  };
}

const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({
  title,
  coverImage,
  content,
}) => {
  return (
    <div className="case-study-piece relative">
      {title && (
        <h2 className="text-xl mb-6">{title}</h2>
      )}

       {/* Cover Image */}
       {coverImage && (
        <div className="cover-image mb-8 w-4/5">
          <img 
            src={coverImage.src} 
            alt={coverImage.alt} 
            className="w-full h-auto"
          />
        </div>
      )}
      
      <div className="w-4/5 relative font-[family-name:var(--font-fragment-sans)]">
        {/* The content */}
        <div className="pb-16">
          {typeof content === 'string' ? (
            <ReactMarkdown
            components={{
              h2: ({...props}) => (
                <h2 className="text-xl font-[family-name:var(--font-bold-semi-diatype)] mt-8 mb-6" {...props} />
              ),
              h3: ({...props}) => (
                <h3 className="text-base font-[family-name:var(--font-bold-semi-diatype)] mb-4" {...props} />
              ),
              h4: ({...props}) => (
                <h4 className="text-sm font-[family-name:var(--font-semi-diatype)] mb-4" {...props} />
              ),
              h5: ({...props}) => (
                <h5 className="text-sm text-center font-[family-name:var(--font-bold-semi-diatype)] mb-4" {...props} />
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
                // bold
                strong: ({...props}) => (
                    <strong className="font-[family-name:var(--font-bold-fragment)]" {...props} />
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

// Helper function that generates a project description with the case study metadata
export const generateCaseStudyDescription = (metadata: CaseStudyTemplateProps['metadata']) => {
  return (
    <div className="case-study-description">
      <p className="mb-6">{metadata.description}</p>
      
      <div className="metadata grid grid-cols-1 gap-y-4">
        <div className="metadata-item">
          <div className="text-xs uppercase tracking-wider mb-1 font-[family-name:var(--font-bold-semi-diatype)] font-bold">
            Work Type
          </div>
          <div className="font-[family-name:var(--font-fragment-sans)]">
            {metadata.workType}
          </div>
        </div>
        
        <div className="metadata-item">
          <div className="text-xs uppercase tracking-wider mb-1 font-[family-name:var(--font-bold-semi-diatype)] font-bold">
            Discipline
          </div>
          <div className="font-[family-name:var(--font-fragment-sans)]">
            {metadata.discipline}
          </div>
        </div>
        
        <div className="metadata-item">
          <div className="text-xs uppercase tracking-wider mb-1 font-[family-name:var(--font-bold-semi-diatype)] font-bold">
            Tech Stack
          </div>
          <div className="font-[family-name:var(--font-fragment-sans)]">
            {metadata.techStack}
          </div>
        </div>

        <div className="metadata-item">
          <div className="text-xs uppercase tracking-wider mb-1 font-[family-name:var(--font-bold-semi-diatype)] font-bold">
            Special Thanks To
          </div>
          <div className="font-[family-name:var(--font-fragment-sans)]">
            {metadata.acknowledgements}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTemplate;