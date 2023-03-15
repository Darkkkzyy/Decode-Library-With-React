import type { ReactNode } from "react";

type Prop = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text:string;
  rounded?:boolean;
};
const App = ({ isOpen, onClose, children, title,text,rounded }: Prop) => {
  return isOpen ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div
          className="inline-block transform overflow-hidden rounded-lg bg-[252525] text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-[#252525] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg font-medium leading-6 text-white"
                  id="modal-headline"
                >
                  {title}
                </h3>
                <div className="flex justify-center items-center">{children}</div>
              </div>
            </div>
          </div>
          <div className="bg-[#252525] flex items-center justify-center px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button 
              type="button"
              className={`inline-flex w-full justify-center rounded-md border border-transparent bg-[#FF4E16] px-4 py-2 text-base font-medium text-white shadow-sm hover:hover:bg-orange-700 focus:outline-none focus:ring-2 focus:bg-orange-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm
              ${rounded
                  ? "rounded-[200px]"
                  : ""
              }
              "`}
              onClick={onClose}
            >
             {text}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default App;
