import Link from "next/link";

const CustomNotFoundPage = async () => {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="container text-center">
        <div className="relative mx-auto max-w-5xl px-6 md:px-12">
          <h1 className="flex items-center justify-center text-7xl font-extrabold text-black drop-shadow-md md:text-9xl">
            404
          </h1>
          <div
            className="-z-0 h-60 bg-cover bg-center bg-no-repeat md:h-80"
            style={{
              backgroundImage: 'url("/assets/images/base/404.gif")',
            }}
          ></div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Oops! You seem to be lost
            </h3>
            <p className="mt-4 text-lg text-gray-600 md:text-xl">
              The page you are looking for might have been removed or is
              temporarily unavailable.
            </p>
            <Link
              href="/"
              className="z-50 mt-8 inline-block rounded bg-primary px-8 py-4 text-lg font-semibold text-white hover:bg-primary-bold md:text-xl"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomNotFoundPage;
