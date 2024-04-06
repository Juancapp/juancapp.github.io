import { images } from "./constants";

export default function Stack() {
  const width = 158;
  const height = 48;

  const className = (index: number) => {
    if (index <= 2)
      return "col-span-2 max-h-12 w-full object-contain lg:col-span-1";
    if (index === 3)
      return "col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1";
    return "col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1";
  };

  return (
    <div className="bg-white sm:py-32 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl pb-10 font-semibold leading-8 text-gray-900">
          Mastering the digital realm: a showcase of my tech prowess
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {images.map((img, index) => (
            <img
              className={className(index)}
              src={img.src}
              alt={img.alt}
              width={width}
              height={height}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
