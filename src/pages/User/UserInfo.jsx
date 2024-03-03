function UserInfo() {
  return (
    <div className="max-w-[1200px] mx-auto " >
    <div className="px-4">
      <div> <p  className="text-center text-2xl font-medium p-2 text-black">Edit User Infomation </p></div>
      <form className="flex gap-4 flex-col px-16 text-slate-500">
        <div className="grid grid-cols-2 gap-8 justify-around flex-1">
          <fieldset className="border border-solid border-gray-300 p-3 rounded-xl">
            <legend className="text-base">First Name</legend>
            <input
              className="bg-transparent w-full px-4 rounded-base"
              type="text"
            />
          </fieldset>
          <fieldset className="border border-solid border-gray-300 p-3 rounded-xl">
            <legend className="text-base">Last Name</legend>
            <input
              type="text"
              className="bg-transparent w-full px-4 rounded-base"
            />
          </fieldset>
        </div>
        <div className="grid grid-cols-2 gap-8 justify-around flex-1">
          <fieldset className="border border-solid border-gray-300 p-3 rounded-xl">
            <legend className="text-base">Gmail</legend>
            <input
              className="bg-transparent w-full px-4 rounded-base"
              type="text"
            />
          </fieldset>
          <fieldset className="border border-solid border-gray-300 p-3 rounded-xl">
            <legend className="text-base">Date of birth</legend>
            <input
              type="text"
              className="bg-transparent w-full px-4 rounded-base"
            />
          </fieldset>
        </div>
        <div className="grid grid-cols-2 gap-8 justify-around flex-1">
          <fieldset className="border border-solid border-gray-300 p-3 rounded-xl">
            <legend className="text-base">Image</legend>
            <input
              className="bg-transparent w-full px-4 rounded-xl"
              type="file"
            />
          </fieldset>
          <fieldset className="border border-solid border-gray-300 p-3 rounded-xl">
            <legend className="text-base">Phone</legend>
            <input
              type="text"
              className="bg-transparent w-full px-4 rounded-base"
            />
          </fieldset>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-500 rounded-full dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-blue-300 after:border-blue-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
          <span className=" text-base font-medium text-slate-600 ml-3">
            Make this default shipping address
          </span>
        </label>
        <div className="flex gap-8 justify-center">
          <button
            className="btn bg-blue-500 text-white border-none px-8"
            type="submit"
          >
            Submit
          </button>
          <button
            type="reset"
            className="btn bg-slate-400 text-white border-none px-8"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default UserInfo;
