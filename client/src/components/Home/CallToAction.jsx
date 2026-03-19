import React from 'react'

function CallToAction() {
  return (
    <div className="w-full flex justify-center px-4 mt-28">
      <div id='cta' className="flex flex-col items-center justify-center max-w-5xl w-full mx-auto rounded-2xl shadow-sm bg-gradient-to-b from-green-200 via-green-100 to-white px-4 py-20 text-center">
            <div className="flex items-center -space-x-7">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image"
                    className="h-16 w-16 rounded-full border-4 border-white" />
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image"
                    className="h-16 w-16 rounded-full border-4 border-white" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                    alt="image"
                    className="h-16 w-16 rounded-full border-4 border-white" />
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="image"
                    className="h-16 w-16 rounded-full border-4 border-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-6">
                Refine your Resume through AI
            </h1>
            <p className="text-slate-700 mt-4 max-w-md">
                Over 3 million professionals and teams trust AI to supercharge their content creation.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition font-medium text-white rounded-lg px-20 py-3 mt-10 text-sm">
                Get Started
            </button>
        </div>
    </div>
  )
}

export default CallToAction