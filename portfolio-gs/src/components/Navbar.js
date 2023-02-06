const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Company", href: "#" },
];

export default function Navbar() {
  return (
    <header className="black">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            {/* TODO: Add landing page link to href */}
            <a href="#">
              <div>
                <svg
                  width="100"
                  height="100"
                  version="1.0"
                  viewBox="0 0 375 375"
                >
                  <defs>
                    <clipPath id="a">
                      <path d="M51.305 185.273h285.89v23.75H51.305Zm0 0" />
                    </clipPath>
                  </defs>
                  <path
                    fill="#0b7a75"
                    d="M150.352 199.306h16.765v63c-7.719 6.774-16.851 11.969-27.39 15.594-10.543 3.617-21.633 5.422-33.266 5.422-16.523 0-31.39-3.617-44.61-10.86-13.218-7.238-23.605-17.27-31.156-30.093-7.554-12.82-11.328-27.176-11.328-43.063 0-15.894 3.774-30.254 11.328-43.078 7.551-12.82 17.938-22.848 31.157-30.078 13.218-7.238 28.164-10.86 44.843-10.86 12.582 0 24.145 2.008 34.688 6.016 10.539 4.012 19.43 9.95 26.672 17.813l-10.86 11.093c-13.054-12.906-29.652-19.359-49.797-19.359-13.375 0-25.453 2.953-36.234 8.86-10.773 5.898-19.226 14.077-25.36 24.546-6.136 10.461-9.202 22.14-9.202 35.047 0 12.899 3.066 24.54 9.203 34.922 6.133 10.387 14.55 18.57 25.25 24.547 10.695 5.98 22.734 8.969 36.11 8.969 16.987 0 31.382-4.25 43.187-12.75ZM354.494 116.697V281.9H337.26v-76.235H233.9V281.9h-17.468V116.697H233.9v73.64h103.36v-73.64Zm0 0"
                  />
                  <g clip-path="url(#a)">
                    <path
                      fill="#000001"
                      d="M51.305 185.273h285.918v24.25H51.305Zm0 0"
                    />
                  </g>
                  <path
                    fill="#fbf7f7"
                    d="M68.532 196.572h1.562v5.875c-.719.636-1.574 1.12-2.562 1.453-.98.336-2.012.5-3.094.5-1.543 0-2.934-.332-4.172-1a7.505 7.505 0 0 1-2.906-2.813c-.7-1.195-1.047-2.535-1.047-4.015 0-1.477.348-2.817 1.047-4.016a7.439 7.439 0 0 1 2.906-2.797c1.238-.676 2.633-1.015 4.187-1.015 1.176 0 2.254.187 3.235.562.976.375 1.805.93 2.484 1.656l-1.015 1.032c-1.211-1.196-2.758-1.797-4.641-1.797-1.242 0-2.367.277-3.375.828a5.996 5.996 0 0 0-2.36 2.281c-.574.98-.859 2.07-.859 3.266 0 1.21.285 2.297.86 3.265a6.241 6.241 0 0 0 2.343 2.297c1 .555 2.125.828 3.375.828 1.582 0 2.926-.398 4.032-1.203ZM90.42 204.275l-3.53-4.953a11.5 11.5 0 0 1-1.235.062H81.53v4.89h-1.625V188.87h5.75c1.969 0 3.508.476 4.625 1.421 1.113.938 1.672 2.227 1.672 3.86 0 1.21-.309 2.23-.922 3.062-.606.825-1.469 1.418-2.594 1.782l3.766 5.28Zm-4.796-6.266c1.52 0 2.68-.336 3.484-1.015.812-.676 1.219-1.625 1.219-2.844 0-1.238-.407-2.192-1.219-2.86-.805-.664-1.965-1-3.484-1H81.53v7.72ZM110.678 200.165H102.1l-1.86 4.11h-1.687l7.031-15.406h1.61l7.047 15.406h-1.719Zm-.594-1.328-3.703-8.265-3.687 8.265ZM127.273 198.947v5.328h-1.594v-5.328l-6.172-10.078h1.75l5.281 8.656 5.266-8.656h1.64ZM145.423 204.4a9.913 9.913 0 0 1-3.297-.547c-1.043-.363-1.851-.848-2.422-1.453l.64-1.25c.563.562 1.302 1.015 2.22 1.36a8.151 8.151 0 0 0 2.86.515c1.382 0 2.42-.25 3.108-.75.688-.508 1.032-1.172 1.032-1.985 0-.613-.188-1.101-.563-1.468a3.885 3.885 0 0 0-1.375-.844c-.543-.195-1.297-.414-2.265-.656-1.157-.29-2.086-.57-2.782-.844a4.513 4.513 0 0 1-1.765-1.234c-.492-.563-.735-1.32-.735-2.282 0-.77.203-1.472.61-2.109.414-.645 1.047-1.156 1.89-1.531.852-.383 1.91-.578 3.172-.578.883 0 1.75.12 2.594.359.844.242 1.57.574 2.187 1l-.546 1.297a7.53 7.53 0 0 0-2.079-.953 7.887 7.887 0 0 0-2.156-.313c-1.344 0-2.36.262-3.047.781-.68.524-1.015 1.188-1.015 2 0 .625.187 1.125.562 1.5.375.368.844.649 1.406.844.563.2 1.32.418 2.282.656 1.125.282 2.035.56 2.734.829a4.48 4.48 0 0 1 1.766 1.234c.488.543.734 1.29.734 2.234 0 .774-.215 1.48-.64 2.125-.419.637-1.06 1.141-1.922 1.516-.868.367-1.93.547-3.188.547ZM166.649 204.4c-1.523 0-2.902-.336-4.14-1.016a7.39 7.39 0 0 1-2.907-2.797c-.7-1.195-1.047-2.535-1.047-4.015 0-1.477.348-2.813 1.047-4 .695-1.188 1.664-2.117 2.906-2.797 1.239-.688 2.618-1.031 4.141-1.031 1.531 0 2.906.34 4.125 1.015a7.372 7.372 0 0 1 2.89 2.797c.708 1.2 1.063 2.54 1.063 4.016 0 1.48-.355 2.82-1.062 4.015a7.438 7.438 0 0 1-2.891 2.813c-1.219.668-2.594 1-4.125 1Zm0-1.438c1.219 0 2.316-.273 3.297-.828a5.955 5.955 0 0 0 2.312-2.281c.563-.977.844-2.07.844-3.281 0-1.196-.281-2.285-.844-3.266a5.851 5.851 0 0 0-2.312-2.281c-.98-.55-2.078-.828-3.297-.828-1.219 0-2.324.277-3.312.828a5.916 5.916 0 0 0-2.329 2.281c-.562.98-.843 2.07-.843 3.266 0 1.21.28 2.304.843 3.281a6.022 6.022 0 0 0 2.329 2.281c.988.555 2.093.828 3.312.828ZM196.458 188.869v15.406h-1.343l-9.891-12.5v12.5h-1.625v-15.406h1.328l9.922 12.5v-12.5ZM230.532 188.869v15.406h-1.61v-7.11h-9.624v7.11h-1.625v-15.406h1.625v6.875h9.625v-6.875ZM250.426 200.165h-8.578l-1.86 4.11h-1.687l7.031-15.406h1.61l7.046 15.406h-1.718Zm-.594-1.328-3.703-8.265-3.688 8.265ZM272.27 204.275l-3.53-4.953a11.5 11.5 0 0 1-1.235.062h-4.125v4.89h-1.625V188.87h5.75c1.968 0 3.508.476 4.625 1.421 1.113.938 1.672 2.227 1.672 3.86 0 1.21-.309 2.23-.922 3.062-.606.825-1.469 1.418-2.594 1.782l3.766 5.28Zm-4.797-6.266c1.52 0 2.68-.336 3.485-1.015.812-.676 1.219-1.625 1.219-2.844 0-1.238-.407-2.192-1.22-2.86-.804-.664-1.964-1-3.484-1h-4.093v7.72ZM295.669 188.869l-6.828 15.406h-1.594l-6.828-15.406h1.765l5.891 13.375 5.938-13.375ZM314.314 202.869v1.406H303.44v-15.406h10.547v1.421h-8.922v5.47h7.953v1.39h-7.953v5.719ZM328.634 198.947v5.328h-1.594v-5.328l-6.171-10.078h1.75l5.28 8.656 5.266-8.656h1.641Zm0 0"
                  />
                </svg>
              </div>
              <span className="sr-only">Grayson Harvey</span>
              </a>
              </div>
              </div>
      </nav>
    </header>
  );
}
