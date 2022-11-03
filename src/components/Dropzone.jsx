
import React from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone({files, setFiles}) {

  const {
    open,
    getRootProps,
    getInputProps,
    // acceptedFiles,
    fileRejections,
  } = useDropzone({    
    maxFiles:4,
    accept: {
      'video/*':['.webm', '.mp4', '.mpeg']
    },
    noClick:true,
    noKeyboard: true,
    // onDrop: acceptedFiles => {
    //   acceptedFiles.forEach(file => setFiles([...files, file]))
    // }
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  console.log("files: ", files)

  const acceptedFileItems = files.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
    return (
      <li key={file.path}>
           {file.path} - {file.size} bytes
           <ul>
             {errors.map(e => <li key={e.code}>{e.message}</li>)}
          </ul>
 
      </li>
    ) 
   });

  return (
    <>
    <section className="container" >
      <div {...getRootProps()} className="border-2 border-dashed rounded-xl border-yellow-500 py-8">

        <input {...getInputProps()} />
        <p>DRAG & DROP FILE(S) HERE</p>
        <button type="button"  onClick={open} className="my-8 bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
						or click HERE to select file(s)
        </button>
        <p>(4 files are the maximum number of files you can drop here)</p>
      </div>
      <aside className="mt-5">
        <h4 className="font-medium underline">Accepted files</h4>
        <ul>{acceptedFileItems}</ul>

        <h4 className="font-medium underline mt-3">Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
    </>
      
  );
}
