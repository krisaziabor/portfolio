export default function Bio() {
  return (
    <main className="text-base text-left text-foreground mx-auto sm:mx-0 max-w-[90%] sm:max-w-none">
      <ol>
        <li className="mb-4">
          Any ambition to create a timeless work renders it lifeless.
          <br />
          Its cycle of mortality and rebirth will always be the most beautiful.
        </li>

        {/* Desktop only */}
        <li className="hidden sm:block">
          <a
            href="https://www.figma.com/proto/eq2KKXViLciKuTcDiBmvkg/PERSONAL-WEBSITE?page-id=219%3A96&node-id=219-291&p=f&viewport=4165%2C-7304%2C0.32&t=jCUx1QZ5E4oYo8Nn-8&scaling=contain&content-scaling=fixed&starting-point-node-id=219%3A291&hide-ui=1"
            className="hover:text-pastmaroon"
          >
            Enter exhibition (desktop only) -&gt;
          </a>
        </li>

        {/* Non-desktop only */}
        <li className="block sm:hidden">
          Please move to desktop to enter the exhibition.
        </li>
      </ol>
    </main>
  );
}