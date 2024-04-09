// import {useState} from "react"
// import React from "react"

// const RegistrationForm = () => {
//     const [name, setName] = useState('')
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setName("");
//         // console.log('Successful Submission')
//         console.log('Successful');
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <fieldset>
//                     <div className="Field">
//                         <label htmlFor="name">Name</label>
//                         <input id="name" 
//                         type="text" 
//                         placeholder="Name" 
//                         name="name" 
//                         value={name} 
//                         onChange={(e) => setName(e.target.value)} />
//                        <div>
//                         <button type="submit">Submit</button>
//                        </div>                       
//                     </div>
//                 </fieldset>

//         <div className="space-y-12">
//         <div className="border-b border-gray-900/10 pb-12">
//           <h1 className="text-3xl font-bold"> Login</h1>
//             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-4">
//               <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
//                 Firstname
//               </label>
//               <div className="mt-2">
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <input
//                     type="text"
//                     name="firstname"
//                     id="firstname"
//                     autoComplete="firstname"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="Firstname"
//                   />
//                 </div>
                
//                 <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
//                 Lastname
//               </label>
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <input
//                     type="text"
//                     name="lastname"
//                     id="lastname"
//                     autoComplete="lastname"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="Lastname"
//                   />
//                 </div>

//                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email Address
//               </label>
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     autoComplete="email"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="david@gmail.com"
//                   />
//                 </div>

//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                 Password
//               </label>
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     autoComplete="username"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="******"
//                   />
//                 </div>

//                 <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
//                 Role
//               </label>
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                   <input
//                     type="text"
//                     name="role"
//                     id="role"
//                     autoComplete="role"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="select role"
//                   />
//                 </div>
//               </div>
//             </div>
//             </div>
//             </div>
//             </div>



//             </form>
//         </div>
//     );
// }
 

// export default RegistrationForm;