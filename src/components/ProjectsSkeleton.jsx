
import Skeleton from './Skeleton';

const ProjectsSkeleton = () => {
  return (
    <section id="projects" className="min-h-screen snap-start px-4 sm:px-8 md:px-12 lg:px-20 pt-28 pb-10">
      <div className="max-w-5xl mx-auto w-full">
        <Skeleton className="h-10 w-1/2 mx-auto mb-8" />

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <Skeleton className="h-10 w-full sm:w-1/2 rounded-full" />
          <div className="flex flex-wrap justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="w-20 h-8 rounded-full" />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[350px]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="dark:bg-[#1a1a1a] bg-gray-100 rounded-lg p-6">
              <Skeleton className="h-40 w-full mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <Skeleton className="h-4 w-1/2 mb-4" />
              <div className="flex gap-4">
                <Skeleton className="w-1/2 h-10 rounded-full" />
                <Skeleton className="w-1/2 h-10 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Skeleton className="w-24 h-10 rounded-full" />
          <Skeleton className="w-24 h-6" />
          <Skeleton className="w-24 h-10 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSkeleton;
