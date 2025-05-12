

const Presentation = () => {
  return (
    <section
      className="bg-gradient-to-r from-slate-900 to-slate-700 relative mb-10 md:mb-0 w-full flex justify-between px-10 lg:px-32 gap-70 pb-10 lg:pb-0 items-end"
      id="presentation"
    >
      <div className="self-center">
        <h1 className="text-white mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          About me
        </h1>
        <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Full stack Developer with extensive experience in NodeJS, ReactJS and
Object Oriented Programming, currently learning to work with .NET and Angular contributing my ideas and solutions with
the goal of continuing my development as a Software Developer.
        </p>
        <a
          href="https://drive.google.com/file/d/1vuz-GOZIqK5Rw20D4cYQZ3uLoGoFd6d4/view?usp=sharing"
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
