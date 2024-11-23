import React from 'react';

function EmailRead({ email }) {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center py-8 px-4 mt-8">
      <div className="bg-white shadow-2xl rounded-lg w-full max-w-5xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
          <div className="flex items-center space-x-4">
            <img
              src={email.profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-semibold">{email.subject}</h1>
              <p className="text-sm opacity-80">{email.time}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="text-white opacity-75 hover:opacity-100 transition">
              <i className="fas fa-reply"></i>
            </button>
            <button className="text-white opacity-75 hover:opacity-100 transition">
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
        </div>

        {/* Sender and To Details */}
        <div className="p-6 space-y-4 border-b bg-gray-50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-lg font-medium text-gray-800">{email.sender}</p>
              <p className="text-sm text-gray-500">to <span>{email.to}</span></p>
            </div>
            <button className="text-blue-600 hover:underline">Reply All</button>
          </div>

          {/* Conditionally render CC and BCC if they exist */}
          {email.cc && email.cc.trim() !== "" && (
            <div className="text-sm text-gray-500 pl-2 mt-2 flex items-center">
              <span className="font-medium text-gray-700 mr-2">CC: </span>{email.cc}
            </div>
          )}
          {email.bcc && email.bcc.trim() !== "" && (
            <div className="text-sm text-gray-500 pl-2 mt-2 flex items-center">
              <span className="font-medium text-gray-700 mr-2">BCC: </span>{email.bcc}
            </div>
          )}
        </div>

        {/* Email Body */}
        <div className="p-6 text-gray-800 bg-white">
          <div
            className="leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: email.body }}
          />
        </div>

        {/* Attachments */}
        {email.attachments && email.attachments.length > 0 && (
          <div className="p-6 bg-gray-50 border-t">
            <h3 className="text-gray-800 font-medium mb-4">Attachments:</h3>
            <div className="flex flex-wrap gap-4">
              {email.attachments.map((file, index) => (
                <a
                  key={index}
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  <i className="fas fa-file-alt text-gray-500"></i>
                  <span>{file.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-b-lg border-t">
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Reply
            </button>
            <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
              Forward
            </button>
          </div>
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailRead;