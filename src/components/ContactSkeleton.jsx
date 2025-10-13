
import Skeleton from './Skeleton';

const ContactSkeleton = () => {
  return (
    <section id="contact" className="h-screen snap-start flex flex-col px-4 sm:px-8 pt-28 pb-8">
      <div className="max-w-2xl w-full mx-auto flex flex-col flex-grow text-center">
        
        {/* Main Content */}
        <div className="flex-grow">
          <Skeleton className="h-12 w-1/2 mx-auto mb-6" />
          <Skeleton className="h-6 w-3/4 mx-auto mb-12" />
          
          <div className="w-full text-left space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-24 w-full rounded-lg" />
            </div>
            <div className="text-center">
              <Skeleton className="w-48 h-12 rounded-full mx-auto" />
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="mt-12">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-8 h-8 rounded-full" />
            </div>
            <div className="text-center sm:text-right">
              <Skeleton className="h-4 w-48" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSkeleton;
