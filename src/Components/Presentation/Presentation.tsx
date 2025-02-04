const birthDate = new Date("1997-09-16");
const currentDate = new Date();
const ageInMilliseconds: number = currentDate.getTime() - birthDate.getTime();
const age = Math.floor(ageInMilliseconds / 31557600000);

const Presentation = () => {
  return (
    <section
      className="bg-gradient-to-r from-slate-900 to-slate-700 relative mb-10 md:mb-0 w-full flex justify-between pt-8 px-10 lg:px-32 gap-70 pb-10 lg:pb-0 items-end"
      id="presentation"
    >
      <div>
        <h1 className="text-white mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          About me
        </h1>
        <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Hi, I'm Juan Andrés, I'm {age} years old, I'm from Uruguay and I'm a
          Full Stack Web Developer [MERN] with a year and a half of experience.
        </p>
        <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          I love to transmit my values in the company and at the same time I am
          passionate to learn from different visions, perspectives and other
          points of view.
        </p>
        <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        I invite you to learn more about my experience and education on LinkedIn and on my Curriculum Vitae.
        </p>
        <a
          href="https://drive.google.com/file/d/1xv6nUDxVpXgiQWcmseFnqtFd-TSouL6P/view?usp=sharing"
          target="blank"
          className="inline-block"
        >
          <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-900 hover:to-slate-700 mb-10 relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">
            See my CV
            <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
          </button>
        </a>
      </div>
        <img src="./images/me.png" alt="mockup" className="w-[35%] h-max opacity-90 hidden lg:inline-block align-bottom"/>
    </section>
  );
};

export default Presentation;
