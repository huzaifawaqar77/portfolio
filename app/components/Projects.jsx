const Projects = () => {
  return (
    <section>
      <>
        <h2 className="my-8">
          <span className="gradient-text">My Projects</span>
        </h2>
        <div className="project-card  text-white grid gap-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-content-center ">
          <div className="p-4 ">
            <h3 className="text-xl font-bold">Workout Tracker</h3>
            <p className="font-normal">
              A full stack application that allows users to track their
              workouts.
            </p>
            <h3 className="text-xl">Technologies Used</h3>
            <div className="my-4 flex gap-2 flex-wrap">
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700 mr-2">
                React
              </span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700 mr-2">
                Node
              </span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700 mr-2">
                Express
              </span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700">
                MongoDB
              </span>
            </div>
            <p className="text-sm font-bold">With full JWT Authentication</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">Learning App (LMS)</h3>
            <p className="font-normal">
              A full stack application that allows users to take different
              courses and create courses.
            </p>
            <h3 className="text-xl">Technologies Used</h3>
            <div className="my-4 flex gap-2 flex-wrap">
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700 mr-2">
                NextJs
              </span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700 mr-2">
                React
              </span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700 mr-2">
                Supabase
              </span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700">
                Supabase Auth
              </span>
            </div>
            <p className="text-sm font-bold">
              With full Supabase JWT Authentication
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">Tickets Tracker</h3>
            <p className="font-normal">
              A full stack application that allows company and users to track
              their Tickets by their priority
            </p>
            <h3 className="text-xl">Technologies Used</h3>
            <div className="my-4 flex flex-wrap gap-2">
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700 mr-2">
                NextJs
              </span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700 mr-2">
                React
              </span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700 mr-2">
                Supabase
              </span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700">
                Supabase Auth
              </span>
            </div>
            <p className="font-bold text-sm">
              With full Supabase JWT Authentication
            </p>
          </div>
          <div className="p-4 ">
            <h3 className="text-xl font-bold">Recipe App</h3>
            <p className="font-normal">
              A full stack application that allows users to browse different
              recipes based on their categories.
            </p>
            <h3 className="text-xl">Technologies Used</h3>
            <div className="my-4 flex gap-2 flex-wrap">
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700 mr-2">
                React
              </span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700 mr-2">
                Node
              </span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700 mr-2">
                Express
              </span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-700">
                MongoDB
              </span>
            </div>
            <p className="text-sm font-bold">
              Open for all, no authentication required.
            </p>
          </div>
        </div>
      </>
    </section>
  );
};

export default Projects;
