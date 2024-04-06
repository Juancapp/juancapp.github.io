const birthDate = new Date("1997-09-16");
const currentDate = new Date();
const ageInMilliseconds: number = currentDate.getTime() - birthDate.getTime();
const age = Math.floor(ageInMilliseconds / 31557600000);

const Presentation = () => {
  return (
    <section
      className="bg-gradient-to-r from-slate-900 to-slate-700 relative mb-10 md:mb-0"
      id="presentation"
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl text-white mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            About me
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Hi, I'm Juan Andrés, I'm {age} years old, I'm from Uruguay and I'm a
            Full Stack Web Developer [MERN] with one year of experience.
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I work very and always trying to contribute with my knowledge, my
            disposition and my empathy to achieve the best performance. I am
            passionate about teamwork and I am one of those who believe that:
            "More camaraderie, better Results".
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I love to transmit my values in the company and at the same time I
            am passionate to learn from different visions, perspectives and
            other points of view.
          </p>
          <a
            href="https://drive.google.com/file/d/1G3PUcMhFpWRNKYgW3IICvZyvNDuixb-L/view?usp=sharing"
            target="blank"
          >
            <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-900 hover:to-slate-700  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">
              See my CV
              <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
            </button>
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg absolute bottom-0 right-20">
          <img src="./images/me.png" alt="mockup" className="w-[60%]  h-fit" />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
