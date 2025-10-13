
import Skeleton from './Skeleton';

const AboutSkeleton = () => {
  return (
    <section id="about" className="h-screen snap-start flex items-center justify-center mt-12 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        
        {/* Left Column - Image */}
        <div className="lg:col-span-1 flex justify-center">
          <Skeleton className="w-64 h-64 sm:w-80 sm:h-80 rounded-full" />
        </div>

        {/* Right Column - Text and Skills */}
        <div className="lg:col-span-2">
          <Skeleton className="h-8 w-1/3 mb-6" />
          <Skeleton className="h-4 w-full mb-4" />
          <Skeleton className="h-4 w-full mb-4" />
          <Skeleton className="h-4 w-3/4 mb-10" />
          
          <Skeleton className="h-6 w-1/4 mb-6" />
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            {Array.from({ length: 11 }).map((_, i) => (
              <Skeleton key={i} className="w-24 h-10 rounded-full" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSkeleton;
