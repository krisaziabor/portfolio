export default function Hero() {
    return (
        <div className="min-h-screen bg-background flex items-center sm:items-end justify-center sm:justify-start p-8 sm:p-20 font-[family-name:var(--font-abc-diatype)]">
          <main className="text-base text-left text-foreground mx-auto sm:mx-0 max-w-[90%] sm:max-w-none">
            <ol>
              <li className="mb-4">
                Any ambition to create timeless work renders it lifeless.
                <br />
                Its morality and rebirth will always be the most beautiful.
              </li>
    
              <li className="mb-4">Kris Aziabor Dot Com, coming back soon &lt;3</li>
    
              <li>
                <a
                  href="http://krisaziabor.com/Design%20at%20Yale.pdf" 
                  target="_blank"
                  className="hover:text-orange-400"
                >
                  View my portfolio -&gt;
                </a>
              </li>
            </ol>
          </main>
        </div>
      );
}