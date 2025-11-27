import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Frontend Developer who loves turning simple ideas into smooth, clean, and modern user interfaces.
              I enjoy creating responsive websites that don't just look good but feel fast and intuitive to use.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm constantly improving my skills and exploring new tools, because I believe great developers are always learning.
              With a creative mindset and a problem-solving attitude, I thrive on building projects that make an impact.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I focus on clean code, user-friendly design, and bringing professional quality to every project I work on.
            </p>
          </div>

          <div className="bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Facts</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mr-3">📍</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-700 dark:text-gray-300">Noida, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mr-3">💼</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Status</p>
                  <p className="text-gray-700 dark:text-gray-300">BCA Graduate | Seeking Internship/Job</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mr-3">🎓</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Education</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bachelor of Computer Applications (BCA)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mr-3">✉️</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-700 dark:text-gray-300">karan931091kumar@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
