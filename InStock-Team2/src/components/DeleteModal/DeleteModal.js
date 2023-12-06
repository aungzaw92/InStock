// import React from 'react';
// import ReactDOM from 'react-dom';
// import './DeleteModal.scss';

// function DeleteModal({ deleteItem, closeModal, id, title, paragraph }) {
//   return ReactDOM.createPortal(
//     <div className="delete-modal">
//       <div className="delete-modal-dialog">
//         <button
//           type="button"
//           className="delete-modal-close-btn"
//           aria-label="Close"
//           onClick={closeModal}
//         >
//           &times;
//         </button>
//         <div className="delete-modal-content">
//           <div className="delete-modal-content-mobile">
//             <div className="delete-modal-header">
//               <h1 className="delete-modal-title">{title}</h1>
//             </div>
//             <div className="delete-modal-body">
//               <p className="delete-modal-paragraph">{paragraph}</p>
//             </div>
//           </div>
//           <div className="delete-modal-footer">
//             <button
//               type="button"
//               className="delete-modal-cancel-btn"
//               onClick={closeModal}
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               className="delete-modal-delete-btn"
//               onClick={() => deleteItem(id)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>,
//     document.getElementById('portal')
//   );
// }

// export default DeleteModal;
