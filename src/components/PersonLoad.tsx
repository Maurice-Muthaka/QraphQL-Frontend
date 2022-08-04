export const PersonLoad = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full mt-10">
                <div className="flex flex-col items-center justify-center">
                    <div className='w-3/6 h-8 animate-pulse bg-gray-300 dark:bg-[#000] rounded-xl mb-8'></div>
                    <div className='w-1/6 h-8 animate-pulse bg-gray-300 dark:bg-[#000] rounded-xl mb-8'></div>
                </div>
                {[1, 2, 3, 4].map((index: number) => (
                    <div key={index} className="flex my-10">
                        <div className='w-20 h-18 mr-6 animate-pulse bg-gray-300 dark:bg-[#000] rounded-lg'></div>
                        <div className="w-full">
                            <div className='w-2/6 h-4 animate-pulse bg-gray-300 dark:bg-[#000] rounded'></div>
                            <div className='w-1/6 h-4 animate-pulse bg-gray-300 dark:bg-[#000] rounded mt-6'></div>
                        </div> 
                    </div>
                ))}
            </div>
        </div>
    )
}