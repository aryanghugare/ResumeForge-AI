import { PlusIcon, UploadCloudIcon, UploadIcon, XIcon , EditIcon , DeleteIcon , Delete , Trash2} from 'lucide-react'
import React from 'react'
import { useState , useEffect } from 'react'
import { dummyResumeData } from "../assets/assets.js"
import { Link , useNavigate } from 'react-router-dom'


function Dashboard() {

const [allResumes , setAllResumes] = useState([]) ;
const [showCreateResume , setShowCreateResume] = useState(false) ;
const [showUploadResume , setShowUploadResume] = useState(false) ;
const [title , setTitle] = useState("") ;
const [resume , setResume] = useState(null) ;
const [editResumeId, setEditResumeId] = useState("") ;
const [deleteConfirm ,setDeleteConfirm] = useState(false) ;
const [resumeToDeleteId, setResumeToDeleteId] = useState("") ;
const navigate = useNavigate() ;

async function createResume(e) {
e.preventDefault() ;
  setShowCreateResume(false);
navigate(`/app/builder/${Date.now()}`) ;
}

async function uploadResume(e) {
  e.preventDefault();
  setShowUploadResume(false);
navigate(`/app/builder/${Date.now()}`) ;
}

async function handleFileChange(e) {
  const file = e.target.files[0];
  if (file) {
    setResume(file);
  }
}

async function editTitle(e) {
  e.preventDefault();
  const updatedResumes = allResumes.map((resume) => {
    if (resume._id === editResumeId) {
      return { ...resume, title };
    }
    return resume;
  });
  setAllResumes(updatedResumes);
  setEditResumeId("");
  setTitle("");
console.log("Updated title for resume id", editResumeId, "is", title);
}


async function deleteResume(resumeToDeleteId) {
  const updatedResumes = allResumes.filter((resume) => resume._id !== resumeToDeleteId);
  setAllResumes(updatedResumes);
  setEditResumeId("");
  setTitle("");

}





useEffect(() => {
  setAllResumes(dummyResumeData);
}, []);




  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8 '>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to bg-slate-700 bg-clip-text text-transparent '>Welcome to your dashboard!</p>



        <div className='flex gap-4 '>
          <button  onClick={() => setShowCreateResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 
          group hover:border-indigo-500 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg'>
            <PlusIcon  className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from bg-indigo-300 to-indigo-500 text-white rounded-full ' />
            <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>Create Resume</p>
          </button>


          <button onClick={() => setShowUploadResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 
          group hover:border-indigo-500 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg'>
            <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from bg-purple-300 to-purple-500 text-white rounded-full ' />
            <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>Upload Existing</p>
          </button>

        </div>

        <hr className='border-slate-200 my-6 sm:w-[305px] ' />

        {
          allResumes.length > 0 && <div className='mt-8 space-y-4'>
            <div className='flex items-center justify-between'>
              <h2 className='text-base font-semibold text-slate-800'>Your resumes</h2>
              <p className='text-sm text-slate-500'>{allResumes.length} total</p>
            </div>

            {allResumes.map((resume) => {
              const updated = resume?.updatedAt ? new Date(resume.updatedAt) : null
              const updatedLabel = updated ? updated.toLocaleDateString() : '—'

              return (
            
                <button
                  key={resume._id}
                  className='group relative w-full text-left rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition'
                  onClick={() => navigate(`/app/builder/${resume._id}`)}
              
                >
                  <div className='absolute top-3 right-3 flex gap-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity'>
                    <EditIcon
                      className='size-5 text-slate-500 hover:text-slate-700'
                      onClick={(e) => {
                        e.stopPropagation()
                        setEditResumeId(resume._id)
                      setTitle(resume.title)
                      }}
                    />
                    <Trash2
                      className='size-5 text-slate-500 hover:text-red-600'
                      onClick={(e) => {
                        e.stopPropagation()
                        // TODO: implement delete confirmation
                        setResumeToDeleteId(resume._id)
                        setDeleteConfirm(true)
                        
                      }}
                    />
                  </div>

                  <div className='flex items-start justify-between gap-4'>
                    <div className='min-w-0'>
                      <p className='text-lg font-semibold text-slate-900 truncate'>{resume.title}</p>
                      <p className='text-sm text-slate-500 mt-1'>Updated: {updatedLabel}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        }

 {
showCreateResume && (
 <form
  onSubmit={createResume}
  onClick={() => {
    setShowCreateResume(false)
    setTitle("")
  }}
  className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center'
 >
<div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
<h2 className='text-xl font-bold mb-4 '>Create a Resume</h2>

<button
  type='button'
  aria-label='Close create resume modal'
  onClick={() => {
    setShowCreateResume(false)
    setTitle("")
  }}
  className='absolute top-3 right-3 z-10 inline-flex items-center justify-center rounded-md p-1 text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 focus:outline-none focus:ring-2 focus:ring-green-600'
>
  <XIcon className='size-5' />
</button>

<input type="text" 
placeholder='Resume Title'
className='w-full bg-white rounded-md px-4 py-2 mb-4 focus:border-green-600 ring-green-600' 
value={title}
onChange={(e) => setTitle(e.target.value)}
required
 />

<button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Create</button>

</div>

</form>
)
}

{
showUploadResume && (

  <form
    onSubmit={uploadResume}
    onClick={() => {
      setShowUploadResume(false)
      setResume(null)
    }}
    className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center'
  >
    <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
      <h2 className='text-xl font-bold mb-4 '>Upload an Existing Resume</h2>

     {resume ? (
      <div className='bg-gray-100 p-4 rounded mb-4'>
        <p className='text-sm text-gray-700'>Selected File: {resume.name}</p>
      </div>
     ) : (
<>

   <input   type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Resume Title' className='w-full bg-white rounded-md px-4 py-2 mb-4 focus:border-green-600 ring-green-600' />
<div className='text-sm text-gray-700 mb-2'>Upload a file </div>
      <input id='file' type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
    </>

 )}

<UploadIcon className='size-11 transition-all duration-300 p-2.5 bg-linear-to-br from bg-purple-300 to-purple-500 text-white rounded-full mx-auto mt-4' />
<button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Upload the resume</button>
<button
  type='button'
  aria-label='Close create resume modal'
  onClick={() => {
    setShowUploadResume(false)
    setResume(null)
  }}
  className='absolute top-3 right-3 z-10 inline-flex items-center justify-center rounded-md p-1 text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 focus:outline-none focus:ring-2 focus:ring-green-600'
>
  <XIcon className='size-5' />
</button>
   
    </div> 

  </form>
)
}


 {
editResumeId && (
 <form
  onSubmit={editTitle}
 
  className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center'
 >
<div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
<h2 className='text-xl font-bold mb-4 '>Edit the Resume Title</h2>

<button
  type='button'
  aria-label='Close create resume modal'
  onClick={() => {
    setEditResumeId(false)
    setTitle("")
  }}
  className='absolute top-3 right-3 z-10 inline-flex items-center justify-center rounded-md p-1 text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 focus:outline-none focus:ring-2 focus:ring-green-600'
>
  <XIcon className='size-5' />
</button>

<input type="text" 
placeholder='Resume Title'
className='w-full bg-white rounded-md px-4 py-2 mb-4 focus:border-green-600 ring-green-600' 
value={title}
onChange={(e) => setTitle(e.target.value)}
required
 />

<button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Update</button>

</div>

</form>
)
}

{
deleteConfirm && (
  <div className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center'>
    <div className='bg-white rounded-lg p-6 shadow-md w-full max-w-sm text-center'>
      <h2 className='text-xl font-bold mb-4'>Confirm Deletion</h2>
      <p>Are you sure you want to delete this resume?</p>
      <div className='mt-4'>
        <button
          onClick={() => {
            deleteResume(resumeToDeleteId);
            setDeleteConfirm(false);
       
          }}
          className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition'
        >
          Delete
        </button>
        <button
          onClick={() => setDeleteConfirm(false)}
          className='ml-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition'
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)
}

      </div>
    </div>
  )
}

export default Dashboard